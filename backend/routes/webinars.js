const express = require('express');
const router = express.Router();
const Webinar = require('../models/Webinar');

router.get('/', async (req, res) => {
    const webinars = await Webinar.find();
    res.json(webinars);
});

router.post('/', async (req, res) => {
    const newWebinar = new Webinar(req.body);
    await newWebinar.save();
    res.json(newWebinar);
});

router.post('/:id/register', async (req, res) => {
    const webinar = await Webinar.findById(req.params.id);
    webinar.registeredUsers.push(req.body.email);
    await webinar.save();
    res.json(webinar);
});

module.exports = router;
