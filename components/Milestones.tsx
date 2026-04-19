import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const numericMatch = value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(targetNumber.toString(), '');

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || targetNumber === 0) {
      if (targetNumber === 0) setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 1000; // 1.5 seconds animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutExpo function for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeOut * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, targetNumber]);

  return (
    <div ref={ref}>
      {targetNumber > 0 ? count : value}{targetNumber > 0 ? suffix : ''}
    </div>
  );
};

export const Milestones: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#8F0E2A] w-full py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-16 justify-items-center">
        {t.milestones.items.map((item, index) => (
          <div key={index} className="flex flex-row items-center gap-2 md:gap-3 text-gray-200">
            <div
              className="text-5xl md:text-6xl tracking-tight leading-none"
              style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", WebkitTextStroke: "2px rgba(0,0,0,0.4)" }}
            >
              <AnimatedNumber value={item.number} />
            </div>
            <div
              className="text-[19px] md:text-[22px] uppercase leading-none flex flex-col justify-center gap-1 tracking-wider"
              style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", WebkitTextStroke: "1px rgba(0,0,0,0.4)" }}
            >
              {item.text.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
