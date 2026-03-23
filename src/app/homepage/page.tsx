import React from 'react';
import IntroOverlay from './components/IntroOverlay';
import NavBar from '../../components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import CareersSection from './components/CarrerSection';
import CollaboratorsSection from './components/CollaboratorsSection';
import FooterSection from '../../components/Footer';

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <div className="grain-overlay" aria-hidden="true" />
      <NavBar />
      <main>
        <HeroSection />
        <CollaboratorsSection />
        <PortfolioSection />
        <ServicesSection />
        <CareersSection />
      </main>
      <FooterSection />
    </>
  );
}