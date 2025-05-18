import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import TokenSection from './components/TokenSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PredictionMarkets from './pages/PredictionMarkets';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <IntroSection />
              <FeatureSection />
              <TokenSection />
              <ContactSection />
            </main>
          } />
          <Route path="/markets" element={<PredictionMarkets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;