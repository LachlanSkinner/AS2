import React, { useState } from 'react';
import './TrainingSection.css'; // Import the CSS file
import trainingImage from '../../images/Trainingplan.png'; // Training plan image

const TrainingSection = () => {
    // You can remove the progress state and handleProgress since we're not using the native video player anymore.

    return (
        <div className="training-section-container">
            {/* Training Plan Section */}
            <div className="training-section">
                <h2>Training Plan</h2>
                <p>This week’s training plan is for the third week of this block, focusing on strength endurance. We are aiming to increase every rider's TSS before criterium races begin. Please watch this week's training video as Lachlan and Josh demonstrate how to hold steady Zone 2.</p>
                
                <div className="training-plan-image-container">
                    <img src={trainingImage} alt="This Week's Training Plan" className="training-plan-image" />
                </div>

                {/* Download Button */}
                <div className="download-button-container">
                    <button className="download-button">
                        Download Training Plan
                    </button>
                </div>
            </div>

            {/* Video Section */}
            <div className="video-section">
                <h3>Watch the Training Video</h3>
                <div className="training-video-container">
                    {/* Embedding a YouTube video using iframe */}
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/KdoGhBwgbMQ?si=RUZ8mu9A8dWo94PM" 
                        title="Training Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;
