
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Callout } from '../components/Callout';
import { ProgressRing } from '../components/ProgressRing';
import { 
  XCircle, ShoppingBag, Terminal, UserMinus, ArrowRight, RefreshCw, AlertCircle,
  CheckCircle2, Zap, Layers, Users, MessageSquare, TrendingUp, ShieldCheck, 
  PieChart, Target, Rocket, Briefcase, Baby, GraduationCap, Star, Scale, Globe, 
  Lock, AlertTriangle, History, Cpu, Gift, PlayCircle, Globe2, ClipboardList, Clock,
  MessageCircle, Play, Info
} from 'lucide-react';

// --- Sub-components for better organization ---

interface CaseProps {
  name: string;
  age: string;
  role: string;
  icon: any;
  before: string;
  after: string;
  result: string;
  timeline: { month: string; amount: string }[];
  accentColor: string;
}

const CaseCard: React.FC<CaseProps> = ({ name, age, role, icon: Icon, before, after, result, timeline, accentColor }) => (
  <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden group mb-12">
    <div className="p-8 md:p-14 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 duration-500`} style={{ backgroundColor: accentColor }}>
            <Icon size={32} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">{name}, {age}</h3>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">{role}</p>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 flex flex-col items-center md:items-end">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Итоговый доход</span>
          <span className="text-2xl md:text-3xl font-black tracking-tighter" style={{ color: accentColor }}>{result}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-3 p-6 bg-red-50/30 rounded-3xl border border-red-50">
          <span className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
             До Клуба
          </span>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium italic">«{before}»</p>
        </div>
        <div className="space-y-3 p-6 bg-green-50/30 rounded-3xl border border-green-50">
          <span className="text-green-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
             Результат
          </span>
          <p className="text-gray-900 text-sm md:text-base leading-relaxed font-semibold">{after}</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-2">
          <span>Старт</span>
          <span>Масштабирование</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-24">
          {timeline.map((item, i) => {
            const height = Math.min(100, (parseInt(item.amount.replace(/\D/g, '')) / 5000) * 100);
            return (
              <div key={i} className="flex-1 flex flex-col items-center space-y-2 group/bar">
                <div className="opacity-0 group-hover/bar:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg mb-1 whitespace-nowrap">{item.amount}</div>
                <div className="w-full rounded-t-xl transition-all duration-1000 delay-300" style={{ height: `${height || 5}%`, backgroundColor: i === timeline.length - 1 ? accentColor : '#F2F2F7', opacity: i === timeline.length - 1 ? 1 : 0.6 + (i * 0.1) }}></div>
                <span className="text-[9px] font-bold text-gray-400">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export const LongreadTwo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 flex flex-col items-center pb-32 bg-[#FBFBFD]">
      {/* Dynamic Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/85 ios-blur border-gray-100 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-screen-lg mx-auto px-5 flex justify-between items-center w-full">
           <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-apple-blue rounded-full animate-pulse"></span>
            <span className={`font-semibold tracking-tight text-xs md:text-sm transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>Руководство: от Попытки к Доходу</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Статья 2</div>
        </div>
      </header>

      <main className="w-full">
        
        {/* --- SECTION 1: INTRODUCTION --- */}
        <Hero 
          time="РАЗДЕЛ 1: ВСТУПЛЕНИЕ" 
          title="Мысли в 3 часа ночи" 
          subtitle="Ты уже пробовал. Радовался картинкам, но денег в кармане не прибавилось. Давай разберемся, почему." 
        />
        
        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-24 md:space-y-40">
          
          <section className="space-y-8 animate-fade-in">
             <div className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium space-y-6">
                <p>Ты уже видел эти истории. Смотрел видео, разбирался с Midjourney, может даже купил курс за пару тысяч рублей.</p>
                <p className="text-gray-900 font-bold underline decoration-apple-blue decoration-2 underline-offset-4">Стоп. Давай кое-что проясним прямо сейчас.</p>
                <p>Если у тебя не получилось — это не значит, что ты тупой. Тебе просто дали неправильную карту. Тебя научили генерировать картинки, но <span className="text-apple-blue font-black italic">не научили превращать их в деньги.</span></p>
             </div>
          </section>

          {/* --- SECTION 2: THE PROBLEM --- */}
          <section className="space-y-16">
            <div className="space-y-4">
               <span className="text-red-500 font-black text-[11px] uppercase tracking-[0.2em] bg-red-50 px-3 py-1 rounded-full">Раздел 2: Проблема</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Почему твои прошлые попытки провалились</h2>
            </div>

            {/* Problem 1 */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
               <div className="flex items-center gap-4 text-red-500 font-black text-xs uppercase tracking-widest">
                  <AlertCircle size={18} />
                  Причина №1: Курс-пустышка за 2000 рублей
               </div>
               <p className="text-gray-600 text-lg leading-relaxed">
                  Когда ты платишь за ужин в кафе — твой мозг не воспринимает это как бизнес-инвестицию. Нет ответственности ни с твоей стороны, ни со стороны автора.
               </p>
               <div className="flex items-center gap-4 bg-red-50/50 p-6 rounded-3xl">
                  <ProgressRing percentage={80} color="#EF4444" />
                  <p className="text-sm font-bold text-red-900">80% людей даже не досматривают такие курсы до конца.</p>
               </div>
            </div>

            {/* Problem 2 & 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-4">
                  <h4 className="font-black text-gray-900">Учат делать, а не продавать</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Создавать контент и зарабатывать на нем — это разные навыки. Курсы учат «печь торты», но не учат их продавать.</p>
               </div>
               <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-4">
                  <h4 className="font-black text-gray-900">Тебя бросили после покупки</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Автор получил твои деньги и переключился на следующего. Твой результат его не волнует. Это модель «продал и забыл».</p>
               </div>
            </div>
          </section>

          {/* --- SECTION 3: NEW APPROACH --- */}
          <section className="space-y-16">
            <div className="space-y-4">
               <span className="text-apple-blue font-black text-[11px] uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">Раздел 3: Новый подход</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Окупаемый порог входа и системность</h2>
            </div>

            <Callout variant="primary" icon="quote">
               Когда ты вкладываешь серьезную сумму — мозг включает режим выживания: «Я должен это окупить». И ты начинаешь внедрять.
            </Callout>

            <div className="bg-gray-900 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-apple-blue/20 to-transparent"></div>
               <div className="relative z-10 space-y-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                       <div className="text-6xl md:text-8xl font-black tracking-tighter">$549</div>
                       <div className="text-blue-300 font-bold text-lg uppercase tracking-widest">Разовая инвестиция в AI Model Club</div>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                       Это <span className="text-white font-black">27% от твоего первого месяца</span> при цели в $2000. Окупаемость достигается за 7-10 дней системной работы.
                    </p>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { t: "Старт и подготовка", i: Target },
                 { t: "Создание уникальной модели", i: Rocket },
                 { t: "Генерация AI-видео", i: Layers },
                 { t: "Продажи и монетизация", i: Zap },
                 { t: "Трафик из USA", i: Globe2 },
                 { t: "Масштабирование до $5000", i: TrendingUp },
               ].map((m, i) => (
                 <div key={i} className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-apple-blue"><m.i size={20} /></div>
                    <span className="font-bold text-gray-900">{m.t}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* --- SECTION 4: CASE STUDIES --- */}
          <section className="space-y-16">
            <div className="space-y-4">
               <span className="text-purple-600 font-black text-[11px] uppercase tracking-[0.2em] bg-purple-50 px-3 py-1 rounded-full">Раздел 4: Доказательство</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Кейсы тех, кто «дожал»</h2>
            </div>

            <CaseCard 
               name="Андрей" age="28 лет" role="Экс-менеджер" icon={Briefcase} accentColor="#007AFF"
               before="Зарплата 70к. Слил 25к на бесполезные курсы. Ненавидел понедельники."
               after="Уволился. Работает по 3-4 часа в день. Стабильно растет."
               result="$3,200/мес"
               timeline={[{month: "M1", amount: "$0"}, {month: "M2", amount: "$200"}, {month: "M3", amount: "$800"}, {month: "M4", amount: "$3200"}]}
            />

            <CaseCard 
               name="Марина" age="34 года" role="Мама в декрете" icon={Baby} accentColor="#FF2D55"
               before="Пыталась сама 4 месяца. Доход $47. Думала, что талант нужен."
               after="Перестроила воронку за месяц. Сменила подход к контенту."
               result="$2,100/мес"
               timeline={[{month: "M1", amount: "$47"}, {month: "M2", amount: "$900"}, {month: "M3", amount: "$2100"}]}
            />

            <CaseCard 
               name="Дима" age="23 года" role="Студент" icon={GraduationCap} accentColor="#5856D6"
               before="Подрабатывал курьером, денег вечно не хватало. Боялся прогореть."
               after="Бросил курьерку. Зарабатывает больше родителей. Свободен."
               result="$4,700/мес"
               timeline={[{month: "M1", amount: "$300"}, {month: "M3", amount: "$1200"}, {month: "M5", amount: "$4700"}]}
            />
          </section>

          {/* --- SECTION 5: LEGALITY --- */}
          <section className="space-y-16">
            <div className="space-y-4">
               <span className="text-green-600 font-black text-[11px] uppercase tracking-[0.2em] bg-green-50 px-3 py-1 rounded-full">Раздел 5: Безопасность</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Это вообще легально?</h2>
            </div>

            <div className="bg-white p-8 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-xl space-y-10 relative overflow-hidden">
               <div className="absolute -right-10 -top-10 text-gray-50 opacity-10"><Scale size={200} /></div>
               <div className="relative z-10 space-y-6">
                 <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                   AI-модель — это <span className="text-gray-900 font-bold underline decoration-apple-blue decoration-2 underline-offset-4">интеллектуальная собственность.</span> Ты продаешь цифровой продукт. Платформы типа Fanvue официально сертифицируют таких креаторов.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-500"><ShieldCheck className="text-green-500" /> Никакого обмана реальных лиц</div>
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-500"><ShieldCheck className="text-green-500" /> Официальные выплаты на карты</div>
                 </div>
               </div>
            </div>
          </section>

          {/* --- SECTION 6: CTA --- */}
          <section className="space-y-16 text-center">
            <div className="space-y-4">
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Сейчас у тебя два варианта</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 space-y-6 opacity-60">
                  <h4 className="text-xl font-black">1. Закрыть статью</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Продолжить делать то же самое. Покупать курсы за 2000₽ и надеяться, что в этот раз точно получится. (Не получится).</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-white border-2 border-apple-blue shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-apple-blue"><Zap size={100} /></div>
                  <h4 className="text-xl font-black">2. Получить план</h4>
                  <p className="text-sm text-gray-900 font-semibold leading-relaxed">Разобраться, что конкретно тебе мешает зарабатывать — и получить пошаговую карту, как это исправить.</p>
               </div>
            </div>

            <div className="bg-white p-10 md:p-20 rounded-[4rem] border border-gray-100 shadow-2xl shadow-gray-200/40 space-y-10">
               <div className="space-y-4">
                  <h3 className="text-2xl md:text-4xl font-black">Бесплатная диагностика</h3>
                  <p className="text-gray-500 font-medium">Это не продающий звонок. Это полноценный разбор ситуации под микроскопом.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    { t: "Разбор опыта", d: "Найдем корень проблемы.", i: Search },
                    { t: "Поиск «дыр»", d: "Где теряешь деньги.", i: Target },
                    { t: "Личная карта", d: "План под твою ситуацию.", i: MapIcon },
                    { t: "Все вопросы", d: "Про ниши и риски.", i: HelpCircle }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-apple-blue"><item.i size={20} /></div>
                       <div><h5 className="font-bold text-gray-900">{item.t}</h5><p className="text-xs text-gray-500">{item.d}</p></div>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* --- SECTION 7: BONUS --- */}
          <section className="space-y-16">
            <div className="space-y-4 text-center">
               <span className="text-amber-600 font-black text-[11px] uppercase tracking-[0.2em] bg-amber-50 px-3 py-1 rounded-full">Раздел 7: Бонус</span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Что ты получишь сразу</h2>
            </div>

            <div className="bg-gray-900 text-white rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden shadow-2xl group">
               <div className="absolute -right-20 -top-20 opacity-10 group-hover:scale-110 transition-transform duration-[2s]"><PlayCircle size={400} /></div>
               <div className="relative z-10 space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                     <div className="w-16 h-16 bg-apple-blue rounded-2xl flex items-center justify-center shadow-lg"><Gift size={32} /></div>
                     <div className="text-center md:text-left"><h3 className="text-2xl md:text-3xl font-black">Закрытый видео-урок</h3><p className="text-blue-300 font-bold uppercase tracking-widest text-[10px] mt-1">«Сегментация: кому продавать, чтобы платили»</p></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                     {[
                       { t: "Топ-сегменты", d: "Кто платит больше всех.", i: Star },
                       { t: "Рынок USA", d: "Как выйти на чеки в 5-10 раз выше.", i: Globe2 }
                     ].map((point, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><point.i size={20} className="text-blue-400" /></div>
                           <div><h5 className="font-bold">{point.t}</h5><p className="text-gray-400 text-sm">{point.d}</p></div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="text-center space-y-12 pt-10">
               <div className="space-y-6">
                  <div className="flex flex-col items-center gap-2">
                     <div className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                        <Clock size={14} /> Осталось 3 места на эту неделю
                     </div>
                     <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-apple-blue w-[60%] animate-pulse"></div>
                     </div>
                  </div>
                  <a 
                     href="https://t.me/your_form_link" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center space-x-6 bg-apple-blue text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black text-xl md:text-3xl shadow-2xl hover:bg-blue-600 transition-all active:scale-95 group"
                  >
                     <ClipboardList size={32} />
                     <span>ЗАПИСАТЬСЯ НА ДИАГНОСТИКУ</span>
                     <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                  </a>
               </div>
               <p className="text-gray-400 font-medium italic">Не откладывай на «потом». «Потом» — это место, где живут нереализованные планы.</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="w-full bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-[760px] mx-auto px-6 text-center text-gray-300 text-[10px] font-bold uppercase tracking-widest">
          AI MODEL BUSINESS GUIDE • THE COMPLETE PATH
        </div>
      </footer>
    </div>
  );
};

// Re-defining Search, MapIcon, HelpCircle for the component scope
const Search = (props: any) => <Terminal {...props} />;
const MapIcon = (props: any) => <TrendingUp {...props} />;
const HelpCircle = (props: any) => <MessageCircle {...props} />;
