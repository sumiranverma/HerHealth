const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
});

router.post('/feedback', async (req, res) => {
    const user = await User.findById(req.body.userId);
    user.feedback = req.body.feedback;
    await user.save();
    res.json(user);
});

module.exports = router;
