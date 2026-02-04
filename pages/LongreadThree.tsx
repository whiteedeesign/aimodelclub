
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero.tsx';
import { Callout } from '../components/Callout.tsx';

export const LongreadThree: React.FC = () => {
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
            Третья часть
          </span>
          <div className="bg-apple-blue text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
            Контакт
          </div>
        </div>
      </header>

      <main className="w-full">
        <Hero 
          time="Финал." 
          title="Заголовок третьей статьи" 
          subtitle="Финальное руководство или история успеха, завершающая цикл." 
        />
        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-12 md:space-y-32 mb-16 md:mb-40">
          <section className="space-y-6 md:space-y-12 animate-fade-in">
            <Callout variant="accent" icon="info">
              «Финальный Callout блок. Самое важное сообщение, которое должен запомнить читатель».
            </Callout>
            <p className="text-[17px] md:text-[20px] text-gray-700 leading-[1.6] font-normal">
              Текст третьего лонгрида. Вы можете переиспользовать все компоненты: графики, карточки, таймлайны.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};
