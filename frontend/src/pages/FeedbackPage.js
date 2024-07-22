import React, { useState } from 'react';
import './FeedbackPage.css';

const FeedbackPage = () => {
    const [feedbackData, setFeedbackData] = useState({
        userId: '',
        feedback: '',
    });

    const handleChange = (e) => {
        setFeedbackData({
            ...feedbackData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Feedback submitted successfully.');
    };

    return (
        <div className="feedback-container">
            <h2>Submit Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userId" placeholder="User ID" value={feedbackData.userId} onChange={handleChange} required />
                <textarea name="feedback" placeholder="Your Feedback" value={feedbackData.feedback} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackPage;
