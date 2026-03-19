import React from 'react';
import { Button } from './ui/Button';
import heroBg from '../images/LandingPageZavarchik.png';
import heroBgMobile from '../images/LandingPageVerticalZavarchik.png';
import logoWhite from '../images/logo-metalstroi-white.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-[#050505] lg:bg-transparent overflow-hidden">
      {/* Background Image with Overlay (Mobile Only < lg) */}
      <div
        className="lg:hidden absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgMobile})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>

      {/* Background Image with Overlay (Desktop Only >= lg) */}
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start px-4 sm:px-6 md:px-12 lg:px-24">

        {/* Logo - Mobile: Top Half Centered | Desktop: Absolute Bottom Right */}
        <div className="flex-1 lg:flex-none flex items-center justify-center lg:items-start lg:justify-start lg:absolute lg:bottom-12 lg:right-12 w-full lg:w-auto pt-24 pb-8 lg:p-0">
          <img
            src={logoWhite}
            alt="METALSTROY"
            className="max-h-[140px] sm:max-h-[180px] md:max-h-[220px] lg:max-h-none lg:h-36 w-auto opacity-90 object-contain mx-auto lg:mx-0"
          />
        </div>

        {/* Text & Buttons - Mobile: Bottom Half Centered | Desktop: Left Middle */}
        <div className="flex-1 lg:flex-none flex flex-col items-center justify-center lg:items-start text-center lg:text-left text-white max-w-2xl mx-auto lg:mx-0 pb-16 lg:pb-0 h-full">
          <h2 className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4 opacity-90">
            МЕТАЛСТРОЙ Стоянов И Георгиев
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] min-[1200px]:text-[3.25rem] xl:text-6xl font-serif font-light mb-6 sm:mb-8 lg:mb-12 leading-tight">
            Производство и монтаж <br />
            на метални конструкции
          </h1>
          <div className="flex flex-col flex-wrap sm:flex-row justify-center lg:justify-start gap-4">
            <Button variant="primary" href="#contact">ЗАПИТВАНЕ</Button>
            <Button variant="secondary-dark" href="#constructions">ОБЕКТИ</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-white/30 mx-auto"></div>
      </div>
    </section>
  );
};