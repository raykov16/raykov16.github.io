import React, { useState } from 'react';
import { FileText, X } from 'lucide-react';

interface Certificate {
    code: string;
    label: string;
    image: string;
}

interface EuroProgram extends Certificate {
    description: string;
}

const certificates: Certificate[] = [
    {
        code: "ISO 3834-2",
        label: "СЕРТИФИКАТ",
        image: "../images/3834-2CERT.png"
    },
    {
        code: "ISO 14001-BG",
        label: "СЕРТИФИКАТ",
        image: "../images/14001CERT.png"
    },
    {
        code: "ISO 1090-2",
        label: "СЕРТИФИКАТ",
        image: "../images/1090-2CERT.png"
    },
    {
        code: "ISO 45001-BG",
        label: "СЕРТИФИКАТ",
        image: "../images/45001CERT.png"
    },
    {
        code: "ISO 9001",
        label: "СЕРТИФИКАТ",
        image: "../images/9001CERT.png"
    },
];

const euroPrograms: EuroProgram[] = [
    {
        code: "Производството на електрическа енергия от възобновяеми източници",
        label: "ЕВРОПЕЙСКА ПРОГРАМА",
        image: "../images/euro-flag.png", // Placeholder image for now, as specific ones aren't provided
        description: "На 06.01.2025 г, МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД подписа Административен договор за изпълнение на инвестиция BG-RRP-4.032-0134-C01 по Процедура BG-RRP-4.032 „Подкрепа на нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия с инсталирана мощност от 200 kW до 2 MW“ (Покана 1), Инвестиция C4.I6: „Подкрепа за нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия“ от Националния план за възстановяване и устойчивост на Република България (НПВУ).\n\n Обща цел на проекта: Целта на проектното предложение е в синхрон с процедурата, чиято основната цел е да допринесе за увеличаване на дела на чистата енергия в енергийния микс на България по пътя към климатична неутралност. Производството на електрическа енергия от възобновяеми източници при наличие на ЛСС адресира проблемите с претоварването на мрежата като допринася за балансирането на електроенергийната система и намалява изкривяването на пазара. В допълнение, изпълнението на настоящия проект ще допринесе до намаляване на годишните въглеродни емисии от сектора за производство на електрическа енергия, увеличаване на дела на електрическата енергия от ВИ и интегрирането на производствените мощности от ВИ в мрежата при гарантиране сигурността и стабилността на електроенергийната система.\n Специфична цел на предложението за изпълнение на инвестиция е изграждането на ЛСС като компонент от комбиниран проект за нови инсталирани мощности за производство на електрическа енергия от възобновяеми източници.\n\n По проекта ще бъде изпълнена дейност: Изграждане на комбиниран проект за нова инсталирана мощност за производство на електрическа енергия от слънчева и/или вятърна енергия и за ЛСС с капацитет 0.928 МWh и 0.4 MW инсталирана мощност към фотоволтаична система с постояннотокова мощност 0.929 MWp и номинална променливотокова мощност 0.91 MW.Очаквани резултати от проекта са:\n – Доставена и монтирана ЛСС с капацитет 0.928 МWh и инсталирана мощност 0.4 МW към изградената фотоволтаична централа;– Осигуреност на електроенергия за производствената дейност на предприятието и намаляване на зависимостта от външни доставчици;\n – Намаляване на годишните въглеродни емисии;\n – Оптимизиране на електропреносната мрежа;\n\n Обща стойност на проекта: 555 555.00 лв., от които Искано финансиране (Безвъзмездна финансова помощ): 277 777.50 лв.\n\n ––––––––––––––––– www.eufunds.bg –––––––––––––\n\n ПИИ BG-RRP-4.032-0134-C01 по Процедура BG-RRP-4.032 „Подкрепа на нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия с инсталирана мощност от 200 kW до 2 MW“ (Покана 1), Инвестиция C4.I6: „Подкрепа за нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия“ от Националния план за възстановяване и устойчивост на Република България (НПВУ). Цялата отговорност за съдържанието на документа се носи от МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД и при никакви обстоятелства не може да се приема, че този документ отразява официалното становище на ЕС и СНД"
    },
    {
        code: "Подкрепа за прехода към кръгова икономика",
        label: "ЕВРОПЕЙСКА ПРОГРАМА",
        image: "../images/euro-flag.png",
        description: "„МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ“ ООД е краен получател по проект № BG-RRP-3.008-0244-C01 „Подкрепа за прехода към кръгова икономика“, който се изпълнява по процедура BG-RRP-3.008 „Подкрепа за прехода към кръгова икономика в предприятията“. Процедурата е в изпълнение на инвестиция „Програма за икономическа трансформация“ (ПИТ) към компонент „Интелигентна индустрия“ на Националния план за възстановяване и устойчивост (НПВУ). Общата стойност на проекта е 455 000.00 лв., от които безвъзмездно финансиране – 227 500.00 лв. европейско финансиране чрез инструмента NextGenerationEU. Проектът е с обща продължителност 18 месеца, датата на стартиране на проекта е: 20.05.2024 г. В подкрепа на основната икономическа дейност под КИД 25.11 „Производство на метални конструкции и части за тях“, по проекта ще бъдат придобити: Машина за лазерно рязане на тръби и профили (1 брой) и CNC хидравлична абкант преса (1 брой). Ще бъдат изпълнени две дейности по придобиване на нови технологии за рязане и огъване за въвеждане на кръгов модел, относим към намаляване на количеството образувани отпадъци от метал. Предложението за изпълнение на инвестиция води до постигане целта на процедурата чрез въвеждане на следния кръгов модел за използване на ресурсите в производството и потреблението на продукти от основната дейност на „МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ“ ООД:\n\n 1) Намаляване на образуваните отпадъци чрез внедряване на технологии за: – намаляване на количеството образувани отпадъци при производството на единица продукт и – намаляване на използваните суровини за производството на единица продукт, с което се постига намаляване на количеството образувани отпадъци.\n\n Ресурсният отпечатък от производството на „МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ“ ООД ще намалее чрез внедряване на технологии за лазерно рязане и огъване на метал, които осигуряват създаването на стойност при съществено понижен отпадък от дейността. Понижените разходи, вследствие значително намалена фира и брак, както и оптимизираните експлоатационни качества на крайния продукт, ще повишат конкурентоспособността на предприятието. Намаленото количество суровина за единица продукт чрез намаляване на фирата и брака ще допринесе за устойчив растеж. Инвестицията по мярката е съобразена с изискванията на принципа за „ненанасяне на значителни вреди“ върху околната среда, допринасяйки за екологичния преход в дейността на предприятието.\n\n „Тази публикация е създадена с финансовата подкрепа на Европейския съюз – NextGenerationEU. Цялата отговорност за съдържанието на документа се носи от „МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ“ ООД и при никакви обстоятелства не може да се приема, че тази публикация отразява официалното становище на Европейския съюз и СНД на ПИТ към МИР.“"
    },
    {
        code: "Подкрепа за средни предприятия за преодоляване на икономическите последствия от пандемията COVID-19",
        label: "ЕВРОПЕЙСКА ПРОГРАМА",
        image: "../images/euro-flag.png",
        description: "МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД е бенефициент по Проект BG16RFOP002-2.077-0505-C01 „Подкрепа за средни предприятия за преодоляване на икономическите последствия от пандемията COVID-19”, който се изпълнява с финансовата подкрепа на оперативна програма “Иновации и конкурентоспособност” 2014-2020, съфинансирана от Европейския съюз чрез Европейски фонд за регионално развитие и от националния бюджет на Република България.\n\n Общата стойност на проекта е 150 000.00 лв., от които 127 500.00 лв. европейско и 22 500.00 лв. национално съфинансиране. Проектът е с обща продължителност 3 месеца.\n\n Проектът е насочен към подкрепа за преодоляване на икономическите последствия от пандемията COVID-19. Основната цел е осигуряването на оперативен капитал за МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД за справяне с последиците от пандемията COVID-19."
    },
];

