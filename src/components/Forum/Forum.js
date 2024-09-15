//Forum

import React, { useState } from 'react';
import './Forum.css';
import logoImage from '../../images/logowithtext.png'; // Import the logo 

const initialForumData = [
    {
        title: 'Fans',
        threads: [
            {
                author: 'Coach John Forrest',
                message: 'This week will be the third week of this training block. We will focus on strength endurance to increase chronic fatigue.',
                date: 'August 14, 2024'
            },
            {
                author: 'Tom Brooks',
                message: 'Hi John, will we have a rest day this week leading into next week\'s criterium race?',
                date: 'August 15, 2024'
            },
            {
                author: 'Sarah Lee',
                message: 'Thanks for the update, Coach. I’m feeling great so far and ready for the next challenge!',
                date: 'August 16, 2024'
            },
            {
                author: 'Ben Harper',
                message: 'Looking forward to the criterium race! Let’s smash this training block.',
                date: 'August 16, 2024'
            }
        ]
    },
    {
        title: 'Riders',
        threads: [
            {
                author: 'Pure Sports Nutrition',
                message: 'Pure Sports will have a marquee set up at next week\'s race. All VeloNation supporters will receive free gels!',
                date: 'August 17, 2024'
            },
            {
                author: 'Lucy Adams',
                message: 'Awesome! I love the Pure Sports gels. I’ll definitely grab a few at the race.',
                date: 'August 18, 2024'
            },
            {
                author: 'James Stewart',
                message: 'Thanks, Pure Sports! Do you have any new flavors for us to try?',
                date: 'August 19, 2024'
            }
        ]
    },
    {
        title: 'Sponsors',
        threads: [
            {
                author: 'Rouland',
                message: 'We’ll also have some special edition race jerseys available at the event!',
                date: 'August 19, 2024'
            },
            {
                author: 'John Williams',
                message: 'Great! I’ll be looking out for those jerseys. Will they be available online as well?',
                date: 'August 19, 2024'
            },
            {
                author: 'Pure Sports Nutrition',
                message: 'Pure Sports will have a marquee set up at next week\'s race. All VeloNation supporters will receive free gels!',
                date: 'August 17, 2024'
            },
        ]
    },
    {
        title: 'Training',
        threads: [
            {
                author: 'Coach John Forrest',
                message: 'Training will include hill sprints and strength intervals. Focus on endurance and tempo work.',
                date: 'August 19, 2024'
            },
            {
                author: 'Josh Bilski',
                message: 'Hill sprints are tough but I know they’ll pay off. Thanks for the guidance, Coach!',
                date: 'August 20, 2024'
            },
            {
                author: 'Luke Evans',
                message: 'Any tips for improving tempo work? I struggle maintaining a steady pace on long intervals.',
                date: 'August 20, 2024'
            }
        ]
    }
];


const Forum = () => {
    const [openTopic, setOpenTopic] = useState(null);
    const [forumData, setForumData] = useState(initialForumData);
    const [replyText, setReplyText] = useState('');
    const [isContactFormVisible, setIsContactFormVisible] = useState(false);
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [contactFormErrors, setContactFormErrors] = useState({});
    const [submittedMessage, setSubmittedMessage] = useState(''); // New state for showing submission message

    // Function to toggle topics dropdown
    const toggleTopic = (index) => {
        setOpenTopic(openTopic === index ? null : index);
    };

    //Handle post reply
    const handlePostReply = (topicIndex, e) => {
        e.preventDefault();
        if (replyText.trim()) {
            const newPost = {
                author: 'User', 
                message: replyText,
                date: new Date().toLocaleDateString()
            };
            const updatedForumData = [...forumData];
            updatedForumData[topicIndex].threads.push(newPost);
            setForumData(updatedForumData);
            setReplyText(''); // Clear reply input
        }
    };

    // Toggle contact Us form
    const toggleContactForm = () => {
        setIsContactFormVisible(!isContactFormVisible);
        setSubmittedMessage(''); // Clear the submitted message when the form is reopened
    };

    // Handle contact form input change
    const handleContactInputChange = (e) => {
        const { name, value } = e.target;
        setContactFormData({
            ...contactFormData,
            [name]: value
        });
    };

    // Validate contact form
    const validateContactForm = () => {
        const errors = {};
        if (!contactFormData.name) errors.name = 'Name is required';
        if (!contactFormData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!contactFormData.message) errors.message = 'Message is required';

        return errors;
    };

    //Handle contact form submit
    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateContactForm();
        if (Object.keys(errors).length === 0) {
            // On successful submission, show "Submitted" message
            setSubmittedMessage('Thank you for contacting us! Your message has been submitted.');
            setContactFormData({
                name: '',
                email: '',
                message: ''
            });
            setContactFormErrors({});
        } else {
            setContactFormErrors(errors);
        }
    };

    return (
        <div id="Forum" className="forum-container">
            <h2>Community Forum</h2>

            {/* Forum Topic list */}
            <div className="forum-topics">
                <h3>Topics</h3>
                {forumData.map((topic, index) => (
                    <div key={index}>
                        <h4 className="forum-topic-title" onClick={() => toggleTopic(index)}>
                            {topic.title} {openTopic === index ? '▲' : '▼'}
                        </h4>
                        {openTopic === index && (
                            <div className="forum-threads">
                                {topic.threads.map((thread, idx) => (
                                    <div className="post" key={idx}>
                                        <h4>{thread.author}</h4>
                                        <p>{thread.message}</p>
                                        <span className="timestamp">Posted on {thread.date}</span>
                                    </div>
                                ))}
                                {/* Reply Form */}
                                <form className="reply-form" onSubmit={(e) => handlePostReply(index, e)}>
                                    <label htmlFor="reply">Post Reply:</label><br />
                                    <textarea
                                        id="reply"
                                        name="reply"
                                        rows="3"
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    ></textarea><br /><br />
                                    <button type="submit" className="btn">Post Reply</button>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        {/* Contact Us Dropdown */}
        <h3 onClick={toggleContactForm} id="Contact" className="contact-us-title">
            Contact Us {isContactFormVisible ? '▲' : '▼'}
        </h3>
        {isContactFormVisible && (
            <div className="contact-us-form-container">
                <div className="contact-logo">
                    <img 
                        src={logoImage} 
                        alt="Company Logo" 
                        className="logo" 
                    />
                </div>

                <form onSubmit={handleContactFormSubmit} className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleContactInputChange}
                    />
                    {contactFormErrors.name && <p className="error-text">{contactFormErrors.name}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleContactInputChange}
                    />
                    {contactFormErrors.email && <p className="error-text">{contactFormErrors.email}</p>}

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={contactFormData.message}
                        onChange={handleContactInputChange}
                    ></textarea>
                    {contactFormErrors.message && <p className="error-text">{contactFormErrors.message}</p>}

                    <button type="submit" className="btn">Submit</button>

                    {/* Submitted message appears directly below the submit button*/}
                    {submittedMessage && <p className="submitted-message">{submittedMessage}</p>}
                </form>
            </div>
        )}
        </div>
    );
};

export default Forum;
