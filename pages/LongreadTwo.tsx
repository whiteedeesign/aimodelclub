
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Callout } from '../components/Callout';
import { ProgressRing } from '../components/ProgressRing';
// Added missing PieChart and RefreshCw imports and removed the local override declarations at the bottom to fix conflicts
import { 
  XCircle, ArrowRight, AlertCircle, CheckCircle2, Zap, Layers, 
  TrendingUp, ShieldCheck, Target, Rocket, Briefcase, Baby, 
  GraduationCap, Star, Scale, Globe, Lock, AlertTriangle, 
  History, Cpu, Gift, PlayCircle, Globe2, ClipboardList, Clock,
  MessageCircle, Search, Map as MapIcon, HelpCircle, Users, Info,
  PieChart, RefreshCw
} from 'lucide-react';

// --- Sub-components for consistency ---

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
  fullText: string;
}

const CaseCard: React.FC<CaseProps> = ({ name, age, role, icon: Icon, before, after, result, timeline, accentColor, fullText }) => (
  <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden group mb-12">
    <div className="p-8 md:p-14 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-white shadow-lg`} style={{ backgroundColor: accentColor }}>
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

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{fullText}</p>
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
      {/* Header */}
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
          title="«Мысли в 3 часа ночи»" 
          subtitle="Ты уже пробовал. Радовался результатам, но банковское приложение показывало всё те же цифры. Стоп. Давай кое-что проясним." 
        />
        
        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-24 md:space-y-40">
          
          <section className="space-y-10 animate-fade-in">
             <div className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium space-y-10">
                <p>Ты уже пробовал.</p>
                <p>Смотрел видео про нейросети. Разбирался с Midjourney или Stable Diffusion. Может, даже купил какой-то курс за пару тысяч рублей.</p>
                <p>Генерировал картинки. Радовался результатам. Показывал друзьям: «Смотри, как круто нейронка рисует!»</p>
                <p>А потом открывал банковское приложение — и там всё те же цифры. Ничего не изменилось. Знакомо?</p>
                
                <Callout variant="secondary" icon="quote">
                  <div className="space-y-4 text-left">
                    <p>Я постоянно получаю сообщения от таких людей. Они пишут примерно одно и то же:</p>
                    <p>— «Я уже пробовал ChatGPT, прикольно, но денег в кармане не прибавилось».</p>
                    <p>— «Купил курс по AI — там одна вода. Общие слова, никакой конкретики».</p>
                    <p>— «Умею генерировать картинки, но не понимаю, как на этом зарабатывать».</p>
                    <p className="font-bold text-gray-900">И самое болезненное: «Наверное, это просто не моё. Или я что-то делаю не так».</p>
                  </div>
                </Callout>

                <div className="space-y-8 pt-6">
                  <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter">Стоп.</h2>
                  <p>Давай кое-что проясним прямо сейчас.</p>
                  <p>Если ты пробовал и не получилось — это не значит, что ты тупой. Не значит, что у тебя «не те руки». Не значит, что заработок на AI-моделях — это миф для избранных.</p>
                  <p className="p-8 md:p-12 bg-apple-blue/5 border-l-4 border-apple-blue font-bold text-apple-blue rounded-r-3xl leading-relaxed">
                    Это значит только одно: тебе дали неправильную карту. Тебя научили генерировать картинки. Но не научили превращать их в деньги. Тебе показали инструменты. Но не показали систему. Тебе продали «курс». Но не дали бизнес-модель.
                  </p>
                  <p>И это не твоя вина. Это вина тех, кто продаёт теорию под видом практики.</p>
                  <p>Сейчас я объясню, почему твои прошлые попытки не сработали. И что нужно сделать по-другому, чтобы наконец увидеть деньги на счету.</p>
                </div>
             </div>
          </section>

          {/* --- SECTION 2: THE PROBLEM --- */}
          <section className="space-y-16">
            <div className="space-y-6">
               <span className="text-red-500 font-black text-[11px] uppercase tracking-[0.2em] bg-red-50 px-3 py-1 rounded-full">Раздел 2: Проблема</span>
               <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">Почему твои прошлые попытки провалились</h2>
               <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">Давай разберём по косточкам, что пошло не так.</p>
               <p className="text-lg text-gray-500">Я общался с сотнями людей, которые «пробовали, но не получилось». И вижу три главные причины, почему они застряли без денег.</p>
            </div>
            
            <div className="space-y-24">
              {/* Reason 1 */}
              <div className="space-y-8">
                 <h3 className="text-2xl md:text-3xl font-black text-gray-900">Причина №1: Ты купил «курс-пустышку» за 2000 рублей</h3>
                 <p className="text-lg text-gray-600 leading-relaxed">Признайся честно — сколько таких курсов уже пылится у тебя в закладках?</p>
                 <ul className="space-y-2 text-gray-700 font-bold italic border-l-2 border-gray-200 pl-6">
                    <li>«Полный гайд по Midjourney — всего 1990₽!»</li>
                    <li>«Секреты нейросетей — доступ навсегда за 2490₽!»</li>
                    <li>«Научись генерировать AI-контент за 3 дня!»</li>
                 </ul>
                 <p className="text-lg text-gray-600">Ты покупал. Может, даже не один раз. И что в итоге?</p>
                 <p className="text-lg text-gray-600">В лучшем случае — базовая информация, которую можно бесплатно найти на YouTube за полчаса. В худшем — откровенное старьё, которое устарело ещё до того, как ты оплатил.</p>
                 <div className="bg-red-50/50 p-8 md:p-14 rounded-[3rem] border border-red-50 flex flex-col md:flex-row items-center gap-10">
                    <div className="shrink-0 text-center space-y-4">
                       <ProgressRing percentage={80} color="#EF4444" />
                       <span className="text-[10px] font-black uppercase text-red-500 tracking-widest block">БРОСАЮТ ОБУЧЕНИЕ</span>
                    </div>
                    <div className="space-y-6">
                       <h4 className="text-xl font-bold text-red-900">Главная проблема — в цене.</h4>
                       <p className="text-red-800/80 leading-relaxed">Когда ты платишь 2000 рублей — твой мозг не воспринимает это как серьёзную инвестицию. Это цена ужина в кафе. Не жалко забить и забыть. Поэтому 80% людей даже не досматривают такие курсы до конца. А те, кто досматривают — не внедряют. Потому что нет ни поддержки, ни обратной связи, ни ответственности.</p>
                    </div>
                 </div>
              </div>

              {/* Reason 2 */}
              <div className="space-y-8">
                 <h3 className="text-2xl md:text-3xl font-black text-gray-900">Причина №2: Тебя научили генерировать, но не научили продавать</h3>
                 <p className="text-lg text-gray-600 leading-relaxed">Это самая коварная ловушка. Ты прошёл курс. Освоил промпты. Научился делать красивые картинки. Может, даже видео собираешь.</p>
                 <p className="text-lg text-gray-600">А дальше что? Сидишь и смотришь на папку с сотней изображений. Они классные. Но денег не приносят.</p>
                 <Callout variant="primary" icon="info">
                    Потому что создавать контент и зарабатывать на нём — это два совершенно разных навыка. Это как научиться печь торты, но не знать, как их продавать. Торты есть. Покупателей нет.
                 </Callout>
                 <p className="text-lg text-gray-600">Большинство курсов учат именно этому — «печь торты». Показывают инструменты, промпты, настройки. Но молчат о главном:</p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Где брать аудиторию, которая готова платить?", "Как выстроить воронку продаж?", "Как общаться с подписчиками, чтобы они покупали?", "Как масштабировать доход с $500 до $5000?"].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl font-bold text-gray-800 shadow-sm">
                         <XCircle className="text-red-400 shrink-0" size={20} />
                         <span className="text-sm">{t}</span>
                      </li>
                    ))}
                 </ul>
                 <p className="text-lg text-gray-600 font-semibold italic">Без этого твои красивые картинки так и останутся на жёстком диске. Мёртвым грузом.</p>
              </div>

              {/* Reason 3 */}
              <div className="space-y-8">
                 <h3 className="text-2xl md:text-3xl font-black text-gray-900">Причина №3: Тебя бросили после покупки</h3>
                 <p className="text-lg text-gray-600 leading-relaxed">Вспомни, что происходило после оплаты того курса за 2000 рублей. Тебе скинули ссылку на личный кабинет. Может, добавили в какой-то чат, где никто не отвечает. И всё. Дальше — сам.</p>
                 <div className="bg-white p-8 md:p-14 rounded-[3rem] border border-gray-100 shadow-xl space-y-6">
                    <p className="text-xl font-bold text-gray-900">Это называется «продал и забыл».</p>
                    <p className="text-gray-600 leading-relaxed">Автор курса получил твои деньги и переключился на следующего покупателя. Твой результат его не волнует. Его бизнес-модель — продать как можно больше дешёвых продуктов. А не довести тебя до денег. Поэтому ты остался один на один со своими вопросами. И постепенно забил.</p>
                 </div>
              </div>
            </div>

            {/* Section 2 Outro */}
            <div className="bg-gray-900 text-white p-10 md:p-20 rounded-[4rem] space-y-10 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><AlertTriangle size={300} /></div>
               <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight">Итог: система сломана</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">Дешёвые курсы создают иллюзию доступности. «Всего 2000 рублей — и ты научишься зарабатывать!» На деле — это кассовая яма.</p>
                  <p className="text-xl text-gray-100 font-bold leading-relaxed border-l-4 border-red-500 pl-8">
                    Ты платишь мало → относишься несерьёзно → не внедряешь → не получаешь результат → думаешь, что проблема в тебе → покупаешь следующий дешёвый курс. Замкнутый круг.
                  </p>
                  <p className="text-lg text-gray-400">Я сам в нём крутился. Слил деньги на три таких «обучения», прежде чем понял, в чём подвох. Подвох — в самой модели. Дешёвый продукт не может дать дорогой результат.</p>
                  <p className="text-2xl font-black text-apple-blue italic">Сейчас объясню, как работает другой подход.</p>
               </div>
            </div>
          </section>

          {/* --- SECTION 3: NEW APPROACH --- */}
          <section className="space-y-16 pt-24 border-t border-gray-100">
            <div className="space-y-6">
               <span className="text-apple-blue font-black text-[11px] uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">Раздел 3: Новый подход</span>
               <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">Окупаемый порог входа и системность</h2>
               <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">Окей, с проблемой разобрались. Теперь давай поговорим о решении.</p>
               <p className="text-lg text-gray-500 leading-relaxed">Почему одни люди годами крутятся в колесе дешёвых курсов и не зарабатывают — а другие выходят на $2000-5000 в месяц за пару месяцев? Разница не в таланте. Разница — в подходе.</p>
            </div>

            <div className="space-y-12">
               <div className="bg-white p-8 md:p-16 rounded-[3.5rem] border border-gray-100 shadow-xl space-y-8">
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900">Принцип «Окупаемого порога входа»</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Звучит сложно, но суть простая. Когда ты платишь за что-то серьёзные деньги — ты начинаешь относиться к этому серьёзно. Это психология. Мозг считает: «Я вложил $549. Я не могу позволить себе НЕ получить результат. Иначе это потеря».</p>
                  <p className="text-lg text-gray-600">И ты начинаешь действовать. Смотришь уроки до конца. Внедряешь. Задаёшь вопросы. Доделываешь, когда хочется бросить. Потому что на кону — твои деньги. И ты хочешь их вернуть. С прибылью.</p>
                  <div className="p-8 bg-apple-blue text-white rounded-[2rem] shadow-xl">
                    <p className="font-bold text-xl leading-relaxed">Это работает в обе стороны. Когда автор курса берёт с тебя $549 — он тоже не может позволить себе дать тебе «воду». Потому что ты придёшь и спросишь: «Где мой результат?»</p>
                  </div>
                  <p className="text-gray-500 font-medium italic">Дешёвый продукт = никакой ответственности. Дорогой продукт = обоюдная ответственность.</p>
               </div>

               <div className="bg-gray-900 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-apple-blue/20 to-transparent"></div>
                  <div className="relative z-10 space-y-12">
                    <h3 className="text-2xl md:text-4xl font-black">Почему $549 — это не «дорого»</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                       <div className="space-y-6">
                          <div className="text-6xl md:text-9xl font-black tracking-tighter">$549</div>
                          <div className="text-blue-300 font-bold text-lg uppercase tracking-widest">Инвестиция в твой новый доход</div>
                       </div>
                       <div className="space-y-8">
                          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">Давай посчитаем. Ты хочешь выйти на $2000 в месяц. $549 — это 27% от одного месяца твоего будущего дохода. Вложение окупается в первый же месяц работы. А дальше — чистая прибыль.</p>
                          <div className="space-y-4">
                             <p className="text-lg text-gray-400">Сколько ты уже потратил на курсы, которые не сработали? 2000 там, 5000 на какой-то интенсив... Набежало тысяч 20?</p>
                             <p className="text-xl text-white font-black underline decoration-red-500 decoration-4">Эти деньги ушли в пустоту.</p>
                             <p className="text-xl text-white font-black underline decoration-green-500 decoration-4">$549 один раз — дешевле, чем бесконечная карусель курсов.</p>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="space-y-16">
               <div className="text-center space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900">Что ты получаешь в AI Model Club</h3>
                  <p className="text-xl text-gray-500 italic">Это не «ещё один курс». Это закрытый клуб с полной системой.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: 0, title: "Старт и подготовка", desc: "Чтобы ты не тыкался вслепую", icon: Target },
                    { id: 1, title: "Создание уникальной AI-модели", desc: "Твой актив, которого больше ни у кого нет", icon: Rocket },
                    { id: 2, title: "Генерация видео", desc: "Контент, который продаёт в разы лучше картинок", icon: Layers },
                    { id: 3, title: "Продажи и монетизация", desc: "Как превращать подписчиков в деньги", icon: Zap },
                    { id: 4, title: "NSFW-контент", desc: "Специфика ниши, о которой не говорят в открытую", icon: ShieldCheck },
                    { id: 5, title: "Трафик USA", desc: "Где брать платёжеспособную аудиторию", icon: Globe2 },
                    { id: 6, title: "Продажи и коммуникация", desc: "Скрипты, воронки, работа с возражениями", icon: MessageCircle },
                    { id: 7, title: "Масштабирование", desc: "Как вырасти с $2000 до $5000 и выше", icon: PieChart },
                  ].map((m) => (
                    <div key={m.id} className="flex gap-6 p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:border-apple-blue transition-colors group">
                       <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-apple-blue group-hover:text-white transition-all shrink-0">
                          <m.icon size={28} />
                       </div>
                       <div className="space-y-1">
                          <span className="text-[10px] font-black text-apple-blue uppercase tracking-widest">Раздел {m.id}</span>
                          <h4 className="font-black text-gray-900 text-lg md:text-xl">{m.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="bg-white p-10 md:p-20 rounded-[4rem] border border-gray-100 shadow-sm space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900">Но главное — не материалы</h3>
                    <p className="text-xl text-gray-500 leading-relaxed font-medium">Материалы можно найти. Где-то бесплатно, где-то за копейки. Главное — <span className="text-apple-blue underline decoration-4 underline-offset-8">система и поддержка.</span></p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                       { t: "Закрытый чат", d: "Люди, которые идут тем же путём. Обмен опытом, связи, мотивация. Ты не один.", i: Users },
                       { t: "Еженедельные разборы", d: "Реальные кейсы, ошибки, находки. Материалы обновляются — ты всегда в курсе того, что работает сегодня.", i: RefreshCw },
                       { t: "Моя поддержка", d: "Застрял — написал — получил ответ. Не через неделю, не «гугли сам». Конкретная помощь.", i: HelpCircle }
                     ].map((item, i) => (
                       <div key={i} className="space-y-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-apple-blue"><item.i size={24} /></div>
                          <h5 className="font-bold text-lg text-gray-900 leading-tight">{item.t}</h5>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
                       </div>
                     ))}
                  </div>
                  <p className="text-xl font-bold text-gray-900 pt-8 border-t border-gray-100">Это то, чего нет в дешёвых курсах. И именно это даёт результат.</p>
               </div>
            </div>
          </section>

          {/* --- SECTION 4: CASE STUDIES --- */}
          <section className="space-y-16 pt-24 border-t border-gray-100">
            <div className="space-y-6">
               <span className="text-purple-600 font-black text-[11px] uppercase tracking-[0.2em] bg-purple-50 px-3 py-1 rounded-full">Раздел 4: Доказательство</span>
               <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">Кейсы тех, кто «дожал»</h2>
               <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">«Теория — это хорошо. Но ты наверняка думаешь: А есть ли реальные примеры?»</p>
            </div>

            <CaseCard 
               name="Андрей" age="28 лет" role="Из найма в бизнес" icon={Briefcase} accentColor="#007AFF"
               before="Менеджер по продажам, зарплата 70к. Слил 25к на бесполезные курсы."
               after="Получил систему. Уволился. Работает по 3-4 часа в день из дома."
               result="$3,200/мес"
               timeline={[{month: "M1", amount: "$0"}, {month: "M2", amount: "$200"}, {month: "M3", amount: "$800"}, {month: "M4", amount: "$3200"}]}
               fullText={`Андрей работал менеджером по продажам. Зарплата — 70 000 рублей. Ненавидел свою работу, но не видел альтернативы. До AI Model Club он уже пробовал «зарабатывать в интернете». Купил два курса по фрилансу, один по SMM. Потратил около 25 000 рублей. Результат — ноль.\n\nКогда пришёл к нам, честно сказал: «Я уже не верю, что у меня получится. Но попробую последний раз». Андрей получил систему. Не куски информации, а пошаговый алгоритм: что делать первым шагом, что вторым, что третьим.`}
            />

            <CaseCard 
               name="Марина" age="34 года" role="Мама двоих детей" icon={Baby} accentColor="#FF2D55"
               before="Пыталась сама 4 месяца. Доход $47. Думала, что талант нужен."
               after="Перестроила воронку за месяц. Сменила подход к контенту."
               result="$2,100/мес"
               timeline={[{month: "M1", amount: "$47"}, {month: "M2", amount: "$900"}, {month: "M3", amount: "$2100"}]}
               fullText={`Марина — мама двоих детей. Искала способ зарабатывать из дома, пока дети в школе. До нас она уже пыталась делать AI-контент самостоятельно. Результат за 4 месяца самостоятельной работы — $47. Марина была уверена, что «это не для неё». Когда разобрали её ситуацию — стало понятно: проблема не в ней. Она делала контент, но не понимала, как его продавать.`}
            />

            <CaseCard 
               name="Дима" age="23 года" role="Студент / Экс-курьер" icon={GraduationCap} accentColor="#5856D6"
               before="Подрабатывал курьером, денег вечно не хватало. Боялся вложиться."
               after="Бросил курьерку. Зарабатывает больше родителей. Свободен."
               result="$4,700/мес"
               timeline={[{month: "M1", amount: "$300"}, {month: "M3", amount: "$1200"}, {month: "M5", amount: "$4700"}]}
               fullText={`Дима — студент. Подрабатывал курьером, денег вечно не хватало. Главный страх был: «У меня нет денег на ошибки». Мы созвонились, разобрали ситуацию. Первые два месяца были тяжёлыми. Доход — около $300-400. Были моменты, когда хотел бросить. Но он продолжал. Задавал вопросы в чате. Получал обратную связь. На пятый месяц вышел на $4700.`}
            />

            <div className="bg-gray-900 text-white p-10 md:p-20 rounded-[4rem] space-y-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Star size={300} /></div>
               <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl md:text-5xl font-black">Что общего у этих людей?</h3>
                  <p className="text-xl text-gray-400">Они не гении. Они просто:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {["Получили работающую систему", "Следовали ей шаг за шагом", "Не сдавались, когда было сложно", "Использовали поддержку"].map((t, i) => (
                       <li key={i} className="flex items-center gap-4 text-xl font-bold"><CheckCircle2 className="text-apple-blue" size={24} /> {t}</li>
                     ))}
                  </ul>
                  <p className="text-xl font-medium italic border-t border-white/10 pt-10 text-gray-400">«Это не кнопка бабло. Это работа. По 3-4 часа в день. По выверенного алгоритму. Но это работа, которая даёт результат. В отличие от найма, где ты можешь пахать годами — и ничего не изменится».</p>
               </div>
            </div>
          </section>

          {/* --- SECTION 5: LEGALITY --- */}
          <section className="space-y-16 pt-24 border-t border-gray-100">
            <div className="space-y-6">
               <span className="text-green-600 font-black text-[11px] uppercase tracking-[0.2em] bg-green-50 px-3 py-1 rounded-full">Раздел 5: Безопасность</span>
               <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">Это вообще легально?</h2>
            </div>

            <div className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium space-y-8">
               <p>Я понимаю, почему ты спрашиваешь. В интернете полно «схем заработка», которые заканчиваются блокировками. Поэтому давай разберём этот вопрос честно и без понтов.</p>
               
               <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-xl space-y-10 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 text-gray-50 opacity-10"><Scale size={240} /></div>
                  <div className="relative z-10 space-y-8">
                    <h4 className="text-2xl md:text-3xl font-black text-gray-900">Что такое AI-модель для закона?</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">Ты создаёшь цифрового персонажа с помощью нейросетей. Этот персонаж не существует в реальности. Это не фото реального человека. Это сгенерированное изображение — <span className="text-gray-900 font-bold underline decoration-apple-blue decoration-2 underline-offset-4">интеллектуальная собственность.</span> Затем ты создаёшь контент и продаёшь его на платформах. Никакого обмана. Никакого мошенничества. Ты продаёшь цифровой продукт. Люди покупают цифровой продукт.</p>
                  </div>
               </div>

               <div className="space-y-8">
                  <h4 className="text-2xl md:text-3xl font-black text-gray-900">Платформы разрешают AI?</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Да. И это важный момент. Платформы типа Fanvue, Fansly и другие официально работают с AI-креаторами. Это не лазейка, которую «пока не прикрыли». Это часть их бизнес-модели. Им это выгодно.</p>
                  <p className="text-lg text-gray-500 italic">Единственное правило: не выдавать AI за реального человека в контексте мошенничества. Мы продаём контент, а не строим отношения под чужой личиной.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 space-y-6">
                     <h5 className="font-black text-red-500 uppercase tracking-widest text-xs">А как же блокировки?</h5>
                     <p className="text-sm text-gray-600 leading-relaxed">Блокировки бывают. Но не из-за того, что это «нелегально». Блокируют за нарушение правил конкретной платформы (спам, хештеги). Это решаемо. В клубе мы разбираем, как минимизировать риски. Если аккаунт заблокировали — создаёшь новый и продолжаешь.</p>
                  </div>
                  <div className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-50 space-y-6">
                     <h5 className="font-black text-blue-500 uppercase tracking-widest text-xs">Устойчивость в 2025</h5>
                     <p className="text-sm text-gray-600 leading-relaxed">Рынок 18+ существует десятилетия и никуда не денется. AI-технологии развиваются, качество растет. Платформы заинтересованы в креаторах. Это полноценная бизнес-модель с понятной экономикой.</p>
                  </div>
               </div>

               <div className="bg-red-50 p-10 md:p-14 rounded-[3.5rem] border border-red-100 text-center space-y-8">
                  <div className="flex justify-center text-red-500"><AlertTriangle size={64} /></div>
                  <h3 className="text-3xl font-black text-red-900">Главный риск — в тебе</h3>
                  <div className="space-y-4 text-red-800/80 font-bold text-lg">
                     <p>— Что ты начнёшь и бросишь через две недели.</p>
                     <p>— Что будешь искать «идеальный момент» вместо действий.</p>
                     <p>— Что снова купишь дешёвый курс и снова получишь ноль.</p>
                  </div>
                  <p className="text-red-900 font-black italic">Это реальные риски. А не мифические «проблемы с законом».</p>
               </div>
            </div>
          </section>

          {/* --- SECTION 6: CTA --- */}
          <section className="space-y-16 pt-24 border-t border-gray-100">
            <div className="space-y-6">
               <span className="text-apple-blue font-black text-[11px] uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">Раздел 6: Решение</span>
               <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">Приглашение на диагностическую сессию</h2>
               <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">Сейчас у тебя два варианта.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100 space-y-6 opacity-60">
                  <h4 className="text-2xl font-black">Вариант первый</h4>
                  <p className="text-gray-500 leading-relaxed">Закрыть эту статью и продолжить делать то, что делал раньше. Покупать курсы за 2000 рублей. Смотреть YouTube. Надеяться на чудо. <span className="font-bold text-red-500">Спойлер: не получится.</span></p>
               </div>
               <div className="p-12 rounded-[3.5rem] bg-white border-2 border-apple-blue shadow-2xl space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-apple-blue group-hover:scale-110 transition-transform"><Zap size={100} /></div>
                  <h4 className="text-2xl font-black text-gray-900">Вариант второй</h4>
                  <p className="text-gray-900 font-bold leading-relaxed">Разобраться, что конкретно тебе мешает зарабатывать — и получить план, как это исправить. Я предлагаю бесплатную диагностику твоей ситуации.</p>
               </div>
            </div>

            <div className="bg-white p-10 md:p-20 rounded-[4rem] border border-gray-100 shadow-2xl shadow-gray-200/40 space-y-12">
               <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black">Что будет на созвоне:</h3>
                  <p className="text-xl text-gray-500 font-medium">Это полноценный разбор ситуации под микроскопом.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { t: "1. Разбор опыта", d: "Что уже пробовал и почему не сработало. Найдём корень проблемы.", i: Search },
                    { t: "2. Поиск «дыр»", d: "Где именно ты теряешь деньги: трафик, контент или продажи.", i: Target },
                    { t: "3. Персональная карта", d: "Конкретный план под твою ситуацию: шаги 1, 2, 3.", i: MapIcon },
                    { t: "4. Ответы на вопросы", d: "Про нишу, инструменты, риски. Без воды и отговорок.", i: HelpCircle }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                       <div className="shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-apple-blue shadow-sm"><item.i size={28} /></div>
                       <div className="space-y-2"><h5 className="font-black text-gray-900 text-xl leading-tight">{item.t}</h5><p className="text-gray-500 leading-relaxed font-medium">{item.d}</p></div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-green-50/50 p-12 rounded-[3.5rem] border border-green-100 space-y-8">
                  <h4 className="text-2xl font-black text-green-900 flex items-center gap-4"><CheckCircle2 className="text-green-500" /> Для кого это:</h4>
                  <ul className="space-y-4 text-green-800/80 font-bold">
                     <li>— Устал от нулевых результатов</li>
                     <li>— Готов уделять 2-3 часа в день</li>
                     <li>— Цель: $2000-5000 в месяц</li>
                     <li>— Готов инвестировать в систему</li>
                  </ul>
               </div>
               <div className="bg-red-50/50 p-12 rounded-[3.5rem] border border-red-100 space-y-8">
                  <h4 className="text-2xl font-black text-red-900 flex items-center gap-4"><XCircle className="text-red-500" /> НЕ подходит:</h4>
                  <ul className="space-y-4 text-red-800/80 font-bold">
                     <li>— Ищешь «волшебную кнопку»</li>
                     <li>— Не готов менять подход</li>
                     <li>— Тебе «просто интересно послушать»</li>
                     <li>— Не собираешься ничего делать</li>
                  </ul>
               </div>
            </div>
          </section>

          {/* --- SECTION 7: BONUS --- */}
          <section className="space-y-16 pt-24 border-t border-gray-100">
            <div className="space-y-6 text-center">
               <span className="text-amber-600 font-black text-[11px] uppercase tracking-[0.2em] bg-amber-50 px-3 py-1 rounded-full">Раздел 7: Бонус за регистрацию</span>
               <h2 className="text-3xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">Что ты получишь сразу</h2>
               <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">Я хочу, чтобы ты получил пользу ещё до нашего созвона.</p>
            </div>

            <div className="bg-gray-900 text-white rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl group">
               <div className="absolute -right-20 -top-20 opacity-10 group-hover:scale-110 transition-transform duration-[2s]"><PlayCircle size={400} /></div>
               <div className="relative z-10 space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                     <div className="w-20 h-20 bg-apple-blue rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50"><Gift size={40} /></div>
                     <div className="text-center md:text-left space-y-2">
                        <h3 className="text-3xl md:text-4xl font-black">Закрытый видео-урок</h3>
                        <p className="text-blue-300 font-bold uppercase tracking-widest text-xs md:text-sm">«Сегментация аудитории: кому продавать, чтобы платили»</p>
                     </div>
                  </div>
                  
                  <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                    <p>Большинство новичков делают одну и ту же ошибку: создают контент «для всех». А «для всех» — значит ни для кого. В этом уроке я разбираю:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { t: "Топ-сегменты", d: "Какие ниши платят больше всего и почему.", i: Target },
                         { t: "Язык клиента", d: "Как говорить так, чтобы тебя хотели купить.", i: MessageCircle },
                         { t: "Западный рынок", d: "Почему USA платит в 10 раз больше.", i: Globe2 },
                         { t: "Позиционирование", d: "Конкретные примеры, которые работают сейчас.", i: Zap }
                       ].map((point, i) => (
                          <div key={i} className="flex gap-4">
                             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0"><point.i size={24} className="text-blue-400" /></div>
                             <div className="space-y-1"><h5 className="font-bold text-gray-100 text-xl">{point.t}</h5><p className="text-gray-400 text-sm leading-relaxed">{point.d}</p></div>
                          </div>
                       ))}
                    </div>
                  </div>
                  <p className="text-xl font-bold italic pt-8 border-t border-white/10">«Это не теория. Это выжимка из реального опыта — моего и учеников. После урока ты наконец поймёшь, кому и как продавать свой контент».</p>
               </div>
            </div>

            <div className="text-center space-y-16 py-10">
               <div className="bg-white p-10 md:p-20 rounded-[4rem] border-2 border-apple-blue shadow-2xl shadow-blue-100 space-y-12">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Записаться на диагностику</h3>
                  <div className="flex flex-col items-center space-y-10">
                     <div className="flex flex-col items-center gap-4">
                        <div className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3">
                           <Clock size={16} /> Осталось 3 места на эту неделю (всего 10)
                        </div>
                        <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-apple-blue w-[70%] animate-pulse"></div>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-6">
                        <a 
                           href="https://t.me/your_form_link" target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center space-x-6 bg-apple-blue text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black text-xl md:text-4xl shadow-2xl hover:bg-blue-600 transition-all active:scale-95 group uppercase tracking-tighter"
                        >
                           <ClipboardList size={32} />
                           <span>Заполнить анкету</span>
                           <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                        <p className="text-gray-400 font-bold uppercase tracking-[0.1em] text-[10px]">Получи урок в ЛС сразу после отправки</p>
                     </div>
                  </div>
               </div>
               <p className="text-gray-500 font-bold text-xl md:text-2xl italic leading-relaxed max-w-2xl mx-auto">
                 Не откладывай на «потом». «Потом» — это место, где живут нереализованные планы. Увидимся на разборе.
               </p>
            </div>
          </section>

        </div>
      </main>

      <footer className="w-full bg-white border-t border-gray-100 py-16 mt-20">
        <div className="max-w-[760px] mx-auto px-6 text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.3em]">
          AI MODEL BUSINESS GUIDE • THE FINAL CHAPTER
        </div>
      </footer>
    </div>
  );
};
