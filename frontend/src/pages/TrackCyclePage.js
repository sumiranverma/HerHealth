import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TrackCyclePage.css';

const TrackCyclePage = () => {
    const [cycles, setCycles] = useState([
        { startDate: '2024-06-01', endDate: '2024-06-05', length: 5 },
        { startDate: '2024-07-01', endDate: '2024-07-05', length: 5 },
        { startDate: '2024-08-01', endDate: '2024-08-05', length: 5 },
    ]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reminder, setReminder] = useState('');

    const logCycle = () => {
        const startDate = selectedDate.toISOString().split('T')[0];
        const endDate = new Date(selectedDate);
        endDate.setDate(endDate.getDate() + 5); // Assume a 5-day cycle length
        const newCycle = {
            startDate: startDate,
            endDate: endDate.toISOString().split('T')[0],
            length: 5
        };
        setCycles([...cycles, newCycle]);
        setReminder(`Your next cycle starts on ${startDate}. Don't forget to log it!`);
        alert('Cycle logged successfully.');
    };

    return (
        <div className="track-cycle-container">
            <h2>Track Your Cycle</h2>
            <p>Use the calendar below to log your cycle dates. Keeping track of your cycle helps you understand your body better and manage your health effectively.</p>
            <div className="calendar-container">
                <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>
            <div className="logged-cycles">
                <h3>Previously Logged Cycles</h3>
                <div className="cycles-list">
                    {cycles.map((cycle, index) => (
                        <div key={index} className="cycle-entry">
                            <p><strong>Start Date:</strong> {cycle.startDate}</p>
                            <p><strong>End Date:</strong> {cycle.endDate}</p>
                            <p><strong>Cycle Length:</strong> {cycle.length} days</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="log-cycle-button" onClick={logCycle}>Log Cycle</button>
            {reminder && <p className="reminder">{reminder}</p>}
        </div>
    );
};

export default TrackCyclePage;
