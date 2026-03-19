import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavItemDef {
  labelKey: 'home' | 'services' | 'constructions' | 'certificates' | 'contact' | 'aboutUs';
  href: string;
}

const navItemDefs: NavItemDef[] = [
  { labelKey: 'home', href: '#home' },
  { labelKey: 'services', href: '#services' },
  { labelKey: 'constructions', href: '#constructions' },
  { labelKey: 'certificates', href: '#certificates' },
  { labelKey: 'contact', href: '#contact' },
  { labelKey: 'aboutUs', href: '#about-us' },
];

export const Navbar: React.FC = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    navItemDefs.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-xl sm:text-2xl font-serif font-semibold tracking-widest uppercase ${isScrolled ? 'text-corporate-dark' : 'text-white'}`}>
          {t.nav.logo}
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 group/nav">
          {navItemDefs.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              className={`text-xs font-medium uppercase tracking-widest transition-colors relative group ${isScrolled ? 'text-black' : 'text-white'
                }`}
            >
              {t.nav[item.labelKey]}
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 transform transition-transform duration-300 ${isScrolled ? 'bg-black' : 'bg-white'
                } ${activeSection === item.href.substring(1)
                  ? 'scale-x-100 origin-left group-hover/nav:scale-x-0 group-hover/nav:origin-right group-hover:!scale-x-100 group-hover:!origin-left'
                  : 'scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left'
                }`}></span>
            </a>
          ))}

          {/* Language Toggle - Desktop */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border rounded-full px-3 py-1.5 ml-2 ${
              isScrolled
                ? 'text-corporate-dark border-corporate-dark/30 hover:bg-corporate-dark hover:text-white'
                : 'text-white border-white/40 hover:bg-white hover:text-corporate-dark'
            }`}
            title={language === 'bg' ? 'Switch to English' : 'Превключи на Български'}
          >
            <Globe size={14} />
            {language === 'bg' ? 'EN' : 'BG'}
          </button>
        </div>

        {/* Mobile Toggle + Language */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Language Toggle - Mobile */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-all duration-300 border rounded-full px-2.5 py-1 ${
              isScrolled
                ? 'text-corporate-dark border-corporate-dark/30 hover:bg-corporate-dark hover:text-white'
                : 'text-white border-white/40 hover:bg-white hover:text-corporate-dark'
            }`}
          >
            <Globe size={12} />
            {language === 'bg' ? 'EN' : 'BG'}
          </button>

          <button
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-corporate-dark' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-corporate-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-4 sm:px-6 flex flex-col space-y-4 lg:hidden animate-fade-in">
          {navItemDefs.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              className="text-sm font-medium uppercase tracking-widest text-gray-800 hover:text-corporate-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav[item.labelKey]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};