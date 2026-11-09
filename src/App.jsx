import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import InteractiveShowcase from './components/InteractiveShowcase';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <Features />
        <InteractiveShowcase />
        <Stats />
        <Pricing />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
