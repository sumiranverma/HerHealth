import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import TrackCyclePage from './pages/TrackCyclePage';
import MythBustingPage from './pages/MythBustingPage';
import WebinarsPage from './pages/WebinarsPage';
import ProductsPage from './pages/ProductsPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/track-cycle" element={<TrackCyclePage />} />
                        <Route path="/myth-busting" element={<MythBustingPage />} />
                        <Route path="/webinars" element={<WebinarsPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/feedback" element={<FeedbackPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
