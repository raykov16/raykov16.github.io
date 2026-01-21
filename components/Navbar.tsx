import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'НАЧАЛО', href: '#home' },
  { label: 'ПРОДУКЦИЯ', href: '#services' },
  { label: 'ОБЕКТИ', href: '#constructions' },
  { label: 'СЕРТИФИКАТИ', href: '#certificates' },
  { label: 'КОНТАКТИ', href: '#contact' },
  { label: 'ЗА НАС', href: '#about-us' },
];

export const Navbar: React.FC = () => {
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
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
        threshold: 0
      }
    );

    navItems.forEach((item) => {
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
      <div className="w-full px-6 md:px-24 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`text-2xl font-serif font-semibold tracking-widest uppercase ${isScrolled ? 'text-corporate-dark' : 'text-white'}`}>
          МЕТАЛСТРОЙ С & Г
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-medium uppercase tracking-widest transition-colors relative group ${isScrolled ? 'text-black' : 'text-white'
                }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 transform transition-transform duration-300 ${isScrolled ? 'bg-black' : 'bg-white'
                } ${activeSection === item.href.substring(1)
                  ? 'scale-x-100 origin-left'
                  : 'scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left'
                }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-corporate-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-corporate-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-4 md:hidden animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-widest text-gray-800 hover:text-corporate-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};