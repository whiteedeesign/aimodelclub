
import React from 'react';
import { ProgressRing } from './ProgressRing.tsx';
import { ArrowRight, Puzzle, XCircle, CheckCircle2 } from 'lucide-react';

export const MistakeSection: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-24 py-2 md:py-8">
      {/* Mistake 1 */}
      <div className="bg-white p-6 md:p-14 rounded-[1.5rem] md:rounded-[3rem] border border-gray-100 shadow-sm space-y-6 md:space-y-10 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 text-center md:text-left">
          <div className="max-w-md space-y-3 md:space-y-6">
            <span className="text-apple-blue font-bold uppercase tracking-[0.2em] text-[8px] md:text-[11px] bg-blue-50 px-3 py-1 rounded-full inline-block">Ошибка №1</span>
            <h3 className="text-xl md:text-3xl font-black tracking-tight text-gray-900 leading-tight">«Курсы-пустышки» за копейки</h3>
            <p className="text-gray-600 text-sm md:text-lg leading-[1.5]">
              Когда ты платишь 2000 рублей — ты не воспринимаешь это как бизнес-инвестицию. Дисциплина пропадает на второй день.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-4 shrink-0">
            <ProgressRing percentage={80} color="#FF3B30" size={80} mdSize={128} />
            <div className="text-center">
              <span className="text-red-500 font-black text-[10px] md:text-sm block mb-0.5 md:mb-1 uppercase">Не досматривают</span>
              <span className="text-gray-400 text-[8px] md:text-xs font-semibold uppercase tracking-wider">80% учеников</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mistake 2 */}
      <div className="space-y-6 md:space-y-10">
        <div className="flex items-center space-x-3 md:space-x-5 justify-center md:justify-start">
          <span className="bg-apple-blue text-white w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl flex items-center justify-center font-bold text-base md:text-xl shadow-lg">2</span>
          <h3 className="text-lg md:text-3xl font-black tracking-tight">Сбор системы из кусков</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {['Нейросети', 'Трафик', 'Продажи'].map((text, i) => (
            <div key={i} className="p-3 md:p-8 bg-gray-50/80 rounded-[1rem] md:rounded-[2rem] border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-semibold italic text-center text-[9px] md:text-sm">
              Фрагмент #{i+1}
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50/50 p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] border border-blue-100 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div className="bg-white p-2 md:p-4 rounded-lg md:rounded-2xl shadow-sm text-apple-blue shrink-0">
            <Puzzle strokeWidth={1.5} className="w-5 h-5 md:w-8 md:h-8" />
          </div>
          <div>
            <h4 className="text-lg md:text-2xl font-black text-gray-900 mb-1 tracking-tight">Когнитивный тупик</h4>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">Знания без связок — это балласт. Ты застреваешь в бесконечном сборе теории.</p>
          </div>
        </div>
      </div>

      {/* Mistake 3 */}
      <div className="space-y-6 md:space-y-10">
        <div className="flex items-center space-x-3 md:space-x-5 justify-center md:justify-start">
          <span className="bg-apple-blue text-white w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl flex items-center justify-center font-bold text-base md:text-xl shadow-lg">3</span>
          <h3 className="text-lg md:text-3xl font-black tracking-tight">Старт не с того конца</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="bg-gray-50 p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] border border-gray-200 space-y-4 md:space-y-8 grayscale opacity-60">
            <div className="flex items-center space-x-3 justify-center md:justify-start text-gray-500 font-black uppercase tracking-widest text-[8px] md:text-[10px]">
              <XCircle className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
              <span>Типичный путь (95%):</span>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4 items-center">
              <div className="w-full bg-white px-3 py-2 rounded-xl border border-gray-200 text-center font-semibold text-xs md:text-sm">Контент</div>
              <ArrowRight className="text-gray-300 rotate-90 w-3.5 h-3.5 md:w-4 md:h-4" />
              <div className="w-full bg-white px-3 py-2 rounded-xl border border-gray-200 text-center font-semibold text-xs md:text-sm">Технологии</div>
              <ArrowRight className="text-gray-300 rotate-90 w-3.5 h-3.5 md:w-4 md:h-4" />
              <div className="text-gray-400 font-bold py-1 text-sm md:text-xl">Слив времени 📉</div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] border-2 border-apple-blue shadow-lg shadow-blue-100 space-y-4 md:space-y-8 md:-translate-y-2">
            <div className="flex items-center space-x-3 justify-center md:justify-start text-apple-blue font-black uppercase tracking-widest text-[8px] md:text-[10px]">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
              <span>Стратегический путь:</span>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4 items-center">
              <div className="w-full bg-apple-blue text-white px-3 py-2 rounded-xl shadow-md font-black text-center text-xs md:text-sm">Бизнес-модель</div>
              <ArrowRight className="text-blue-200 rotate-90 w-3.5 h-3.5 md:w-4 md:h-4" />
              <div className="w-full bg-white px-3 py-2 rounded-xl border border-blue-100 text-center font-bold text-apple-blue text-xs md:text-sm">Система продаж</div>
              <ArrowRight className="text-blue-200 rotate-90 w-3.5 h-3.5 md:w-4 md:h-4" />
              <div className="w-full bg-white px-3 py-2 rounded-xl border border-blue-100 text-center font-bold text-apple-blue text-xs md:text-sm">Продукт & Контент</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};