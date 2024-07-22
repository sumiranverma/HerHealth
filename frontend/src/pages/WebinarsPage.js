import React, { useState } from 'react';
import './WebinarsPage.css';

const WebinarsPage = () => {
    const [webinars] = useState([
        {
            title: 'Understanding Menstrual Health',
            date: '2024-07-15',
            time: '10:00 AM',
        },
        {
            title: 'Managing PCOS and PCOD',
            date: '2024-08-01',
            time: '2:00 PM',
        },
        {
            title: 'Healthy Eating During Your Period',
            date: '2024-08-10',
            time: '4:00 PM',
        },
        {
            title: 'Exercise and Menstrual Health',
            date: '2024-08-20',
            time: '11:00 AM',
        },
    ]);

    const registerForWebinar = (title) => {
        alert(`Registered for webinar: ${title}`);
    };

    const setReminder = (title) => {
        alert(`Reminder set for webinar: ${title}`);
    };

    return (
        <div className="webinars-container">
            <h2>Upcoming Webinars</h2>
            <p className="webinars-info">
                Join our expert-led webinars to gain insights on menstrual health, managing PCOS and PCOD, healthy eating during your period, and the benefits of exercise. Register now to reserve your spot and set reminders for the sessions.
            </p>
            <div className="webinars-list">
                {webinars.map((webinar, index) => (
                    <div key={index} className="webinar-entry">
                        <h3>{webinar.title}</h3>
                        <p><strong>Date:</strong> {webinar.date}</p>
                        <p><strong>Time:</strong> {webinar.time}</p>
                        <button className="webinar-button" onClick={() => registerForWebinar(webinar.title)}>Register</button>
                        <button className="webinar-button" onClick={() => setReminder(webinar.title)}>Set Reminder</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebinarsPage;
