import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AthleteProfiles from './components/AthleteProfiles/AthleteProfiles'; 
import LiveUpdates from './components/LiveUpdates/LiveUpdates';
import LatestUpdates from './components/LatestUpdates/LatestUpdates';
import Sponsors from './components/SponsorHighlights/SponsorHighlights';
import Events from './components/UpcomingEvents/UpcomingEvents';
import TrainingPlan from './components/TrainingSection/TrainingSection';
import Forum from './components/Forum/Forum';
import Footer from './components/Footer/Footer';
import RaceGallery from './components/RaceGallery/RaceGallery';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <LatestUpdates />
            <AthleteProfiles />
            <LiveUpdates />
            <Sponsors />
            <RaceGallery />
            <Events />
            <TrainingPlan />
            <Forum />
            <Footer />
        </div>
    );
}

export default App;
