
const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
    username: String,
    score: Number,
    total: Number,
    summary: Array,     // array of questions/answers (same as your summary)
    difficulty: { type: String, default: "medium" },   // <-- new!
    category: { type: String, default: "any" },        // <-- added for category
    amount: { type: Number, default: 10 },             // <-- added for question count
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizResult', QuizResultSchema);
