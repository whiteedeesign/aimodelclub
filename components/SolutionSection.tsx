
import React from 'react';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';

const incomeData = [
  { region: 'РФ / СНГ', value: 15, color: '#AEAEB2' },
  { region: 'USA / EU', value: 50, color: '#007AFF' },
];

export const SolutionSection: React.FC = () => {
  return (
    <div className="space-y-20 md:space-y-32 py-4 md:py-8">
      {/* Fact 1: Market Size */}
      <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-sm overflow-hidden relative group">
        <div className="absolute -right-24 -top-24 w-60 md:w-80 h-60 md:h-80 bg-blue-50 rounded-full blur-[80px] md:blur-[100px] opacity-40"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 text-center md:text-left">
          <div className="flex-1 space-y-4 md:space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full text-apple-blue text-[9px] font-black uppercase tracking-[0.2em]">
              <TrendingUp size={12} />
              <span>Аналитика Рынка</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight">Объем — <br className="hidden md:block"/> $50+ млрд</h3>
            <p className="text-gray-600 text-base md:text-[20px] leading-[1.6]">
              Это цифровая индустрия развлечений. AI позволяет занимать здесь место без штата сотрудников.
            </p>
          </div>
          <div className="flex flex-col items-center shrink-0">
             <div className="text-6xl md:text-[80px] font-black text-apple-blue tracking-[-0.05em] leading-none">$50B</div>
             <div className="text-gray-400 text-[9px] md:text-xs font-black mt-2 md:mt-4 uppercase tracking-[0.2em]">ЕЖЕГОДНЫЙ ОБОРОТ</div>
          </div>
        </div>
      </div>

      {/* Fact 2: USA Audience Economics */}
      <div className="space-y-8 md:space-y-12">
        <div className="flex items-center space-x-4 md:space-x-5 justify-center md:justify-start">
          <span className="bg-apple-blue text-white w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">2</span>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">Экономика Запада</h3>
        </div>
        
        <p className="text-base md:text-[20px] text-gray-600 leading-relaxed text-center md:text-left">
          Платёжеспособная аудитория США — ключ к $5000+ при тех же усилиях. Чек в 5 раз выше, чем в СНГ.
        </p>

        <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm h-[280px] md:h-[320px]">
          <h4 className="text-center font-black text-gray-400 text-[9px] mb-6 md:mb-10 uppercase tracking-[0.2em]">Средний чек (USD)</h4>
          <ResponsiveContainer width="100%" height="75%">
            <BarChart data={incomeData} layout="vertical" margin={{ left: 10, right: 50 }}>
              <XAxis type="number" hide />
              <YAxis 
                dataKey="region" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#1C1C1E', fontWeight: 800, fontSize: 13 }}
                width={70}
              />
              <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={40}>
                {incomeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="value" position="right" formatter={(v: number) => `$${v}`} style={{ fontWeight: 900, fill: '#1C1C1E', fontSize: 16 }} offset={15} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Fact 3: Acceleration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div className="flex items-center space-x-4 md:space-x-5 justify-center md:justify-start">
            <span className="bg-apple-blue text-white w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl">3</span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Эффективность x5</h3>
          </div>
          <p className="text-base md:text-[20px] text-gray-600 leading-[1.6]">
            AI генерирует профессиональный контент за час вместо недель. Скорость — твое преимущество.
          </p>
        </div>
        <div className="bg-gray-100/60 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center justify-center space-y-6 md:space-y-8">
            <div className="w-full bg-white rounded-full h-4 md:h-6 overflow-hidden shadow-inner p-1">
               <div className="bg-apple-blue h-full w-[90%] rounded-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
               </div>
            </div>
            <div className="flex justify-between w-full text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
               <span>Классика</span>
               <span className="text-apple-blue">AI-Механика</span>
            </div>
        </div>
      </div>

      {/* Legality Section */}
      <div className="bg-green-50/40 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-green-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
        <div className="text-green-600 shrink-0 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-sm">
           {/* Fixed: Replaced size and md:size with responsive className */}
           <ShieldCheck strokeWidth={1.5} className="w-10 h-10 md:w-14 md:h-14" />
        </div>
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-green-900 leading-tight">Прозрачный бизнес</h3>
          <p className="text-base md:text-lg text-green-800 leading-relaxed font-medium">
            Платформы вроде Fanvue официально сертифицируют AI-креаторов. Это не серый хакинг, а новый рынок.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
             <div className="px-4 py-1.5 bg-white rounded-full shadow-sm border border-green-100 text-green-700 font-black text-[9px] uppercase tracking-wider italic">Verified Creator</div>
             <div className="px-4 py-1.5 bg-white rounded-full shadow-sm border border-green-100 text-green-700 font-black text-[9px] uppercase tracking-wider">AI Safe</div>
          </div>
        </div>
      </div>
    </div>
  );
};