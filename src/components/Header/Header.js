//Header

import React, { useState } from 'react';
import './Header.css';
import logoImage from '../../images/logo.png'; // Import logo image

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // To control dropdown visibility
    const [errorMessage, setErrorMessage] = useState(''); // To store validation errors

    const items = [
        { name: 'Home', anchor: '#Home' },
        { name: 'Athletes', anchor: '#Athletes' },
        { name: 'Fans', anchor: '#Fans' },
        { name: 'Sponsors', anchor: '#Sponsors' },
        { name: 'Events', anchor: '#Events' },
        { name: 'Training', anchor: '#Training' },
        { name: 'Contact', anchor: '#Contact' },
        { name: 'Forum', anchor: '#Forum' },
    ];

    // Update search results as user types
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setErrorMessage(''); // Clearerror when user types

        if (query.length > 0) {
            const filtered = items.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(filtered);
        } else {
            setFilteredResults([]);
        }
    };

    //handle search submission with validation
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        if (searchQuery.trim() === '') {
            // Input validation: Check if search query is empty
            setErrorMessage('Search query cannot be empty!');
            return;
        }

        // Proceed with search logic if input is valid
        console.log('Searching for:', searchQuery);
    };

    // Toggle  the dropdown search bar visibility
    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo on the left*/}
                <div className="logo-container">
                    <img src={logoImage} alt="VeloNation Logo" className="logo" />
                </div>

                {/* Center aligned navigation*/}
                <nav className="nav-links">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Athletes">Athletes</a></li>
                        <li><a href="#Fans">Fans</a></li>
                        <li><a href="#Sponsors">Sponsors</a></li>
                        <li><a href="#Events">Events</a></li>
                        <li><a href="#Training">Training</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <li><a href="#Forum">Forum</a></li>
                    </ul>
                </nav>

                {/* Search button and dropdown search bar*/}
                <div className="search-dropdown-container">
                    <button onClick={toggleSearchBar} className="search-button">
                        Search
                    </button>

                    {/* Search bar dropdown*/}
                    {isSearchOpen && (
                        <div className="search-bar-dropdown">
                            <form onSubmit={handleSearchSubmit}> {/* thos function checks if the searchQuery is empty before proceeding. If it's empty, it sets an error message (setErrorMessage). */}
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="search-input"
                                />
                                <button type="submit" className="search-submit">Submit</button>
                            </form>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}

                            {searchQuery && filteredResults.length > 0 && (
                                <ul className="search-results">
                                    {filteredResults.map((result, index) => (
                                        <li key={index}>
                                            <a href={result.anchor}>{result.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
