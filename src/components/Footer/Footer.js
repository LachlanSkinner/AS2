import React from 'react';
import './footer.css';  // Import from the current folder (Footer folder)
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importsicons

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2024 VeloNation. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">Terms and Conditions</a>
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
