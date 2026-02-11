import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';

import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Aftermovie from './components/Aftermovie';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import TeamPage from './components/TeamPage';

// Home page with all sections
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Tracks />
        <Timeline />
        <Aftermovie />
        <Prizes />
        <Sponsors />
        <Team />
        <Advantages />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;