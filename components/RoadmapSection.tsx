
import React from 'react';
import { 
  Package, 
  Camera, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2, 
  UserCircle2,
  Sparkles,
  Globe2,
  Wallet2
} from 'lucide-react';

interface StageProps {
  number: number;
  weeks: string;
  title: string;
  goal: string;
  steps: { icon: any, text: string }[];
  result: string;
  color: string;
  icon: any;
}

const Stage: React.FC<StageProps> = ({ weeks, title, goal, steps, result, color, icon: Icon }) => (
  <div className="relative pl-10 md:pl-16 pb-16 md:pb-24 last:pb-0 group">
    {/* Vertical Line */}
    <div className="absolute left-[15px] md:left-[23px] top-10 md:top-12 bottom-0 w-[2px] bg-gray-100 group-last:hidden"></div>
    
    {/* Circle indicator */}
    <div className={`absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-[1.2rem] ${color} flex items-center justify-center text-white shadow-lg z-10 transition-all group-hover:scale-110 duration-500`}>
      {/* Fixed: Replaced size and md:size with responsive className */}
      <Icon strokeWidth={1.5} className="w-4 h-4 md:w-6 md:h-6" />
    </div>

    <div className="space-y-4 md:space-y-8">
      <div className="flex items-center space-x-3">
        <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest shadow-sm">
          {weeks}
        </span>
      </div>

      <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
        <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-3 tracking-tight text-gray-900 leading-tight">{title}</h3>
        <p className="text-apple-blue font-bold text-xs md:text-[15px] mb-6 md:mb-10 flex items-center uppercase tracking-wide">
          <span className="w-2 h-2 bg-apple-blue rounded-full mr-2 md:mr-3 animate-pulse"></span>
          Фокус: {goal}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-100 transition-all">
              <div className="mt-0.5 text-apple-blue shrink-0">
                {/* Fixed: Replaced size and md:size with responsive className */}
                <step.icon strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-sm md:text-[16px] text-gray-700 font-semibold leading-snug">{step.text}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-blue-50/50 rounded-2xl md:rounded-[2rem] border border-blue-100 text-gray-900">
           <div className="bg-apple-blue p-2 rounded-lg md:rounded-xl text-white">
            {/* Fixed: Replaced size and md:size with responsive className */}
            <CheckCircle2 className="w-4.5 h-4.5 md:w-6 md:h-6" />
           </div>
           <div>
            <p className="text-[8px] md:text-xs font-black uppercase tracking-widest text-apple-blue mb-0.5">KPI ЭТАПА</p>
            <p className="text-sm md:text-lg font-bold leading-tight">{result}</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const RoadmapSection: React.FC = () => {
  const stages = [
    { number: 1, weeks: 'ДЕНЬ 1', title: 'Фундамент', goal: 'Витрина', icon: Package, color: 'bg-blue-500', steps: [{ icon: UserCircle2, text: 'Профиль модели' }, { icon: Sparkles, text: 'Tone of Voice' }, { icon: Package, text: 'Платформы' }], result: 'Точка входа готова.' },
    { number: 2, weeks: 'ДЕНЬ 2-3', title: 'Контент', goal: 'База данных', icon: Camera, color: 'bg-indigo-500', steps: [{ icon: Sparkles, text: 'Генерация лиц' }, { icon: Camera, text: 'Сет 150+ фото' }, { icon: Sparkles, text: 'AI-видео' }], result: 'Контент на 2 месяца.' },
    { number: 3, weeks: 'ДЕНЬ 4-5', title: 'Внимание', goal: 'Захват трафика', icon: TrendingUp, color: 'bg-cyan-500', steps: [{ icon: Globe2, text: 'X, Reddit, TikTok' }, { icon: UserCircle2, text: 'Масштабирование' }, { icon: TrendingUp, text: 'Органика' }], result: '15-50 лидов в сутки.' },
    { number: 4, weeks: 'ДЕНЬ 6-7', title: 'Деньги', goal: 'Конверсия', icon: DollarSign, color: 'bg-green-600', steps: [{ icon: Wallet2, text: 'Скрипты в DM' }, { icon: DollarSign, text: 'Система чаевых' }, { icon: Sparkles, text: 'Авто-рассылки' }], result: 'Окупаемость достигнута.' }
  ];

  return (
    <div className="py-10 md:py-20">
      <div className="space-y-4 md:space-y-6 mb-12 md:mb-20 border-l-[6px] md:border-l-8 border-apple-blue pl-6 md:pl-8 py-1 md:py-2">
        <p className="text-xl md:text-[28px] font-black text-gray-900 leading-tight">
          7 дней системного фокуса — <br className="hidden md:block"/> твоя новая реальность.
        </p>
      </div>

      <div className="relative">
        {stages.map((stage, idx) => (
          <Stage key={idx} {...stage} />
        ))}
      </div>
    </div>
  );
};