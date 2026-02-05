
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Callout } from '../components/Callout';
import { XCircle, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react';

export const LongreadTwo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chatMessages = [
    { text: "Я уже пробовал ChatGPT, прикольно, но денег в кармане не прибавилось", side: 'left' },
    { text: "Купил курс по AI — там одна вода. Общие слова, никакой конкретики", side: 'left' },
    { text: "Умею генерировать картинки, но не понимаю, как на этом зарабатывать", side: 'left' },
    { text: "Наверное, это просто не моё. Или я что-то делаю не так", side: 'left' }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 flex flex-col items-center pb-32">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/85 ios-blur border-gray-100 py-2 md:py-3 shadow-sm' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <div className="max-w-screen-lg mx-auto px-5 flex justify-between items-center w-full">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className={`font-semibold tracking-tight text-xs md:text-sm transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
              Статья 2: Мысли в 3:00
            </span>
          </div>
          <div className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Раздел 1
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <Hero 
          time="МЫСЛИ В 3:00 НОЧИ." 
          title="Ты уже пробовал." 
          subtitle="Смотрел видео, покупал курсы, генерировал картинки... Но реальность оказалась сложнее." 
        />

        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-16 md:space-y-32">
          
          {/* Section: The Loop */}
          <section className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-[18px] md:text-[24px] text-gray-700 leading-relaxed font-medium">
                Смотрел видео про нейросети. Разбирался с Midjourney или Stable Diffusion. Может, даже купил какой-то курс за пару тысяч рублей.
              </p>
              <p className="text-[18px] md:text-[24px] text-gray-700 leading-relaxed font-medium">
                Генерировал картинки. Радовался результатам. Показывал друзьям: <span className="text-apple-blue font-bold">«Смотри, как круто нейронка рисует!»</span>
              </p>
            </div>

            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 text-red-500/10 group-hover:scale-110 transition-transform duration-700">
                  <XCircle size={120} strokeWidth={1} />
               </div>
               <div className="relative z-10 space-y-4">
                  <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.2em]">Горький факт</span>
                  <p className="text-2xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                    А потом открывал банковское приложение — и там всё те же цифры. Ничего не изменилось.
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 font-bold">Знакомо?</p>
               </div>
            </div>
          </section>

          {/* Section: Chat Messages */}
          <section className="space-y-10">
            <div className="flex items-center space-x-3 text-gray-400">
               <MessageCircle size={20} />
               <span className="text-sm font-bold uppercase tracking-widest">Входящие сообщения</span>
            </div>
            
            <div className="space-y-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex justify-start animate-fade-in`} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="bg-gray-100 text-gray-800 p-4 md:p-6 rounded-[1.5rem] rounded-bl-none max-w-[85%] text-sm md:text-lg font-medium shadow-sm border border-gray-200/50">
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xl md:text-3xl font-black text-gray-900 pt-10 tracking-tight">
              И самое болезненное: <br/> 
              <span className="text-red-500 italic">«Наверное, это просто не моё. Или я что-то делаю не так».</span>
            </p>
          </section>

          {/* Section: The Revelation */}
          <section className="space-y-12 text-center md:text-left">
            <div className="inline-block px-10 py-4 bg-red-600 text-white rounded-3xl font-black text-3xl md:text-6xl shadow-2xl shadow-red-200 animate-pulse tracking-tighter">
              СТОП.
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-3xl font-bold text-gray-800 leading-tight">
                Давай кое-что проясним прямо сейчас.
              </p>
              
              <div className="space-y-6 text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                <p>Если ты пробовал и не получилось — это не значит, что ты тупой. Не значит, что у тебя «не те руки».</p>
                <p>Не значит, что заработок на AI-моделях — это миф для избранных.</p>
              </div>

              <Callout variant="primary" icon="quote">
                Это значит только одно: тебе дали неправильную карту.
              </Callout>
            </div>
          </section>

          {/* Section: The System Failure */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Тебя научили", text: "Генерировать картинки. Но не научили превращать их в деньги.", color: "bg-blue-50 text-blue-700" },
              { label: "Тебе показали", text: "Инструменты. Но не показали систему.", color: "bg-indigo-50 text-indigo-700" },
              { label: "Тебе продали", text: "«Курс». Но не дали бизнес-модель.", color: "bg-purple-50 text-purple-700" }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-[2rem] ${item.color} border border-transparent hover:border-current transition-all duration-500`}>
                <span className="font-black text-[10px] uppercase tracking-widest opacity-60 block mb-4">{item.label}</span>
                <p className="text-lg md:text-xl font-bold leading-snug">{item.text}</p>
              </div>
            ))}
          </section>

          {/* Final CTA of this section */}
          <section className="pt-16 md:pt-32 border-t border-gray-100">
            <div className="bg-gray-900 text-white p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden group shadow-2xl">
              <div className="absolute -right-20 -bottom-20 text-white/5 opacity-20 group-hover:scale-125 transition-transform duration-[2000ms]">
                <TrendingUp size={400} />
              </div>
              
              <div className="relative z-10 space-y-8 md:space-y-12">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-6xl font-black leading-tight tracking-tight">
                    И это не твоя вина.
                  </h3>
                  <p className="text-xl md:text-3xl text-gray-400 font-medium">
                    Это вина тех, кто продаёт теорию под видом практики.
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-2xl text-blue-300 font-bold leading-relaxed">
                    Сейчас я объясню, почему твои прошлые попытки не сработали. И что нужно сделать по-другому, чтобы наконец увидеть деньги на счету.
                  </p>
                  
                  <a 
                    href="#three"
                    className="inline-flex items-center space-x-3 bg-apple-blue hover:bg-blue-600 text-white px-8 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-black shadow-xl shadow-blue-500/20 active:scale-95 transition-all group"
                  >
                    <span>ЧИТАТЬ ДАЛЕЕ</span>
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-white py-12 text-center text-gray-300 text-[10px] font-bold uppercase tracking-widest mt-20">
        AI Model Roadmap • Article II
      </footer>
    </div>
  );
};
