import React from 'react';
import './LatestUpdates.css'; // Import the styling
import UpdateItem from './UpdateItem'; // Import the UpdateItem component

const LatestUpdates = () => {
    return (
        <div className="content"> {/* Add the content wrapper */}
            <div className="section latest-updates">
                <h2>Latest Updates</h2>
                <UpdateItem
                    title="VeloNation Wins National Title"
                    date="August 16, 2024"
                    content="VeloNation has clinched the National Road Series title after a spectacular performance throughout the season. Congratulations to all our cyclists and support staff for their dedication and hard work!"
                />
                <UpdateItem
                    title="Upcoming Race: Tour of Victoria"
                    date="August 22-24, 2024"
                    content="The Tour of Victoria is just around the corner! Our team is preparing for this challenging race, which includes several demanding stages. Stay tuned for more details and live updates during the event."
                />
                <UpdateItem
                    title="New Club Sponsor"
                    date="August 10, 2024"
                    content="We are thrilled to announce Pure Sports Nutrition as a new club sponsor, enhancing our team's nutrition and performance for the upcoming season."
                />
            </div>
        </div>
    );
};

export default LatestUpdates;
