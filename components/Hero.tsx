import React from 'react';
import { Button } from './ui/Button';
import heroBg from '../images/LandingPageZavarchik.png';
import logoWhite from '../images/logo-metalstroi-white.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
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
      <div className="relative z-10 w-full px-6 md:px-24 text-left text-white h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90">
            МЕТАЛСТРОЙ Стоянов И Георгиев
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-12 leading-tight">
            Производство и монтаж на метални конструкции
          </h1>
          <div className="flex flex-col md:flex-row justify-start gap-4">
            <Button variant="white" href="#constructions">ОБЕКТИ</Button>
            <Button variant="white" href="#contact" className="!bg-white !text-black hover:!bg-transparent hover:!text-white">ЗАПИТВАНЕ</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-white/30 mx-auto"></div>
      </div>

      {/* Bottom Right Logo */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20">
        <img src={logoWhite} alt="METALSTROY" className="h-24 md:h-36 w-auto opacity-90" />
      </div>
    </section>
  );
};