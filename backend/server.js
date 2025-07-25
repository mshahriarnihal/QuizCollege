const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const questionsFile = path.join(__dirname, 'questions.json');
let questions = [];
try {
    const raw = JSON.parse(fs.readFileSync(questionsFile));
    questions = raw.map((q, idx) => ({
        id: idx + 1,
        question: q.question,
        options: [q.A, q.B, q.C, q.D],
        answer: q[q.answer]
    }));
} catch (e) {
    console.error("Error loading questions.json:", e);
}

function pickRandomQuestions(count, exclude = []) {
    const available = questions.filter(q => !exclude.includes(q.id));
    let selected = [];
    let used = [...exclude];
    while (selected.length < count && available.length > 0) {
        const idx = Math.floor(Math.random() * available.length);
        const q = available.splice(idx, 1)[0];
        selected.push(q);
        used.push(q.id);
    }
    return selected;
}

let sessions = {};

function generateSessionId() {
    return Math.random().toString(36).substring(2, 15);
}

app.get('/api/start-quiz', (req, res) => {
    const { sessionId } = req.query;
    let prev = [];
    if (sessionId && sessions[sessionId]) {
        prev = sessions[sessionId].asked || [];
    }
    const picked = pickRandomQuestions(10, prev);
    let sid = sessionId || generateSessionId();
    sessions[sid] = {
        asked: (prev || []).concat(picked.map(q => q.id)),
        score: 0,
    };
    // const safeQuestions = picked.map(({ id, question, options }) => ({ id, question, options }));

    const safeQuestions = picked.map(({ id, question, options, answer }) => ({
        id, question, options, answer // <-- NOW frontend receives answer for instant feedback
    }));


    res.json({ sessionId: sid, questions: safeQuestions });
});

app.post('/api/submit-quiz', (req, res) => {
    const { sessionId, answers } = req.body;
    if (!sessions[sessionId]) return res.status(400).json({ error: "Session not found" });
    let correct = 0;
    let summary = [];
    for (let ans of answers) {
        const q = questions.find(q => q.id === ans.id);
        if (!q) continue;
        const isCorrect = q.answer === ans.answer;
        if (isCorrect) correct++;
        summary.push({
            id: q.id,
            question: q.question,
            yourAnswer: ans.answer,
            correctAnswer: q.answer,
            isCorrect
        });
    }
    sessions[sessionId].score = correct;
    res.json({ score: correct, total: answers.length, summary });
});

app.listen(PORT, () => {
    console.log(`Quiz app backend running at http://localhost:${PORT}/`);
});
