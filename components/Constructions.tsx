import React, { useState } from 'react';
import { Button } from './ui/Button';
import { useLanguage } from '../LanguageContext';

const constructionImages = [
  "/images/leten-teatur.png",
  "/images/kozirka-stadion.png",
  "/images/kushta-barselona.png",
];

const moreConstructionImages = [
  "/images/skladova-sgrada.png",
  "/images/ACT-mivka.png",
  "/images/pokrivno-pokritie.png",
  "/images/bila.png",
  "/images/silozna-baza.png",
  "/images/naves-avtomobili.png",
  "/images/retail-park.png",
  "/images/parking.png",
  "/images/tunel-parking.png",
];

interface CardProps {
  name: string;
  role: string;
  image: string;
}

const ConstructionCard: React.FC<{ client: CardProps }> = ({ client }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden mb-4 sm:mb-6 relative">
      <div className="absolute inset-0 bg-corporate-dark/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
      <img
        src={client.image}
        alt={`${client.name} - metal construction project`}
        className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl sm:text-2xl font-serif text-corporate-dark">{client.name}</h3>
    <p className="text-xs sm:text-sm uppercase tracking-widest text-corporate-gold mt-1">{client.role}</p>
  </div>
);

export const Constructions: React.FC = () => {
  const { language, t } = useLanguage();
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    if (showMore) {
      const section = document.getElementById('constructions');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowMore(!showMore);
  };

  const constructions: CardProps[] = t.constructions.items.map((item, idx) => ({
    ...item,
    image: constructionImages[idx],
  }));

  const moreConstructions: CardProps[] = t.constructions.moreItems.map((item, idx) => ({
    ...item,
    image: moreConstructionImages[idx],
  }));

  return (
    <section id="constructions" className="flex flex-col" aria-label={language === 'en' ? 'Metal construction projects by Metalstroi' : 'Обекти на Металстрой – метални конструкции'}>
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 sm:mb-20 text-center">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">{t.constructions.sectionLabel}</h2>
            <p className="text-3xl sm:text-4xl font-serif text-corporate-dark">{t.constructions.sectionTitle}</p>
            <div className="section-header-divider"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {constructions.map((client, idx) => (
              <ConstructionCard key={`initial-${idx}`} client={client} />
            ))}
          </div>

          {!showMore && (
            <div className="mt-16 text-center">
              <Button variant="secondary-white" onClick={handleToggle}>
                {t.constructions.showMore}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        className={`transition-all duration-1000 ease-in-out overflow-hidden flex flex-col ${showMore ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {moreConstructions.slice(0, 3).map((client, idx) => (
                <ConstructionCard key={`more-0-${idx}`} client={client} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {moreConstructions.slice(3, 6).map((client, idx) => (
                <ConstructionCard key={`more-1-${idx}`} client={client} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {moreConstructions.slice(6, 9).map((client, idx) => (
                <ConstructionCard key={`more-2-${idx}`} client={client} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="secondary-white" onClick={handleToggle}>
                {t.constructions.showLess}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
