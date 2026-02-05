
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Callout } from '../components/Callout';
import { CardGrid } from '../components/CardGrid';
import { EarningsChart } from '../components/EarningsChart';
import { MistakeSection } from '../components/MistakeSection';
import { SolutionSection } from '../components/SolutionSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { OfferSection } from '../components/OfferSection';
import { DiagnosticSection } from '../components/DiagnosticSection';
import { FinalSection } from '../components/FinalSection';

export const LongreadOne: React.FC = () => {
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
            AI Монетизация
          </span>
          <a 
  href="https://forms.gle/LHVqv8GUBi88BYHK6" // 👈 Укажите здесь вашу ссылку
  target="_blank" // Опционально: откроет ссылку в новой вкладке
  rel="noopener noreferrer" // Опционально: для безопасности при target="_blank"
  className="bg-apple-blue text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-md hover:bg-blue-600 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
>
  Начать путь
</a>
        </div>
      </header>

      <main className="w-full">
        <Hero time="3:17 ночи." title="Ты лежишь в темноте и листаешь телефон..." subtitle="Завтра снова на работу. Снова тот же офис, те же лица, тот же потолок над головой." />
        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-12 md:space-y-32 mb-16 md:mb-40">
          <section className="space-y-6 md:space-y-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Callout>«Если я не найду способ делать хотя бы $5000 в месяц на чём-то своём — так и просижу здесь до пенсии».</Callout>
            <p className="text-[17px] md:text-[20px] text-gray-700 leading-[1.6] md:leading-[1.7] font-normal tracking-tight">Знакомо? Ты уже видел эти истории...</p>
            <div className="space-y-6 md:space-y-10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 border-l-4 border-apple-blue pl-4 md:pl-6">Ты пробовал разобраться сам...</h3>
              <CardGrid />
            </div>
            <div className="pt-2 md:pt-8 space-y-6 md:space-y-10">
               <div className="text-center space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">Цель: $5,000 / месяц</h3>
               </div>
               <EarningsChart />
            </div>
          </section>
          <section className="pt-12 md:pt-24 space-y-8 md:space-y-16 border-t border-gray-100">
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">Почему 95% новичков <span className="text-apple-blue">ошибаются</span></h2>
            <MistakeSection />
          </section>
          <section className="pt-12 md:pt-24 space-y-8 md:space-y-16 border-t border-gray-100">
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">Пошаговая карта <span className="text-apple-blue">«0 → $5000/мес»</span></h2>
            <RoadmapSection />
          </section>
          <section className="pt-12 md:pt-24 space-y-8 md:space-y-16 border-t border-gray-100">
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">Бесплатная <span className="text-apple-blue">диагностика</span></h2>
            <DiagnosticSection />
          </section>
          <section className="pt-12 md:pt-24 space-y-8 md:space-y-16 border-t border-gray-100">
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">Финальный <span className="text-apple-blue">выбор</span></h2>
            <FinalSection />
          </section>
        </div>
      </main>
      <footer className="w-full bg-white border-t border-gray-100 py-8 md:py-16">
        <div className="max-w-[760px] mx-auto px-6 text-center text-gray-400 text-[9px] md:text-xs font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} AI MODEL BUSINESS GUIDE
        </div>
      </footer>
    </div>
  );
};
