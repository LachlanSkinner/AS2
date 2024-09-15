//Athletye profiles 

import React from 'react';
import './AthleteProfiles.css'; // Import the CSS for styling
import AthleteProfile from './AthleteProfile';

// import paths for images
import athlete1Image from '../../images/athlete1.jpg';
import athlete2Image from '../../images/athlete2.jpg';
import athlete3Image from '../../images/athlete3.jpg';
import athlete4Image from '../../images/athlete4.jpg';

const AthleteProfiles = () => {
    return (
        <div id="Athletes" className="section athlete-profiles">
            <h2>Athlete Profiles</h2>
            <div className="athlete-profile-container">
                <AthleteProfile // Reusable AthleteProfile component that accepts props for flexibility
                    image={athlete1Image}
                    name="Josh Bilski"
                    specialization="Sprinting"
                    achievements={[
                        "NRS Tour of Gippsland (2023): Won multiple sprint stages, dominating the competition with explosive speed.",
                        "NRS National Criterium Series Champion (2022): Consistent victories across the criterium series earned him the overall title.",
                        "NRS Grafton to Inverell Classic (2023): Finished as the top sprinter, showcasing his prowess in one of Australia’s toughest races."
                    ]}
                />
                <AthleteProfile
                    image={athlete2Image}
                    name="Lachlan Skinner"
                    specialization="Time Trial"
                    achievements={[
                        "NRS National Time Trial Champion (2023): Secured the title with a commanding performance against the clock.",
                        "NRS Tour of Tasmania (2022): Dominated the individual time trial stage, contributing significantly to his team’s overall victory.",
                        "NRS Melbourne to Warrnambool Classic (2023): Recorded the fastest time trial split, helping his team to a podium finish."
                    ]}
                />
                <AthleteProfile
                    image={athlete3Image}
                    name="Tom Brooks"
                    specialization="Climbing"
                    achievements={[
                        "NRS Tour of Bright (2023): Claimed the King of the Mountains jersey with outstanding performances on the steepest climbs.",
                        "NRS Tour of the King Valley (2022): Won the Queen Stage, cementing his reputation as the best climber in the series.",
                        "NRS Battle on the Border (2023): Dominated the mountain stages, earning the overall climber’s classification."
                    ]}
                />
                <AthleteProfile
                    image={athlete4Image}
                    name="Luke Evans"
                    specialization="All-Rounder"
                    achievements={[
                        "NRS Tour of the Great South Coast (2023): Overall winner, excelling in both the sprint and mountain stages.",
                        "NRS Tour de Perth (2022): Claimed the overall title with consistent top finishes in multiple stages.",
                        "NRS National Capital Tour (2023): Finished on the podium, demonstrating his versatility across different terrains."
                    ]}
                />
            </div>
        </div>
    );
};

export default AthleteProfiles;