export const Certificates: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [selectedEuroProgram, setSelectedEuroProgram] = useState<EuroProgram | null>(null);

    const openCertificate = (cert: Certificate) => {
        setSelectedCertificate(cert);
    };

    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    const openEuroProgram = (prog: EuroProgram) => {
        setSelectedEuroProgram(prog);
    };

    const closeEuroProgram = () => {
        setSelectedEuroProgram(null);
    };

    return (
        <section id="certificates" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">СЕРТИФИКАТИ</h2>
                    <span className="text-3xl sm:text-4xl font-serif text-corporate-dark">Сигурност и качество</span>
                    <div className="section-header-divider"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certificates.map((cert, idx) => (
                        <div
                            key={idx}
                            onClick={() => openCertificate(cert)}
                            className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
                        >
                            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                <div className="w-16 h-16 bg-[#001fd2] rounded-2xl flex items-center justify-center text-corporate-dark overflow-hidden">
                                    <img src="../images/TUV.png" alt="TUV" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">{cert.label}</p>
                                <h3 className="text-xl sm:text-2xl font-bold text-corporate-dark">{cert.code}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
                    {euroPrograms.map((prog, idx) => (
                        <div
                            key={idx}
                            onClick={() => openEuroProgram(prog)}
                            className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
                        >
                            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                <div className="w-16 h-16 bg-[#003399] rounded-2xl flex items-center justify-center text-corporate-dark overflow-hidden">
                                    <img src="../images/euro-flag.png" alt="European Program" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">{prog.label}</p>
                                <h3 className="text-sm sm:text-base font-bold text-corporate-dark leading-snug">{prog.code}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={closeCertificate}
                >
                    <div className="relative max-w-[95%] sm:max-w-4xl max-h-[90vh] w-full flex justify-center items-center">
                        <button
                            onClick={closeCertificate}
                            className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 sm:bg-transparent rounded-full p-2 sm:p-0 z-[60]"
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.code}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            {/* Euro Program Modal */}
            {selectedEuroProgram && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 z-[60]"
                    onClick={closeEuroProgram}
                >
                    <div className="relative max-w-[95%] sm:max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] bg-white rounded-lg shadow-2xl p-6 sm:p-8 flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeEuroProgram}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 transition-colors bg-gray-100 rounded-full p-1"
                        >
                            <X size={24} />
                        </button>
                        <h3 className="text-lg sm:text-xl pr-6 font-bold text-corporate-dark mb-4 leading-snug">{selectedEuroProgram.code}</h3>
                        <div className="overflow-y-auto pr-2 custom-scrollbar">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {selectedEuroProgram.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
