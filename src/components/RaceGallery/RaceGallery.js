import React, { useState } from 'react';
import './RaceGallery.css'; // Import the CSS file
import event1Image from '../../images/event1.png';
import event2Image from '../../images/event2.png';
import event3Image from '../../images/event3.png';
import event4Image from '../../images/event4.png';
import event5Image from '../../images/event5.png';
import event6Image from '../../images/event6.png';

const images = [
    { src: event1Image, alt: 'Event 1' },
    { src: event2Image, alt: 'Event 2' },
    { src: event3Image, alt: 'Event 3' },
    { src: event4Image, alt: 'Event 4' },
    { src: event5Image, alt: 'Event 5' },
    { src: event6Image, alt: 'Event 6' },
];

const RaceGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = images.length;

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slideshow-container">
            <h2>Race Gallery</h2>
            <div className="slide-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`mySlides ${index === currentSlide ? 'active' : 'fade'}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>

            {/* Previous and next buttons */}
            <a className="prev" onClick={prevSlide}>
                &#10094;
            </a>
            <a className="next" onClick={nextSlide}>
                &#10095;
            </a>

            {/* Dots for navigating to specific slides */}
            <div className="dots-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default RaceGallery;
