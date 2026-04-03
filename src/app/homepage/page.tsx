import React from 'react';
import { Suspense } from 'react';
import IntroOverlay from './components/IntroOverlay';
import NavBar from '../../components/Header';
import HeroSection from './components/HeroSection';
import HowSystemWorksSection from './components/HowSystemWorksSection';
import PortfolioSection from './components/PortfolioSection';
import CareersSection from './components/CarrerSection';
import CollaboratorsSection from './components/CollaboratorsSection';
import ServiceOverlayHandler from './components/ServiceOverlayHandler';
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
        <HowSystemWorksSection />
        <PortfolioSection />
        <CareersSection />
      </main>
      <Suspense fallback={null}>
        <ServiceOverlayHandler />
      </Suspense>
      <FooterSection />
    </>
  );
}
