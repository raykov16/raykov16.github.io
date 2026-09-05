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
            {t.aboutUs.heading}
          </p>
        </div>
      </div>

      {/* Company video */}
      <div className="relative h-screen min-h-screen w-full overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 block h-full w-full object-cover"
          src="/videos/MetalstroyShort1.mp4"
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
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center sm:bottom-10">
          <a
            href="https://www.youtube.com/watch?v=VIDEO_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/ytlogo2.png"
              alt="YouTube"
              className="h-16 w-56 object-cover object-center sm:h-16 sm:w-64"
            />
          </a>
        </div>
      </div>

      {/* About Us text */}
      <div className="min-h-screen bg-gray-50 text-corporate-dark flex items-center py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <h3 className="text-xl font-extrabold leading-tight tracking-wide text-corporate-dark sm:text-2xl md:text-3xl">
              {t.aboutUs.qualityRule}
            </h3>
            <div className="mt-10 grid gap-8">
              <div className="text-base leading-relaxed text-gray-600 font-light sm:text-lg md:text-xl">
                <p>
                  <strong className="font-semibold">{t.aboutUs.companyName}</strong>
                  {t.aboutUs.intro}
                </p>
              </div>
              <div className="text-base leading-relaxed text-gray-600 font-light sm:text-lg md:text-xl">
                <p>{t.aboutUs.experience}</p>
              </div>
              <div className="text-base leading-relaxed text-gray-600 font-light sm:text-lg md:text-xl">
                <p>
                  {t.aboutUs.missionPrefix}
                  <strong className="font-semibold">{t.aboutUs.companyName}</strong>
                  {t.aboutUs.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
