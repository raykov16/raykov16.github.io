import React from 'react';

interface ServiceItem {
  title: string;
  description: string[];
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "Производство с качество и професионализъм",
    description: [
      "Стенд за автоматично заваряване",
      "CNC машини за разпробиване и лазерно рязане",
      "Комбинирана автоматизирана линия за събиране, заваряване  и изправяне на съставни профили",
      "Импулсни заваръчни апарати Fronius, Lincoln electric, Esab, Lorch",
      "Плазмено и газо-кислородно рязане Pierce",
      "Внедряване в производството на параболични рамкови елементи с променливо 2Т сечение и олекотяващи кръгови отвори в стеблото"
    ],
    image: "../images/proizvodstvo.png"
  },
  {
    title: "Механизация",
    description: [
      "9 броя автовишки",
      "4 броя автокранове",
      "Бордови камион 8 метра",
      "Влекач с полуремарке",
      "Разтегателна платофрма",
      "Платформа за превоз на механизация"
    ],
    image: "../images/montajni-sredstva.png"
  },
  {
    title: "Предимства на металните конструкции",
    description: [
      "По-бърза изработка от традиционния тип строителство",
      "Лесен монтаж и демонтаж, с цел бърза смяна на мястото",
      "Напълно рециклируеми",
      "По-леки и издръжливи в сравнение с тежките стоманобетонни конструкции",
      "По - дълъг живот, от стоманобетонните конструкции"
    ],
    image: "../images/predimstva.png"
  },
  {
    title: "Приложение на металните конструкции",
    description: [
      "Метални халета",
      "Фабрики",
      "Мостове",
      "Магазини",
      "Селскостопански постройки",
      "Много други"
    ],
    image: "../images/prilojenie.png"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">ПРОДУКЦИЯ</h2>
          <span className="text-4xl font-serif text-corporate-dark">Нашите услуги</span>
          <div className="section-header-divider"></div>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-corporate-dark/10 group-hover:bg-transparent transition-all duration-500 z-10 rounded-xl"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover shadow-lg rounded-xl"
                />
                {/* Decorative border/box like in reference if needed, keep simple for now */}
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-3xl font-serif text-corporate-dark mb-6">{service.title}</h3>
                <ul className="text-gray-600 font-light leading-relaxed text-lg list-disc pl-5 space-y-2">
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