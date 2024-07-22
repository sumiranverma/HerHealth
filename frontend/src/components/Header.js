import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1 className="app-title">HER HEALTH</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/track-cycle">Track Cycle</Link>
                <Link to="/myth-busting">Myth Busters</Link>
                <Link to="/webinars">Webinars</Link>
                <Link to="/products">Products</Link>
                <Link to="/feedback">Feedback</Link>
            </nav>
        </header>
    );
};

export default Header;
