//Home

import React from 'react';
import './Home.css'; // Imports the CSS file for Home
import heroImage from '../../images/hero.png'; 

const Home = () => {
    return (
        <div className="hero" id="Home">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h2 className="fade-in">Welcome to VeloNation</h2>
            </div>
        </div>
    );
};

export default Home;
