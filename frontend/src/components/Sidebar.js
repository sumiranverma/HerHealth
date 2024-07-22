import React, { useState } from 'react';
import './Sidebar.css';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('register');
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'}
            </button>
            {isOpen && (
                <div className="sidebar-content">
                    <div className="tabs">
                        <button className={activeTab === 'register' ? 'active' : ''} onClick={() => setActiveTab('register')}>Register</button>
                        <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</button>
                    </div>
                    {activeTab === 'register' ? <UserRegistration /> : <UserLogin />}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
