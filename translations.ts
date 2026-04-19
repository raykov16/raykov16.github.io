export type Language = 'bg' | 'en';

export interface Translations {
  // Navbar
  nav: {
    logo: string;
    home: string;
    services: string;
    constructions: string;
    certificates: string;
    contact: string;
    aboutUs: string;
  };
  // Hero
  hero: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    ctaInquiry: string;
    ctaProjects: string;
  };
  // Services
  services: {
    sectionLabel: string;
    sectionTitle: string;
    items: {
      title: string;
      description: string[];
    }[];
  };
  // Constructions
  constructions: {
    sectionLabel: string;
    sectionTitle: string;
    showMore: string;
    showLess: string;
    items: { name: string; role: string }[];
    moreItems: { name: string; role: string }[];
  };
  // Certificates
  certificates: {
    sectionLabel: string;
    sectionTitle: string;
    certLabel: string;
    euroLabel: string;
    euroPrograms: { code: string; description: string }[];
  };
  // Contact
  contact: {
    title: string;
    description: string;
    address: string;
    street: string;
    formTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    attachFiles: string;
    fileCount: (count: number) => string;
    send: string;
    copyright: string;
    privacyPolicy: string;
    termsOfUse: string;
  };
  // Milestones
  milestones: {
    items: {
      number: string;
      text: string;
    }[];
  };
}

