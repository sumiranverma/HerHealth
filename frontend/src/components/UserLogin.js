import React, { useState } from 'react';
import './UserLogin.css';

const UserLogin = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('User logged in successfully.');
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UserLogin;
