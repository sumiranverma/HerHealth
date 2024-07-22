import React, { useState } from 'react';
import './UserRegistration.css';

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        city: '',
        country: '',
        zip: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('User registered successfully.');
    };

    return (
        <div className="registration-form">
            {/* <img src="./login.png" alt="Register" className="register-image" /> */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="mobile" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
                <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;
