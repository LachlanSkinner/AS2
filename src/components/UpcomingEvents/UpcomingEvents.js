import React, { useState } from 'react';
import './UpcomingEvents.css'; // Import the CSS for styling

const eventsData = {
    local: [
        { name: 'Canberra Criterium Series', date: 'August 12, 2024', location: 'Canberra, ACT' },
        { name: 'ACT Road Cycling Championships', date: 'September 15, 2024', location: 'Canberra, ACT' },
        { name: 'Canberra Classic', date: 'October 20, 2024', location: 'Canberra, ACT' },
    ],
    other: [
        { name: 'Goulburn to Sydney Classic', date: 'August 12, 2024', location: 'Goulburn to Sydney, NSW' },
        { name: 'Brisbane to Gold Coast Classic', date: 'August 26, 2024', location: 'Brisbane to Gold Coast, QLD' },
        { name: 'NSW State Championships', date: 'October 5-6, 2024', location: 'Newcastle, NSW' },
        { name: 'Bowral Classic', date: 'November 2, 2024', location: 'Bowral, NSW' },
        { name: 'Melbourne to Warrnambool Classic', date: 'November 2, 2024', location: 'Melbourne to Warrnambool, VIC' },
        { name: 'Tour Down Under', date: 'January 16-21, 2025', location: 'Adelaide, SA' },
        { name: 'Tour of Tasmania', date: 'March 1-5, 2025', location: 'Tasmania' },
        { name: 'Great Southern Classic', date: 'April 20, 2025', location: 'Albany, WA' },
        { name: 'Sunshine Coast Tour', date: 'July 15-17, 2025', location: 'Sunshine Coast, QLD' },
        { name: 'Tour of the Murray', date: 'October 10-12, 2025', location: 'Albury, NSW' },
    ]
};

const UpcomingEvents = () => {
    const [showLocalEvents, setShowLocalEvents] = useState(false);
    const [showOtherEvents, setShowOtherEvents] = useState(false);

    return (
        <div id="Events" className="container upcoming-events-container">
            <h2>Upcoming Events</h2>

            {/* local Canberra Races Dropdown */}
            <div className="events-category">
                <h3 onClick={() => setShowLocalEvents(!showLocalEvents)}>
                    Local Canberra Races {showLocalEvents ? '▲' : '▼'}
                </h3>
                {showLocalEvents && (
                    <table>
                        <thead>
                            <tr>
                                <th>Upcoming Events</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventsData.local.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.name}</td>
                                    <td>{event.date}</td>
                                    <td>{event.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Other Australian Races dropdown */}
            <div className="events-category">
                <h3 onClick={() => setShowOtherEvents(!showOtherEvents)}>
                    Other Australian Races {showOtherEvents ? '▲' : '▼'}
                </h3>
                {showOtherEvents && (
                    <table>
                        <thead>
                            <tr>
                                <th>Upcoming Events</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventsData.other.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.name}</td>
                                    <td>{event.date}</td>
                                    <td>{event.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default UpcomingEvents;
