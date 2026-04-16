import React from 'react';
import { useLanguage } from '../LanguageContext';

const serviceImages = [
  "/images/proizvodstvo.png",
  "/images/montajni-sredstva.png",
  "/images/predimstva.png",
  "/images/prilojenie.png",
];

export const Services: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 bg-white overflow-hidden" aria-label={language === 'en' ? 'Metal constructions services - production, assembly and mechanization' : 'Услуги за метални конструкции – производство, монтаж и механизация'}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 sm:mb-20 text-center">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">{t.services.sectionLabel}</h2>
          <p className="text-3xl sm:text-4xl font-serif text-corporate-dark">{t.services.sectionTitle}</p>
          <div className="section-header-divider"></div>
        </div>

        <div className="space-y-24">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-corporate-dark/10 group-hover:bg-transparent transition-all duration-500 z-10 rounded-xl"></div>
                <img
                  src={serviceImages[index]}
                  alt={`${service.title} - ${language === 'en' ? 'Metalstroi metal constructions' : 'Металстрой метални конструкции'}`}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[450px] object-cover shadow-lg rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif text-corporate-dark mb-4 sm:mb-6">{service.title}</h3>
                <ul className="text-gray-600 font-light leading-relaxed text-base lg:text-lg list-disc pl-5 space-y-2">
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};