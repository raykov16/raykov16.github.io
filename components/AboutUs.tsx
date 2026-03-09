import React from 'react';

interface AboutItem {
    title: string;
    description: string[];
    image: string;
}

const aboutItems: AboutItem[] = [
    {
        title: "Нашата история",
        description: [
            "Основана преди десетилетия, нашата компания започна като малка работилница.",
            "Днес сме лидер в производството на метални конструкции в региона.",
            "Непрекъснато инвестираме в нови технологии и развитие на нашите служители."
        ],
        image: "../images/proizvodstvo.png"
    },
    {
        title: "Мисия и Визия",
        description: [
            "Нашата мисия е да предоставяме висококачествени продукти и услуги, които отговарят на най-строгите стандарти.",
            "Стремим се към иновации и устойчиво развитие в нашата сфера.",
            "Нашата визия е да бъдем предпочитан и надежден партньор в индустрията за метални конструкции."
        ],
        image: "../images/montajni-sredstva.png"
    },
    {
        title: "Нашият екип",
        description: [
            "Разполагаме с висококвалифицирани инженери и специалисти с дългогодишен опит.",
            "Екипът ни е посветен на постигането на най-добрите резултати за нашите клиенти.",
            "Вярваме в екипната работа и непрекъснатото усъвършенстване на уменията ни."
        ],
        image: "../images/predimstva.png"
    }
];

export const AboutUs: React.FC = () => {
    return (
        <>
            {/* Hero Section with Video */}
            <section id="about-us" className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="../images/Metalstroi Stoianov and Georgiev OOD.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better legibility */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-wide mb-6">За Нас</h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light">
                        Традиция, качество и иновации в производството на метални конструкции.
                    </p>
                </div>
            </section>

            {/* Content Section matching Services.tsx layout */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-20 text-center">
                        <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">ПОВЕЧЕ ИНФОРМАЦИЯ</h2>
                        <span className="text-4xl font-serif text-corporate-dark">Кои сме ние</span>
                        <div className="section-header-divider"></div>
                    </div>

                    <div className="space-y-24">
                        {aboutItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-corporate-dark/10 group-hover:bg-transparent transition-all duration-500 z-10 rounded-xl"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[400px] object-cover shadow-lg rounded-xl"
                                    />
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 text-left">
                                    <h3 className="text-3xl font-serif text-corporate-dark mb-6">{item.title}</h3>
                                    <ul className="text-gray-600 font-light leading-relaxed text-lg list-disc pl-5 space-y-2">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
