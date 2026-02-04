
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero.tsx';
import { Callout } from '../components/Callout.tsx';

export const LongreadTwo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 flex flex-col items-center">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/85 ios-blur border-gray-100 py-2 md:py-3 shadow-sm' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <div className="max-w-screen-lg mx-auto px-5 flex justify-between items-center w-full">
          <span className={`font-semibold tracking-tight text-sm md:text-base transition-all duration-500 truncate ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            Второй Лонгрид
          </span>
          <div className="bg-apple-blue text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
            Действие
          </div>
        </div>
      </header>

      <main className="w-full">
        <Hero 
          time="Следующий этап." 
          title="Заголовок второй статьи" 
          subtitle="Подзаголовок, который раскрывает суть второй темы в стиле Apple." 
        />
        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-12 md:space-y-32 mb-16 md:mb-40">
          <section className="space-y-6 md:space-y-12 animate-fade-in">
            <Callout variant="secondary">
              «Здесь будет ваша важная мысль для второго лонгрида, оформленная в стиле цитат Apple Notes».
            </Callout>
            <p className="text-[17px] md:text-[20px] text-gray-700 leading-[1.6] font-normal">
              Начните вставлять ваш текст сюда. Система автоматически адаптирует его под мобильные устройства и сохранит чистоту дизайна.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};
