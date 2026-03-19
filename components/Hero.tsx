import React from 'react';
import { Button } from './ui/Button';
import heroBg from '../images/LandingPageZavarchik.png';
import logoWhite from '../images/logo-metalstroi-white.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-24 text-left text-white h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4 opacity-90">
            МЕТАЛСТРОЙ Стоянов И Георгиев
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 sm:mb-12 leading-tight">
            Производство и монтаж на метални конструкции
          </h1>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <Button variant="primary" href="#contact">ЗАПИТВАНЕ</Button>
            <Button variant="secondary-dark" href="#constructions">ОБЕКТИ</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-white/30 mx-auto"></div>
      </div>

      {/* Bottom Right Logo */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-12 z-20">
        <img src={logoWhite} alt="METALSTROY" className="h-16 sm:h-20 md:h-24 lg:h-36 w-auto opacity-90" />
      </div>
    </section>
  );
};