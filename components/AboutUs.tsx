import React from 'react';
import { useLanguage } from '../LanguageContext';

export const AboutUs: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="about-us"
      aria-label={language === 'en' ? 'About Metalstroi' : 'За Металстрой'}
    >
      <div className="flex min-h-[220px] items-center justify-center bg-corporate-dark px-4 text-white sm:px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            {t.nav.aboutUs}
          </h2>
          <p className="text-4xl font-serif sm:text-5xl md:text-6xl">
            ABOUT US
          </p>
        </div>
      </div>

      {/* Company video */}
      <div className="relative h-screen min-h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 block h-full w-full object-cover"
          src="/videos/MetalstroyShort1.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          aria-label={language === 'en' ? 'Metalstroi company video' : 'Видео за Металстрой'}
        >
          {language === 'en'
            ? 'Your browser does not support video playback.'
            : 'Вашият браузър не поддържа възпроизвеждане на видео.'}
        </video>
      </div>

      {/* About Us text */}
      <div className="min-h-screen bg-gray-50 text-corporate-dark flex items-center py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere, ipsum at tincidunt consequat, justo libero gravida
              lectus, vitae tincidunt nibh nisl at erat. Curabitur sed
              ullamcorper magna. Donec non sem vel arcu facilisis consequat.
              Suspendisse potenti. Mauris euismod, nisl at consequat
              ullamcorper, justo lorem malesuada justo, vitae posuere risus
              lectus vitae libero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
