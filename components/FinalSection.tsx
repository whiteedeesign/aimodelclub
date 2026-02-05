
import React from 'react';
import { Callout } from './Callout';
import { Clock, ArrowRight, ClipboardList, AlertCircle, CheckCircle2 } from 'lucide-react';

export const FinalSection: React.FC = () => {
  return (
    <div className="space-y-20 md:space-y-32 py-4 md:py-8">
      <div className="space-y-8 md:space-y-12">
        <p className="text-[18px] md:text-[20px] text-gray-600 leading-relaxed font-normal text-center md:text-left">
          Последнее, что хочу сказать. Ты можешь закрыть статью. Но подумай вот о чём.
        </p>

        {/* Time works against you */}
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden group text-center md:text-left">
          <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-1000 hidden md:block">
            <Clock size={200} strokeWidth={1} />
          </div>
          <div className="relative z-10 space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 text-apple-blue font-black uppercase tracking-[0.25em] text-[9px] md:text-[11px] justify-center md:justify-start">
               {/* Fixed: Replaced size and md:size with responsive className */}
               <AlertCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
               <span>Дефицит времени</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight">Время работает <br className="hidden md:block"/> против тебя</h3>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Рынок AI-моделей на пике. Через год лидеры уже зацементируют ниши. Окно возможностей открыто сейчас.
            </p>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="space-y-8 md:space-y-12">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 border-l-[6px] border-apple-blue pl-6 md:pl-8 py-1">Моя гарантия</h3>
        <Callout variant="primary" icon="info">
          Разбор — это не продажи. Ты получишь ценность, даже если решишь двигаться сам.
        </Callout>
        <p className="text-base md:text-[20px] text-gray-600 leading-relaxed text-center md:text-left">
          Я знаю ценность продукта. Если ты увидишь в нем свободу — ты захочешь продолжить. Если нет — просто пожелаем удачи. 
        </p>
      </div>

      {/* The Choice */}
      <div className="space-y-12 md:space-y-20 pt-8 md:pt-16">
        <div className="text-center space-y-4 md:space-y-6">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Один вопрос напоследок</h3>
          <p className="text-lg md:text-xl text-gray-500 font-medium italic">Где ты окажешься через 90 дней?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between opacity-80 md:opacity-60 hover:opacity-100 transition-all duration-500">
            <div>
              <div className="text-gray-400 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-6 md:mb-8 text-center md:text-left">СЦЕНАРИЙ №1</div>
              <h4 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-gray-800 tracking-tight text-center md:text-left">Там же, где сейчас</h4>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium italic text-center md:text-left">
                Экран телефона в 3:00. <br className="md:block"/>
                Утренняя пробка. <br className="md:block"/>
                Бесконечные «завтра точно».
              </p>
            </div>
          </div>
          
          <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border-2 border-apple-blue shadow-xl shadow-blue-50 transition-all hover:scale-[1.02] duration-500 flex flex-col justify-between">
            <div>
              <div className="text-apple-blue font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-6 md:mb-8 text-center md:text-left">СЦЕНАРИЙ №2</div>
              <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight text-center md:text-left">Цифровая свобода</h4>
              <p className="text-base md:text-lg text-gray-900 font-semibold leading-relaxed mb-8 md:mb-10 text-center md:text-left">
                Твердый доход в валюте. <br className="md:block"/>
                Контроль над временем. <br className="md:block"/>
                Новый уровень жизни.
              </p>
              <div className="bg-blue-50 text-apple-blue p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center justify-center md:justify-start space-x-3">
                {/* Fixed: Replaced size and md:size with responsive className */}
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-black uppercase tracking-widest text-[9px] md:text-[10px]">Это реально</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 md:pt-16 space-y-12 md:space-y-16">
           <p className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 italic">Выбор за тобой.</p>
           
          <div className="flex flex-col items-center space-y-8 md:space-y-10">
  {/* 👇 Заменили button на a */}
  <a 
    href="https://forms.gle/cVbfiymmPXc9UYTs6" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full md:w-auto bg-apple-blue text-white px-8 md:px-14 py-5 md:py-7 rounded-full text-lg md:text-2xl font-black shadow-2xl shadow-blue-200 hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center space-x-3 md:space-x-5 group uppercase tracking-tight"
  >
    <ClipboardList strokeWidth={2.5} className="w-6 h-6 md:w-8 md:h-8" />
    <span>Записаться на разбор</span>
    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300 w-6 h-6 md:w-8 md:h-8" />
  </a>

  <div className="space-y-2 w-full max-w-[200px] md:max-w-[280px]">
    <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-[9px] md:text-[11px]">Бесплатная сессия</p>
    <div className="h-1 w-full bg-blue-100 rounded-full overflow-hidden">
      <div className="h-full bg-apple-blue w-1/3 animate-[shimmer_2s_infinite]"></div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
