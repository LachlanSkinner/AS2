import React, { useState } from 'react';
import './TrainingSection.css'; // Import the CSS file
import trainingImage from '../../images/Trainingplan.png'; // Training plan image
import trainingVideo from '../../videos/Video.mp4'; // Training video 

const TrainingSection = () => {
    const [progress, setProgress] = useState(0);

    // Function to update video progress
    const handleProgress = (event) => {
        const video = event.target;
        const progressPercentage = (video.currentTime / video.duration) * 100;
        setProgress(progressPercentage);
    };

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
                <video
                    className="training-video"
                    controls
                    onTimeUpdate={handleProgress}
                >
                    <source src={trainingVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Video Progress Bar */}
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;
