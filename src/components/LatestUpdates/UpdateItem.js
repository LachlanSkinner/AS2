import React, { useState } from 'react';

const UpdateItem = ({ title, date, content }) => {
    // State to manage the visibility of the content
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the visibility of the content
    const toggleContent = () => {
        setIsOpen(!isOpen); // Toggle the visibility
    };

    return (
        <div className="update-item">
            {/* Title acts as a clickable element to toggle the content */}
            <h3 onClick={toggleContent} className="update-title" style={{ cursor: 'pointer' }}>
                {title} {isOpen ? '▲' : '▼'} {/* Downwards arrow when closed, upwards when open */}
            </h3>

            {/* Conditionally render the date and content if isOpen is true */}
            {isOpen && (
                <div className="update-content">
                    <p><strong>Date:</strong> {date}</p>
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default UpdateItem;
