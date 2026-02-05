
import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Target, 
  Search, 
  Map as MapIcon, 
  HelpCircle, 
  ArrowRight,
  ClipboardList
} from 'lucide-react';

export const DiagnosticSection: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16 py-4 md:py-8">
      <div className="space-y-4 md:space-y-6 text-center md:text-left">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
          Я предлагаю тебе бесплатный разбор ситуации. <br className="hidden md:block"/><br className="hidden md:block"/>
          Это полноценная стратегическая сессия, где мы построим маршрут к точке Б.
        </p>
      </div>

      {/* What will happen on the call */}
      <div className="space-y-6 md:space-y-8">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">Что будет на созвоне:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { 
              icon: Search, 
              title: '1. Твоя ситуация', 
              desc: 'Время, опыт, ресурсы. Что уже пробовал и почему не получилось.' 
            },
            { 
              icon: Target, 
              title: '2. Поиск «дыр»', 
              desc: 'Найдем слабое звено в трафике или конверсии.' 
            },
            { 
              icon: MapIcon, 
              title: '3. Персональный план', 
              desc: 'Конкретные шаги с учетом твоих целей.' 
            },
            { 
              icon: HelpCircle, 
              title: '4. Ответы на вопросы', 
              desc: 'Про нишу, инструменты и легальность. Без воды.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm space-y-3 md:space-y-4 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-apple-blue">
                {/* Fixed: Replaced size and md:size with responsive className */}
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{item.title}</h4>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who it's for vs Not for */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* For Whom */}
        <div className="bg-green-50/50 p-8 md:p-10 rounded-3xl md:rounded-[3rem] border border-green-100 space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-green-800 flex items-center space-x-3">
            {/* Fixed: Replaced size and md:size with responsive className */}
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
            <span>Для кого:</span>
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {[
              'Готов уделять 2-3 часа в день',
              'Цель: $2000-5000/мес',
              'Хочешь готовую систему',
              'Готов действовать сейчас'
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-2 text-green-700 font-semibold text-sm md:text-base">
                <span className="shrink-0">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not For Whom */}
        <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl md:rounded-[3rem] border border-red-100 space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-red-800 flex items-center space-x-3">
            {/* Fixed: Replaced size and md:size with responsive className */}
            <XCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>Не подходит:</span>
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {[
              'Ищешь кнопку «Деньги»',
              'Не готов инвестировать время',
              'Просто «хочешь посмотреть»',
              'Не готов к переменам'
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-2 text-red-700 font-semibold text-sm md:text-base">
                <span className="shrink-0">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center space-y-8">
        <p className="text-base md:text-xl text-gray-400 italic max-w-xl mx-auto px-4 leading-relaxed">
          Я ценю время. На созвон попадают только те, кто реально настроен на результат.
        </p>
        
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-apple-blue shadow-2xl shadow-blue-50 space-y-6 md:space-y-8">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 leading-tight">Запишись за 2 минуты</h3>
          
          <div className="flex flex-col items-center space-y-6">
  <a 
    href="https://forms.gle/NwxfLApRXV1PBqzc8" // 1. Сюда вставляем ссылку
    target="_blank" // 2. (Опционально) Открыть в новой вкладке
    rel="noopener noreferrer" // 3. (Опционально) Безопасность для новой вкладки
    className="w-full md:w-auto bg-apple-blue text-white px-8 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-2xl font-black shadow-xl shadow-blue-300 hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center space-x-3 md:space-x-4 group uppercase tracking-tight"
  >
    {/* Иконки и текст остаются без изменений */}
    <ClipboardList className="w-6 h-6 md:w-7 md:h-7" />
    <span>Заполнить анкету</span>
    <ArrowRight className="group-hover:translate-x-1 transition-transform w-6 h-6 md:w-7 md:h-7" />
  </a>
  
  <p className="text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-[0.2em]">
    Стратегический созвон бесплатно
  </p>
</div>
        </div>
      </div>
    </div>
  );
};
