import React, { useState } from 'react';
import { ConstructionClient } from '../types';
import { Button } from './ui/Button';

const constructions: ConstructionClient[] = [
    {
        name: "Летен театър, Велико Търново",
        role: "\"Мистрал 7\" ООД",
        image: "../images/leten-teatur.png"
    },
    {
        name: "Козирка с VIP зона на стадион ПФК Септември, София",
        role: "\"ДИТ ХОТЕЛИ\" ООД",
        image: "../images/kozirka-stadion.png"
    },
    {
        name: "Къща в Барселона, Испания",
        role: "\"СМ и партньори\" АД",
        image: "../images/kushta-barselona.png"
    }
];

const moreConstructions: ConstructionClient[] = [
    {
        name: "Складова сграда",
        role: "\"Люник\" ЕООД",
        image: "../images/skladova-sgrada.png"
    },
    {
        name: "ACT мивка",
        role: "\"АСТ\" ООД",
        image: "../images/ACT-mivka.png"
    },
    {
        name: "Покривно покритие над бункери",
        role: "\"Строителство и строителни машини\" ЕООД",
        image: "../images/pokrivno-pokritie.png"
    },
    {
        name: "Billa магазин",
        role: "\"Лъки Строй 2011\" ЕАД",
        image: "../images/bila.png"
    },
    {
        name: "Силозна база",
        role: "\"Тива – I\" ЕООД",
        image: "../images/silozna-baza.png"
    },
    {
        name: "Навес за автомобили",
        role: "\"Димаго 1\" ООД",
        image: "../images/naves-avtomobili.png"
    },
    {
        name: "Ритейл парк",
        role: "\"Интер съплай\" ЕООД",
        image: "../images/retail-park.png"
    },
    {
        name: "Паркинг",
        role: "\"Гарантстрой – Грозев\" ООД",
        image: "../images/parking.png"
    },
    {
        name: "Тунел паркинг",
        role: "\"Транслог\" АД",
        image: "../images/tunel-parking.png"
    }
];

const ConstructionCard: React.FC<{ client: ConstructionClient }> = ({ client }) => (
    <div className="group cursor-pointer">
        <div className="overflow-hidden mb-6 relative">
            <div className="absolute inset-0 bg-corporate-dark/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
                src={client.image}
                alt={client.name}
                className="w-full h-[400px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
        </div>
        <h3 className="text-2xl font-serif text-corporate-dark">{client.name}</h3>
        <p className="text-sm uppercase tracking-widest text-corporate-gold mt-1">{client.role}</p>
    </div>
);

export const Constructions: React.FC = () => {
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

    return (
        <section id="constructions" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20 text-center">
                    <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">Обекти</h2>
                    <span className="text-4xl font-serif text-corporate-dark">Над 100 доволни клиенти</span>
                    <div className="section-header-divider"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {constructions.map((client, idx) => (
                        <ConstructionCard key={`initial-${idx}`} client={client} />
                    ))}
                </div>

                <div
                    className={`transition-all duration-1000 ease-in-out overflow-hidden ${showMore ? 'max-h-[5000px] opacity-100 mt-10' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                        }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {moreConstructions.map((client, idx) => (
                            <ConstructionCard key={`more-${idx}`} client={client} />
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button variant="secondary-white" onClick={handleToggle}>
                        {showMore ? "Скрий обектите" : "Разгледай още обекти"}
                    </Button>
                </div>
            </div>
        </section>
    );
};
