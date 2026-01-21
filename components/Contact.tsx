import React from 'react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-corporate-dark text-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-serif mb-8">Свържи се с нас</h2>
            <p className="text-gray-400 font-light mb-12 max-w-md leading-relaxed">
              „METAЛСТРОЙ СТОЯНОВ и ГЕОРГИЕВ“ ООД е фирма, специализирана в проектирането и изграждането на метални конструкции, подходящи за промишлени, търговски и административни сгради.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">5100, гр. Горна Оряховица</h4>
                <p className="text-gray-300 font-light">ул. "Свети Княз Борис 1" 88<br /><a href="tel:+35961860394" className="hover:text-white transition-colors">+359 618 60 394</a></p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Стоян СТОЯНОВ</h4>
                <p className="text-gray-300 font-light"><a href="tel:+359888890714" className="hover:text-white transition-colors">+359 888 890 714</a></p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Йордан ГЕОРГИЕВ</h4>
                <p className="text-gray-300 font-light"><a href="tel:+359887269383" className="hover:text-white transition-colors">+359 887 269 383</a></p>
              </div>
              <div className="pt-4">
                <a href="mailto:office@metalstroi-s-g.com" className="text-xl font-serif border-b border-gray-600 hover:border-white transition-colors">office@metalstroi-s-g.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-serif text-center text-white mb-12">Направи запитване</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Име</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Фамилия</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">E-mail</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Съобщение</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors resize-none"></textarea>
              </div>
              <div className="pt-4">
                <Button variant="primary" className="w-full md:w-auto">ИЗПРАТИ</Button>
              </div>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} METALSTROY. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};