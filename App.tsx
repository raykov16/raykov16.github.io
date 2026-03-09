import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Constructions } from './components/Constructions';
import { Certificates } from './components/Certificates';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-corporate-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Constructions />
        <Certificates />
        <AboutUs />
      </main>
      <Contact />
    </div>
  );
}

export default App;