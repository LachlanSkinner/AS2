//Athlete Profile reusable component

import React from 'react';

const AthleteProfile = ({ image, name, specialization, achievements }) => {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="athlete-image" />
            <h3>{name}</h3>
            <p>Specialisation: {specialization}</p>
            <h4>Achievements:</h4>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
};

export default AthleteProfile;
