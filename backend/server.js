const express = require('express');
const fs = require('fs'); 
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./User');
const QuizResult = require('./QuizResult'); // Might need to check again here later


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// For the Sign Up endpoint
app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const exists = await User.findOne({ username });
        if (exists) return res.status(400).json({ error: "Username taken." });
        const newUser = new User({ username, password, scores: [] });
        await newUser.save();
        res.json({ message: "Signup successful." });
    } catch (err) {
        console.error("/api/signup error:", err);
        res.status(500).json({ error: "Signup failed." });
    }
});

// Sign In
app.post('/api/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: "User not found." });
        if (user.password !== password) {
            return res.status(400).json({ error: "Invalid password." });
        }
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "6h" }
        );
        res.json({ token, username: user.username });
    } catch (err) {
        console.error("/api/signin error:", err);
        res.status(500).json({ error: "Server error." });
    }
});


//Quiz Session starts here (starting on July 27)

// Utilizing the given  Open Trivia DB for quiz questions
app.get('/api/start-quiz', async (req, res) => {
    try {

        const difficulty = req.query.difficulty || "medium"; // easy/medium/hard
        const amount = Math.max(1, Math.min(Number(req.query.amount) || 10, 50)); // Trivia API max is 50
        const category = req.query.category || ""; // OpenTDB category id or empty

        // Building Trivia API url
        let url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
        if (difficulty) url += `&difficulty=${difficulty}`;
        if (category && !isNaN(category)) url += `&category=${category}`;

        const resp = await fetch(url);
        const data = await resp.json();

        // Convert Open Trivia DB format to our Quiz College app's question format
        const questions = (data.results || []).map((q, idx) => {
            // To combine and shuffle options
            let options = [...q.incorrect_answers, q.correct_answer];
            options = options.sort(() => Math.random() - 0.5);
            return {
                id: idx + 1,
                question: q.question,
                options: options,
                answer: q.correct_answer,
                category: q.category || "",
                difficulty: q.difficulty || ""
            };
        });

        // sessionId logic stays if needed for tracking
        function generateSessionId() {
            return Math.random().toString(36).substring(2, 15);
        }
        const sid = generateSessionId();

        // Return difficulty/category/amount so the frontend can remember!
        res.json({ sessionId: sid, questions: questions, difficulty, category, amount });
    } catch (err) {
        console.error("Trivia API error:", err);
        res.status(500).json({ error: "Trivia API error." });
    }
});

//  Modified /api/submit-quiz (last modify: July 27)
app.post('/api/submit-quiz', async (req, res) => {
    const { sessionId, answers, username, difficulty, category, amount } = req.body;
    let correct = 0;
    let summary = [];
    for (let ans of answers) {
        const isCorrect = ans.answer === ans.correctAnswer;
        if (isCorrect) correct++;
        summary.push({
            id: ans.id,
            question: ans.question, // include question text
            yourAnswer: ans.answer,
            correctAnswer: ans.correctAnswer,
            isCorrect
        });
    }

    // Save to MongoDB if username provided
    let resultId = null;
    if (username) {
        try {
            // It saves to the user profile
            await User.findOneAndUpdate(
                { username },
                { $push: { scores: {
                            score: correct,
                            total: answers.length,
                            date: new Date(),
                            summary, //  save full question/answer detail
                            difficulty: difficulty || "medium",
                            category: category || "",
                            amount: amount || 10
                        } } }
            );
            // Saving to QuizResult for sharing
            const quizResult = await QuizResult.create({
                username,
                score: correct,
                total: answers.length,
                summary,
                difficulty: difficulty || "medium",
                category: category || "",
                amount: amount || 10
            });
            resultId = quizResult._id.toString();
        } catch (e) {
            console.error("Error saving user score:", e);
        }
    }

    res.json({ score: correct, total: answers.length, summary, resultId }); // <-- Send resultId!
});

// Using this to get quiz result by "ID" to enable users share scorecard
app.get('/api/result/:id', async (req, res) => {
    try {
        const result = await QuizResult.findById(req.params.id);
        if (!result) return res.status(404).json({ error: "Result not found" });
        res.json(result);
    } catch (e) {
        res.status(500).json({ error: "Server error" });
    }
});

// User Profile/History Endpoint
app.get('/api/user-history', async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(400).json({ error: "Missing username" });
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: "User not found" });


        const scores = (user.scores || []).slice().reverse();

        res.json({ scores });
    } catch (e) {
        res.status(500).json({ error: "Server error" });
    }
});


app.get('/api/leaderboard', async (req, res) => {
    try {

        const users = await User.find({});
        let attempts = [];
        users.forEach(u => {
            if (u.scores && u.scores.length > 0) {
                u.scores.forEach(s => {
                    attempts.push({
                        username: u.username,
                        score: s.score,
                        total: s.total,
                        date: s.date
                    });
                });
            }
        });

        // Sorting here, highest percentage correct first, then most recent if tied
        attempts.sort((a, b) =>
            (b.score / b.total) - (a.score / a.total) ||
            new Date(b.date) - new Date(a.date)
        );

        // only top 10 attempts
        const top = attempts.slice(0, 10);


        let myRank = null;
        const username = req.query.username;
        if (username) {
            myRank = attempts.findIndex(a => a.username === username);
        }

        res.json({ top, myRank });
    } catch (e) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Quiz College app backend is now running at http://localhost:${PORT}/`);
});
