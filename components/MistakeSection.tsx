
import React from 'react';
import { ProgressRing } from './ProgressRing';
import { ArrowRight, Puzzle, XCircle, CheckCircle2 } from 'lucide-react';

export const MistakeSection: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-24 py-2 md:py-8">
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
            <ProgressRing percentage={80} color="#FF3B30" />
            <div className="text-center">
              <span className="text-red-500 font-black text-[10px] md:text-sm block mb-0.5 md:mb-1 uppercase">Не досматривают</span>
              <span className="text-gray-400 text-[8px] md:text-xs font-semibold uppercase tracking-wider">80% учеников</span>
            </div>
          </div>
        </div>
      </div>
      {/* Другие блоки аналогично... */}
    </div>
  );
};