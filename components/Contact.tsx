import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  /* Step 1: Add necessary hooks */
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <footer id="contact" className="bg-corporate-dark text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-8">Свържи се с нас</h2>
            <p className="text-gray-400 font-light mb-8 sm:mb-12 max-w-md leading-relaxed">
              „METAЛСТРОЙ СТОЯНОВ и ГЕОРГИЕВ“ ООД е фирма, специализирана в проектирането и изграждането на метални конструкции, подходящи за промишлени, търговски и административни сгради.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">5100, гр. Горна Оряховица</h4>
                <p className="text-gray-300 font-light">ул. "Свети Княз Борис 1" 88<br /><a href="tel:+35961860394" className="hover:text-white transition-colors">+359 618 60 394</a></p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Стоян Стоянов</h4>
                <p className="text-gray-300 font-light"><a href="tel:+359888890714" className="hover:text-white transition-colors">+359 888 890 714</a></p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Йордан Георгиев</h4>
                <p className="text-gray-300 font-light"><a href="tel:+359887269383" className="hover:text-white transition-colors">+359 887 269 383</a></p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Радослав Стоянов</h4>
                <p className="text-gray-300 font-light"><a href="tel:+359887269383" className="hover:text-white transition-colors">+359 884 722 968</a></p>
              </div>
              <div className="pt-4 flex items-center gap-3">
                <Mail className="w-5 h-5 text-corporate-gold" />
                <a href="mailto:office@metalstroi-s-g.com" className="text-xl font-serif border-b border-gray-600 hover:border-white transition-colors">office@metalstroi-s-g.com</a>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.370885905196!2d25.7200512!3d43.138740500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9297bdaa9cac5%3A0xa5cf2f5e06e6b87e!2zItCc0LXRgtCw0LvRgdGC0YDQvtC5INCh0YLQvtGP0L3QvtCyINC4INCT0LXQvtGA0LPQuNC10LIiINCe0J7QlA!5e0!3m2!1sbg!2sbg!4v1770545966504!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="bg-white/5 p-6 sm:p-8 md:p-12 border border-white/10 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif text-center text-white mb-6 sm:mb-8">Направи запитване</h3>
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
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                type="button"
                variant="secondary-dark"
                onClick={() => fileInputRef.current?.click()}
                className="py-3 px-6 text-xs w-full sm:w-auto"
              >
                Прикачи файлове
              </Button>
              <span className="text-sm text-gray-400 text-center sm:text-left">
                {selectedFiles.length > 0 ? `${selectedFiles.length} файл(а)` : ''}
              </span>
              <Button variant="primary" className="w-full sm:w-auto">ИЗПРАТИ</Button>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".png, .jpg, .jpeg, .pdf"
                className="hidden"
              />
            </div>
          </form>
        </div>

        <div className="border-t border-white/10 mt-16 sm:mt-20 pt-8 flex flex-col md:flex-row justify-between items-center sm:items-start text-center sm:text-left text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} METALSTROY. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};