export const translations: Record<Language, Translations> = {
  bg: {
    nav: {
      logo: 'МЕТАЛСТРОЙ С & Г',
      home: 'НАЧАЛО',
      services: 'ПРОДУКЦИЯ',
      constructions: 'ОБЕКТИ',
      certificates: 'СЕРТИФИКАТИ',
      contact: 'КОНТАКТИ',
      aboutUs: 'ЗА НАС',
    },
    hero: {
      subtitle: 'МЕТАЛСТРОЙ Стоянов И Георгиев',
      titleLine1: 'Производство и монтаж',
      titleLine2: 'на метални конструкции',
      ctaInquiry: 'ЗАПИТВАНЕ',
      ctaProjects: 'ОБЕКТИ',
    },
    services: {
      sectionLabel: 'ПРОДУКЦИЯ',
      sectionTitle: 'Нашите услуги',
      items: [
        {
          title: 'Производство с качество и професионализъм',
          description: [
            '<strong class="block font-semibold">Подготовка на материалите:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Автоматизирана линия за дробеструйно почистване на профили и листов материал</li></ul>',
            '<strong class="block font-semibold">Рязане и обработка:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>20 kW лазер за рязане на листов материал с работна зона 14 м × 3 м и 3D режеща глава</li><li>6 kW лазер за рязане на листов материал</li><li>Тръбен лазер за автоматизирано рязане и безотпадъчна обработка</li><li>CNC пробивни машини</li><li>Плазмено и газокислородно рязане</li></ul>',
            '<strong class="block font-semibold">Заваряване и сглобяване:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Автоматизиран заваръчен робот</li><li>Комбинирана автоматизирана линия за събиране, подфлюсово заваряване и изправяне на съставни профили</li></ul>',
            '<strong class="block font-semibold">Специализирани линии:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Автоматична линия за лазерно рязане на стоманени двойно Т-профили</li></ul>',
          ],
        },
        {
          title: 'Механизация',
          description: [
            '<strong class="block font-semibold">Подемна техника:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>9 бр. автовишки</li><li>4 бр. автокранове</li></ul>',
            '<strong class="block font-semibold">Високоефективна техника за монтаж и работа на височина.</strong>',
            '<strong class="block font-semibold">Транспортна техника:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Бордови камион (8 м)</li><li>Влекач с полуремарке</li><li>Разтегателна платформа (21 м)</li></ul>',
            '<strong class="block font-semibold">Надежден транспорт за стандартни и извънгабаритни товари.</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Специализирана техника</li><li>Платформа за транспорт на механизация</li></ul>',
            '<strong class="block font-semibold">Сигурно преместване на тежка и строителна техника.</strong>',
          ],
        },
        {
          title: 'Предимства на металните конструкции',
          description: [
            'Бързо производство и кратки срокове за монтаж',
            'Прецизно фабрично изработени елементи',
            'Подходящи за големи разстояния без вътрешни колони',
            'Лесен демонтаж и възможност за преместване',
            'Дълъг експлоатационен живот и висока надеждност',
            'Висока якост при ниско собствено тегло',
            'Екологичност чрез пълна рециклируемост'
          ],
        },
        {
          title: 'Приложение на металните конструкции',
          description: [
            'Индустриални сгради (заводи, производствени бази, складове)',
            'Търговски обекти (молове, супермаркети, шоуруми)',
            'Офис сгради и бизнес центрове',
            'Спортни съоръжения (стадиони, зали, фитнес центрове)',
            'Транспортна инфраструктура (мостове, надлези, жп съоръжения, летищни терминали)',
            'Енергийни съоръжения (електроцентрали, соларни паркове)',
            'Селскостопански сгради (ферми, силози, хранилища за зърно, оранжерии)',
            'Високи сгради и небостъргачи',
            'Инфраструктурни съоръжения (комуникационни кули, телевизионни и радио съоръжения, електропреносни стълбове)',
            'Паркинги и многоетажни гаражи',
            'Жилищно строителство (сглобяеми къщи и конструкции)'
          ],
        },
      ],
    },
    constructions: {
      sectionLabel: 'Обекти',
      sectionTitle: 'Над 100 завършени обекти',
      showMore: 'Разгледай още обекти',
      showLess: 'Скрий обектите',
      items: [
        { name: 'Летен театър, Велико Търново', role: '"Мистрал 7" ООД' },
        { name: 'Козирка с VIP зона на стадион ПФК Септември, София', role: '"ДИТ ХОТЕЛИ" ООД' },
        { name: 'Къща в Барселона, Испания', role: '"СМ и партньори" АД' },
      ],
      moreItems: [
        { name: 'Складова сграда', role: '"Люник" ЕООД' },
        { name: 'ACT мивка', role: '"АСТ" ООД' },
        { name: 'Покривно покритие над бункери', role: '"Строителство и строителни машини" ЕООД' },
        { name: 'Billa магазин', role: '"Лъки Строй 2011" ЕАД' },
        { name: 'Силозна база', role: '"Тива – I" ЕООД' },
        { name: 'Навес за автомобили', role: '"Димаго 1" ООД' },
        { name: 'Ритейл парк', role: '"Интер съплай" ЕООД' },
        { name: 'Паркинг', role: '"Гарантстрой – Грозев" ООД' },
        { name: 'Тунел паркинг', role: '"Транслог" АД' },
      ],
    },
    certificates: {
      sectionLabel: 'СЕРТИФИКАТИ',
      sectionTitle: 'Сигурност и качество',
      certLabel: 'СЕРТИФИКАТ',
      euroLabel: 'ЕВРОПЕЙСКА ПРОГРАМА',
      euroPrograms: [
        {
          code: 'Производството на електрическа енергия от възобновяеми източници',
          description: 'На 06.01.2025 г, МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД подписа Административен договор за изпълнение на инвестиция BG-RRP-4.032-0134-C01 по Процедура BG-RRP-4.032 „Подкрепа на нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия с инсталирана мощност от 200 kW до 2 MW" (Покана 1), Инвестиция C4.I6: „Подкрепа за нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия" от Националния план за възстановяване и устойчивост на Република България (НПВУ).\n\n Обща цел на проекта: Целта на проектното предложение е в синхрон с процедурата, чиято основната цел е да допринесе за увеличаване на дела на чистата енергия в енергийния микс на България по пътя към климатична неутралност. Производството на електрическа енергия от възобновяеми източници при наличие на ЛСС адресира проблемите с претоварването на мрежата като допринася за балансирането на електроенергийната система и намалява изкривяването на пазара. В допълнение, изпълнението на настоящия проект ще допринесе до намаляване на годишните въглеродни емисии от сектора за производство на електрическа енергия, увеличаване на дела на електрическата енергия от ВИ и интегрирането на производствените мощности от ВИ в мрежата при гарантиране сигурността и стабилността на електроенергийната система.\n Специфична цел на предложението за изпълнение на инвестиция е изграждането на ЛСС като компонент от комбиниран проект за нови инсталирани мощности за производство на електрическа енергия от възобновяеми източници.\n\n По проекта ще бъде изпълнена дейност: Изграждане на комбиниран проект за нова инсталирана мощност за производство на електрическа енергия от слънчева и/или вятърна енергия и за ЛСС с капацитет 0.928 МWh и 0.4 MW инсталирана мощност към фотоволтаична система с постояннотокова мощност 0.929 MWp и номинална променливотокова мощност 0.91 MW.Очаквани резултати от проекта са:\n – Доставена и монтирана ЛСС с капацитет 0.928 МWh и инсталирана мощност 0.4 МW към изградената фотоволтаична централа;– Осигуреност на електроенергия за производствената дейност на предприятието и намаляване на зависимостта от външни доставчици;\n – Намаляване на годишните въглеродни емисии;\n – Оптимизиране на електропреносната мрежа;\n\n Обща стойност на проекта: 555 555.00 лв., от които Искано финансиране (Безвъзмездна финансова помощ): 277 777.50 лв.\n\n ––––––––––––––––– www.eufunds.bg –––––––––––––\n\n ПИИ BG-RRP-4.032-0134-C01 по Процедура BG-RRP-4.032 „Подкрепа на нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия с инсталирана мощност от 200 kW до 2 MW" (Покана 1), Инвестиция C4.I6: „Подкрепа за нови мощности за производство на електроенергия от възобновяеми източници и съхранение на електроенергия" от Националния план за възстановяване и устойчивост на Република България (НПВУ). Цялата отговорност за съдържанието на документа се носи от МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД и при никакви обстоятелства не може да се приема, че този документ отразява официалното становище на ЕС и СНД',
        },
        {
          code: 'Подкрепа за прехода към кръгова икономика',
          description: '„МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ" ООД е краен получател по проект № BG-RRP-3.008-0244-C01 „Подкрепа за прехода към кръгова икономика", който се изпълнява по процедура BG-RRP-3.008 „Подкрепа за прехода към кръгова икономика в предприятията". Процедурата е в изпълнение на инвестиция „Програма за икономическа трансформация" (ПИТ) към компонент „Интелигентна индустрия" на Националния план за възстановяване и устойчивост (НПВУ). Общата стойност на проекта е 455 000.00 лв., от които безвъзмездно финансиране – 227 500.00 лв. европейско финансиране чрез инструмента NextGenerationEU. Проектът е с обща продължителност 18 месеца, датата на стартиране на проекта е: 20.05.2024 г. В подкрепа на основната икономическа дейност под КИД 25.11 „Производство на метални конструкции и части за тях", по проекта ще бъдат придобити: Машина за лазерно рязане на тръби и профили (1 брой) и CNC хидравлична абкант преса (1 брой). Ще бъдат изпълнени две дейности по придобиване на нови технологии за рязане и огъване за въвеждане на кръгов модел, относим към намаляване на количеството образувани отпадъци от метал. Предложението за изпълнение на инвестиция води до постигане целта на процедурата чрез въвеждане на следния кръгов модел за използване на ресурсите в производството и потреблението на продукти от основната дейност на „МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ" ООД:\n\n 1) Намаляване на образуваните отпадъци чрез внедряване на технологии за: – намаляване на количеството образувани отпадъци при производството на единица продукт и – намаляване на използваните суровини за производството на единица продукт, с което се постига намаляване на количеството образувани отпадъци.\n\n Ресурсният отпечатък от производството на „МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ" ООД ще намалее чрез внедряване на технологии за лазерно рязане и огъване на метал, които осигуряват създаването на стойност при съществено понижен отпадък от дейността. Понижените разходи, вследствие значително намалена фира и брак, както и оптимизираните експлоатационни качества на крайния продукт, ще повишат конкурентоспособността на предприятието. Намаленото количество суровина за единица продукт чрез намаляване на фирата и брака ще допринесе за устойчив растеж. Инвестицията по мярката е съобразена с изискванията на принципа за „ненанасяне на значителни вреди" върху околната среда, допринасяйки за екологичния преход в дейността на предприятието.\n\n „Тази публикация е създадена с финансовата подкрепа на Европейския съюз – NextGenerationEU. Цялата отговорност за съдържанието на документа се носи от „МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ" ООД и при никакви обстоятелства не може да се приема, че тази публикация отразява официалното становище на Европейския съюз и СНД на ПИТ към МИР."',
        },
        {
          code: 'Подкрепа за средни предприятия за преодоляване на икономическите последствия от пандемията COVID-19',
          description: 'МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД е бенефициент по Проект BG16RFOP002-2.077-0505-C01 „Подкрепа за средни предприятия за преодоляване на икономическите последствия от пандемията COVID-19", който се изпълнява с финансовата подкрепа на оперативна програма "Иновации и конкурентоспособност" 2014-2020, съфинансирана от Европейския съюз чрез Европейски фонд за регионално развитие и от националния бюджет на Република България.\n\n Общата стойност на проекта е 150 000.00 лв., от които 127 500.00 лв. европейско и 22 500.00 лв. национално съфинансиране. Проектът е с обща продължителност 3 месеца.\n\n Проектът е насочен към подкрепа за преодоляване на икономическите последствия от пандемията COVID-19. Основната цел е осигуряването на оперативен капитал за МЕТАЛСТРОЙ – СТОЯНОВ И ГЕОРГИЕВ ООД за справяне с последиците от пандемията COVID-19.',
        },
      ],
    },
    contact: {
      title: 'Свържи се с нас',
      description: '„METAЛСТРОЙ СТОЯНОВ и ГЕОРГИЕВ" ООД е фирма, специализирана в проектирането и изграждането на метални конструкции, подходящи за промишлени, търговски и административни сгради.',
      address: '5100, гр. Горна Оряховица',
      street: 'ул. "Свети Княз Борис 1" 88',
      formTitle: 'Направи запитване',
      firstName: 'Име',
      lastName: 'Фамилия',
      email: 'E-mail',
      message: 'Съобщение',
      attachFiles: 'Прикачи файлове',
      fileCount: (count: number) => `${count} файл(а)`,
      send: 'ИЗПРАТИ',
      copyright: `© ${new Date().getFullYear()} METALSTROY. Всички права запазени.`,
      privacyPolicy: 'Политика за поверителност',
      termsOfUse: 'Условия за ползване',
    },
    milestones: {
      items: [
        { number: '9000+', text: 'КВ МЕТРА\nЗАСТРОЕНА ПЛОЩ' },
        { number: '2000+', text: 'ТОНА ПРОИЗВОДСТВЕН\nКАПАЦИТЕТ ГОДИШНО' },
        { number: '1000+', text: 'ДОВОЛНИ КЛИЕНТИ' },
        { number: '25+', text: 'ГОДИНИ ОПИТ' },
      ],
    },
  },
  en: {
    nav: {
      logo: 'Metalstroi S & G',
      home: 'HOME',
      services: 'SERVICES',
      constructions: 'CONSTRUCTIONS',
      certificates: 'CERTIFICATES',
      contact: 'CONTACT',
      aboutUs: 'ABOUT US',
    },
    hero: {
      subtitle: 'Metalstroi Stoyanov & Georgiev',
      titleLine1: 'Production and Assembly',
      titleLine2: 'of Metal Constructions',
      ctaInquiry: 'INQUIRY',
      ctaProjects: 'CONSTRUCTIONS',
    },
    services: {
      sectionLabel: 'SERVICES',
      sectionTitle: 'Our Services',
      items: [
        {
          title: 'Production with Quality and Professionalism',
          description: [
            '<strong class="block font-semibold">Material Preparation:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Automated line for shot blasting of profiles and sheet material</li></ul>',
            '<strong class="block font-semibold">Cutting and Processing:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>20 kW laser for cutting sheet material with a 14m x 3m working area and 3D cutting head</li><li>6 kW laser for cutting sheet material</li><li>Tube laser for automated cutting and waste-free processing</li><li>CNC drilling machines</li><li>Plasma and oxy-fuel cutting</li></ul>',
            '<strong class="block font-semibold">Welding and Assembly:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Automated welding robot</li><li>Combined automated line for assembly, welding, and straightening of composite profiles</li></ul>',
            '<strong class="block font-semibold">Specialized Lines:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Automatic line for laser cutting of steel double T-profiles</li></ul>',
          ],
        },
        {
          title: 'Mechanization',
          description: [
            '<strong class="block font-semibold">Lifting Equipment:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>9 aerial work platforms</li><li>4 mobile cranes</li></ul>',
            '<strong class="block font-semibold">High-efficiency equipment for assembly and work at heights.</strong>',
            '<strong class="block font-semibold">Transport Equipment:</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Flatbed truck (8m)</li><li>Tractor with semi-trailer</li><li>Extendable platform (21m)</li></ul>',
            '<strong class="block font-semibold">Reliable transport for standard and oversized cargo.</strong><ul class="list-[circle] pl-5 mt-2 space-y-1"><li>Specialized equipment</li><li>Platform for transporting machinery</li></ul>',
            '<strong class="block font-semibold">Safe moving of heavy and construction equipment.</strong>',
          ],
        },
        {
          title: 'Advantages of Metal Constructions',
          description: [
            'Fast production and short assembly times',
            'Precisely factory-made elements',
            'Suitable for large spans without internal columns',
            'Easy dismantling and relocation possibilities',
            'Long service life and high reliability',
            'High strength with low dead weight',
            'Eco-friendly through full recyclability'
          ],
        },
        {
          title: 'Applications of Metal Constructions',
          description: [
            'Industrial buildings (factories, production bases, warehouses)',
            'Commercial spaces (malls, supermarkets, showrooms)',
            'Office buildings and business centers',
            'Sports facilities (stadiums, halls, fitness centers)',
            'Transport infrastructure (bridges, overpasses, railway facilities, airport terminals)',
            'Energy facilities (power plants, solar parks)',
            'Agricultural buildings (farms, silos, grain storages, greenhouses)',
            'High-rise buildings and skyscrapers',
            'Infrastructural facilities (communication towers, TV and radio facilities, power transmission poles)',
            'Parking lots and multi-story garages',
            'Residential construction (prefabricated houses and structures)'
          ],
        },
      ],
    },
    constructions: {
      sectionLabel: 'Constructions',
      sectionTitle: 'Over 100 finished constructions',
      showMore: 'View more constructions',
      showLess: 'Hide constructions',
      items: [
        { name: 'Summer Theatre, Veliko Tarnovo', role: '"Mistral 7" OOD' },
        { name: 'VIP Canopy at PFC Septemvri Stadium, Sofia', role: '"DIT HOTELS" OOD' },
        { name: 'House in Barcelona, Spain', role: '"SM & Partners" AD' },
      ],
      moreItems: [
        { name: 'Warehouse Building', role: '"Lunik" EOOD' },
        { name: 'ACT car wash', role: '"ACT" OOD' },
        { name: 'Roof Cover over Bunkers', role: '"Construction and Construction Machines" EOOD' },
        { name: 'Billa Store', role: '"Lucky Stroy 2011" EAD' },
        { name: 'Silo Base', role: '"Tiva – I" EOOD' },
        { name: 'Car Canopy', role: '"Dimago 1" OOD' },
        { name: 'Retail Park', role: '"Inter Supply" EOOD' },
        { name: 'Parking', role: '"Garantstroy – Grozev" OOD' },
        { name: 'Tunnel Parking', role: '"Translog" AD' },
      ],
    },
    certificates: {
      sectionLabel: 'CERTIFICATES',
      sectionTitle: 'Safety and Quality',
      certLabel: 'CERTIFICATE',
      euroLabel: 'EUROPEAN PROGRAM',
      euroPrograms: [
        {
          code: 'Electricity Production from Renewable Energy Sources',
          description: 'On 06.01.2025, Metalstroi – STOYANOV & GEORGIEV OOD signed an Administrative Contract for the implementation of investment BG-RRP-4.032-0134-C01 under Procedure BG-RRP-4.032 "Support for new capacities for electricity production from renewable energy sources and electricity storage with installed capacity from 200 kW to 2 MW" (Call 1), Investment C4.I6: "Support for new capacities for electricity production from renewable energy sources and electricity storage" from the National Recovery and Resilience Plan of the Republic of Bulgaria (NRRP).\n\n Overall project objective: The aim of the project proposal is in line with the procedure, whose main objective is to contribute to increasing the share of clean energy in Bulgaria\'s energy mix on the path to climate neutrality. The production of electricity from renewable energy sources with ESS addresses grid congestion issues by contributing to the balancing of the electricity system and reducing market distortion.\n\n Total project value: BGN 555,555.00, of which requested funding (Grant): BGN 277,777.50.',
        },
        {
          code: 'Support for the Transition to a Circular Economy',
          description: '"Metalstroi – STOYANOV & GEORGIEV" OOD is the final beneficiary of project No. BG-RRP-3.008-0244-C01 "Support for the transition to a circular economy", implemented under procedure BG-RRP-3.008 "Support for the transition to a circular economy in enterprises". The total project value is BGN 455,000.00, of which grant funding – BGN 227,500.00 European financing through the NextGenerationEU instrument.\n\n The project will acquire: Laser cutting machine for pipes and profiles (1 unit) and CNC hydraulic press brake (1 unit). Two activities will be implemented for acquiring new technologies for cutting and bending to introduce a circular model aimed at reducing the amount of metal waste generated.',
        },
        {
          code: 'Support for Medium Enterprises to Overcome Economic Consequences of COVID-19',
          description: 'Metalstroi – STOYANOV & GEORGIEV OOD is a beneficiary under Project BG16RFOP002-2.077-0505-C01 "Support for medium enterprises to overcome the economic consequences of the COVID-19 pandemic", implemented with the financial support of the Operational Programme "Innovation and Competitiveness" 2014-2020, co-financed by the EU through the European Regional Development Fund.\n\n Total project value: BGN 150,000.00, of which BGN 127,500.00 European and BGN 22,500.00 national co-financing. The project duration is 3 months.\n\n The project is aimed at supporting medium enterprises to overcome the economic consequences of the COVID-19 pandemic.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      description: '"Metalstroi STOYANOV & GEORGIEV" OOD is a company specialized in the design and construction of metal constructions suitable for industrial, commercial, and administrative buildings.',
      address: '5100, Gorna Oryahovitsa',
      street: '88 "Sveti Knyaz Boris I" St.',
      formTitle: 'Make an Inquiry',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'E-mail',
      message: 'Message',
      attachFiles: 'Attach Files',
      fileCount: (count: number) => `${count} file(s)`,
      send: 'SEND',
      copyright: `© ${new Date().getFullYear()} Metalstroi. All rights reserved.`,
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
    },
    milestones: {
      items: [
        { number: '9000+', text: 'SQUARE METERS\nBUILT-UP AREA' },
        { number: '2000+', text: 'TONS OF PRODUCTION\nCAPACITY PER YEAR' },
        { number: '1000+', text: 'HAPPY CLIENTS' },
        { number: '25+', text: 'YEARS EXPERIENCE' },
      ],
    },
  },
};
