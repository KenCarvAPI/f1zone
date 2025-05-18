import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import TokenSection from './components/TokenSection';
import ContactSection from './components/ContactSection';
import PredictionMarketsPage from './components/PredictionMarketsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <FeatureSection />
        <PredictionMarketsPage />
        <TokenSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App