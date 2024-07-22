const mongoose = require('mongoose');

const webinarSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    registeredUsers: [String]
});

module.exports = mongoose.model('Webinar', webinarSchema);
