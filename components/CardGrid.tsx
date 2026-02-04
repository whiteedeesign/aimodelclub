
import React from 'react';
import { Youtube, Send, CreditCard, Layout } from 'lucide-react';

const sources = [
  {
    title: 'YouTube видео',
    desc: 'Бесконечные ролики с "успехом"',
    icon: <Youtube size={20} className="text-red-500" />,
    color: 'bg-red-50'
  },
  {
    title: 'Telegram каналы',
    desc: 'Разрозненные посты и схемы',
    icon: <Send size={20} className="text-blue-400" />,
    color: 'bg-blue-50'
  },
  {
    title: 'Дешевые курсы',
    desc: 'Брошенные на полпути',
    icon: <CreditCard size={20} className="text-green-500" />,
    color: 'bg-green-50'
  },
  {
    title: 'Чужие сторис',
    desc: 'Картинки без понимания',
    icon: <Layout size={20} className="text-purple-500" />,
    color: 'bg-purple-50'
  }
];

export const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {sources.map((item, idx) => (
        <div 
          key={idx} 
          className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-3 md:space-x-4"
        >
          <div className={`${item.color} w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0`}>
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-base md:text-lg text-gray-900 leading-tight">{item.title}</h4>
            <p className="text-gray-400 text-[11px] md:text-sm mt-0.5">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
