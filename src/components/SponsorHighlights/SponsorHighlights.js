//Sponsot Highlights

import React, { useState } from 'react';
import './SponsorHighlights.css'; // CSS file for styling
import sponsor1Image from '../../images/sponsor1.jpg';
import sponsor2Image from '../../images/sponsor2.jpg';
import sponsor3Image from '../../images/sponsor3.png';
import sponsor4Image from '../../images/sponsor4.jpg';

const sponsorsData = [
    {
        name: 'Rauland',
        description: 'A leading provider of cycling gear and accessories, Rauland supplies our team with top-quality equipment and apparel to ensure peak performance.',
        url: 'https://www.teamrauland.com',
        image: sponsor1Image,
    },
    {
        name: 'Pure Sports Nutrition',
        description: 'Innovator in sports nutrition and energy products, Pure Sports Nutrition fuels our athletes with premium supplements and nutrition solutions.',
        url: 'https://www.puresportsnutrition.com',
        image: sponsor2Image,
    },
    {
        name: 'Blackshaw Real Estate',
        description: 'A prominent real estate agency, Blackshaw Real Estate supports our club through valuable sponsorship, enhancing our community outreach and events.',
        url: 'https://www.blackshaw.com.au',
        image: sponsor3Image,
    },
    {
        name: 'Trek Factory Racing',
        description: 'Renowned for their high-performance bicycles and racing teams, Trek Factory Racing provides us with cutting-edge bikes and technology to boost our competitive edge.',
        url: 'https://www.trekbikes.com',
        image: sponsor4Image,
    },
];

const SponsorHighlights = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the open dropdown

    // Toggle the open state for a specific sponsor
    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="Sponsors" className="section sponsor-highlights">
            <h2>Sponsor Highlights</h2>
            <div className="sponsor-container">
                <div className="sponsor-details">
                    <h3>VeloNation's Sponsors for 2024</h3>
                    <p>We are proud to feature our sponsors, whose contributions play a vital role in supporting VeloNation and advancing our club's success.</p>
                    <ul>
                        {sponsorsData.map((sponsor, index) => (
                            <li key={index}>
                                <strong onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer' }}>
                                    {sponsor.name} {openIndex === index ? '▲' : '▼'}
                                </strong>
                                {openIndex === index && <p>{sponsor.description}</p>}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sponsor-logos">
                    {sponsorsData.map((sponsor, index) => (
                        <a
                            key={index}
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={sponsor.image} alt={sponsor.name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorHighlights;
