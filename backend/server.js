const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/herhealth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const webinarRoutes = require('./routes/webinars');
const userRoutes = require('./routes/users');
app.use('/webinars', webinarRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
