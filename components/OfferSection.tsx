
import React from 'react';
import { Callout } from './Callout';
import { CheckCircle2, MessageSquare, Layers, Users, Zap, RefreshCw, ArrowRight } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16 py-4 md:py-8">
      <div className="space-y-6 md:space-y-8">
        <p className="text-[17px] md:text-xl text-gray-600 leading-relaxed text-center md:text-left">
          Ты только что получил карту. Пошаговый маршрут от нуля до $5000 в месяц. <br /><br />
          Теперь честный вопрос: что ты будешь с ней делать? Я спрашиваю серьёзно. Потому что знаю статистику.
        </p>

        <Callout variant="primary" icon="quote">
          95% людей, которые прочитают эту статью, не сделают ничего. Закроют вкладку и вернутся к обычной жизни.
        </Callout>

        <p className="text-[17px] md:text-xl text-gray-600 leading-relaxed text-center md:text-left">
          Не потому что они ленивые. А потому что одной карты недостаточно. Нужна энергия внедрения.
        </p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4 md:space-y-6 text-center md:text-left">
        <h3 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">Почему информация не работает?</h3>
        <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
          Информации — океан. Но ценность появляется, когда ты её внедряешь. А для этого нужна система и фокус.
        </p>
        <div className="bg-apple-blue/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-apple-blue/10 italic text-apple-blue font-medium text-sm md:text-base">
          «Когда ты инвестируешь — включается другой режим. Ты начинаешь относиться к этому как к бизнесу. Внедряешь. Действуешь. Получаешь результат».
        </div>
      </div>

      <div className="space-y-6 md:space-y-8">
        <h3 className="text-xl md:text-3xl font-bold tracking-tight text-center md:text-left">Давай посчитаем</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] space-y-2 md:space-y-4">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Инвестиция</span>
            <div className="text-3xl md:text-5xl font-black">$549</div>
            <p className="text-gray-500 text-xs">Продвинутый тариф AI Model Club</p>
          </div>
          <div className="bg-apple-blue text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] space-y-2 md:space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 md:opacity-20">
               <Zap className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
            </div>
            <span className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Окупаемость</span>
            <div className="text-3xl md:text-5xl font-black">~7 дней</div>
            <p className="text-blue-100 text-xs">При выходе на результат инвестиция окупается за неделю.</p>
          </div>
        </div>
      </div>
    </div>
  );
};