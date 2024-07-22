const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cycleData: [{
        startDate: Date,
        endDate: Date
    }],
    feedback: String
});

module.exports = mongoose.model('User', userSchema);
