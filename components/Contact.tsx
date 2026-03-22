import React, { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const mapLang = language === 'en' ? 'en' : 'bg';
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.370885905196!2d25.7200512!3d43.138740500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a9297bdaa9cac5%3A0xa5cf2f5e06e6b87e!2z0JzQtdGC0LDQu9GB0YLRgNC%2B0Lkg0KHRgtC%2B0Y%2FQvdC%2B0LIg0Lgg0JPQtdC%2B0YDQs9C40LXQsiIg0J7QntCU!5e0!3m2!1s${mapLang}!2s${mapLang}!4v1770545966504!5m2!1s${mapLang}!2s${mapLang}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    // Append selected files under the 'files' field for multer
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage(
          language === 'en'
            ? 'Failed to send message. Please try again.'
            : 'Неуспешно изпращане. Моля, опитайте отново.'
        );
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setErrorMessage(
        language === 'en'
          ? 'An error occurred. Please try again later.'
          : 'Възникна грешка. Моля, опитайте по-късно.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-corporate-dark text-white py-16 sm:py-24" aria-label={language === 'en' ? 'Contact Metalstroi Stoyanov and Georgiev - metal constructions inquiries' : 'Контакти Металстрой Стоянов и Георгиев – запитвания за метални конструкции'}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-8">{t.contact.title}</h2>
            <p className="text-gray-400 font-light mb-8 sm:mb-12 max-w-md leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">{t.contact.address}</h4>
                <p className="text-gray-300 font-light">{t.contact.street}<br /><a href="tel:+35961860394" className="hover:text-white transition-colors">+359 618 60 394</a></p>
              </div>
              {language === 'bg' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Стоян Стоянов</h4>
                    <p className="text-gray-300 font-light"><a href="tel:+359888890714" className="hover:text-white transition-colors">+359 888 890 714</a></p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">Йордан Георгиев</h4>
                    <p className="text-gray-300 font-light"><a href="tel:+359887269383" className="hover:text-white transition-colors">+359 887 269 383</a></p>
                  </div>
                </>
              )}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-gold mb-2">{language === 'en' ? 'Radoslav Stoyanov' : 'Радослав Стоянов'}</h4>
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
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title={language === 'en' ? 'Metalstroi Stoyanov and Georgiev office location on Google Maps - Gorna Oryahovitsa' : 'Местоположение на Металстрой Стоянов и Георгиев на Google Карти – Горна Оряховица'}
            ></iframe>
          </div>
        </div>

        <div className="bg-white/5 p-6 sm:p-8 md:p-12 border border-white/10 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif text-center text-white mb-6 sm:mb-8">{t.contact.formTitle}</h3>

          {isSuccess ? (
            <div className="text-center py-8 sm:py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-corporate-gold/20 mb-6">
                <svg className="w-8 h-8 text-corporate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                {language === 'en' ? 'Your inquiry has been sent!' : 'Вашето запитване е изпратено!'}
              </h4>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                {language === 'en'
                  ? 'We will get back to you as soon as possible. Thank you for your interest!'
                  : 'Ще се свържем с вас възможно най-скоро. Благодарим за интереса!'}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-corporate-gold hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {language === 'en' ? '← Send another inquiry' : '← Изпрати ново запитване'}
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.firstName}</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.lastName}</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.message}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-corporate-gold transition-colors resize-none"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="text-red-400 text-sm text-center py-2">
                  {errorMessage}
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  type="button"
                  variant="secondary-dark"
                  onClick={() => fileInputRef.current?.click()}
                  className="py-3 px-6 text-xs w-full sm:w-auto"
                >
                  {t.contact.attachFiles}
                </Button>
                <span className="text-sm text-gray-400 text-center sm:text-left">
                  {selectedFiles.length > 0 ? t.contact.fileCount(selectedFiles.length) : ''}
                </span>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? (language === 'en' ? 'SENDING...' : 'ИЗПРАЩАНЕ...')
                    : t.contact.send}
                </Button>
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
          )}
        </div>

        <div className="border-t border-white/10 mt-16 sm:mt-20 pt-8 flex flex-col md:flex-row justify-between items-center sm:items-start text-center sm:text-left text-xs text-gray-500 gap-4">
          <p>{t.contact.copyright}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">{t.contact.privacyPolicy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.contact.termsOfUse}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};