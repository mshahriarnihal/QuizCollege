const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    scores: [{
        score: Number,
        total: Number,
        date: { type: Date, default: Date.now },
        difficulty: String,          // This stores quiz difficulty
        category: String,            // This will store quiz category
        amount: Number               // This stores number of questions
    }]
});

module.exports = mongoose.model('User', userSchema);
