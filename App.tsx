import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

import { Services } from './components/Services';
import { Milestones } from './components/Milestones';
import { Constructions } from './components/Constructions';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

const seoData = {
  bg: {
    title: 'Металстрой Стоянов и Георгиев ООД | Производство и монтаж на метални конструкции',
    description: 'Металстрой Стоянов и Георгиев ООД – водеща фирма в производството и монтажа на метални конструкции. Метални халета, фабрики, мостове, селскостопански постройки и други. ISO сертифицирано качество.',
    lang: 'bg',
  },
  en: {
    title: 'Metalstroi Stoyanov & Georgiev | Production and Assembly of Metal Constructions',
    description: 'Metalstroi Stoyanov & Georgiev – a leading company in the production and assembly of metal constructions. Metal halls, factories, bridges, agricultural buildings and more. ISO certified quality.',
    lang: 'en',
  },
};

function SEOManager() {
  const { language } = useLanguage();

  useEffect(() => {
    const seo = seoData[language];

    // Update html lang attribute
    document.documentElement.lang = seo.lang;

    // Update document title
    document.title = seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', language === 'bg' ? 'bg_BG' : 'en_US');
    }

    // Update Twitter tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', seo.title);
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', seo.description);
    }
  }, [language]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <SEOManager />
      <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-corporate-gold selection:text-white">
        <Navbar />
        <main>
          <Hero />

          <Services />
          <Milestones />
          <Constructions />
          <Certificates />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;