import React from 'react';
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

export const Constructions: React.FC = () => {
    return (
        <section id="constructions" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">Обекти</span>
                    <h2 className="text-4xl font-serif text-corporate-dark">Над 100 доволни клиенти</h2>
                    <div className="w-16 h-1 bg-red-600 mb-4 mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {constructions.map((client, idx) => (
                        <div key={idx} className="group cursor-pointer">
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
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="secondary-white">
                        Разгледай още обекти
                    </Button>
                </div>
            </div>
        </section>
    );
};
