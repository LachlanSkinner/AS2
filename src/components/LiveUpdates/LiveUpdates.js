import React from 'react';
import './LiveUpdates.css'; //Import CSS file

const LiveUpdates = () => {
    return (
        <div id="Fans" className="widget">
            <h2>Live Race Updates</h2>
            <p>Real-time race updates and interactive map for race day.</p>
            {/* Embed the race map using an iframe */}
            <iframe
                src="https://racemap.com/player/100KmDuathlon2018"
                width="100%"
                height="400"
                title="Live Race Map"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LiveUpdates;
