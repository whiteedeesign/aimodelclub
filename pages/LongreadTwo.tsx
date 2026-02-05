
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Callout } from '../components/Callout';
import { ProgressRing } from '../components/ProgressRing';
import { 
  XCircle, ShoppingBag, Terminal, UserMinus, ArrowRight, RefreshCw, AlertCircle,
  CheckCircle2, Zap, Layers, Users, MessageSquare, TrendingUp, ShieldCheck, 
  PieChart, Target, Rocket, Briefcase, Baby, GraduationCap, Star, Scale, Globe, 
  Lock, AlertTriangle, History, Cpu, Gift, PlayCircle, Globe2, ClipboardList, Clock
} from 'lucide-react';

// --- Sub-components used within the sections ---

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
  <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden group">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-3">
          <span className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
             До Клуба
          </span>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium italic">«{before}»</p>
        </div>
        <div className="space-y-3">
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
                <div className="opacity-0 group-hover/bar:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg mb-1">{item.amount}</div>
                <div className="w-full rounded-t-xl transition-all duration-1000 delay-300" style={{ height: `${height}%`, backgroundColor: i === timeline.length - 1 ? accentColor : '#F2F2F7', opacity: i === timeline.length - 1 ? 1 : 0.6 + (i * 0.1) }}></div>
                <span className="text-[9px] font-bold text-gray-400">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const LongreadTwo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    { id: 0, title: "Старт и подготовка", desc: "Чтобы ты не тыкался вслепую", icon: Target },
    { id: 1, title: "Создание уникальной AI-модели", desc: "Твой актив, которого больше ни у него нет", icon: Rocket },
    { id: 2, title: "Генерация видео", desc: "Контент, который продаёт в разы лучше картинок", icon: Layers },
    { id: 3, title: "Продажи и монетизация", desc: "Как превращать подписчиков в деньги", icon: Zap },
    { id: 4, title: "NSFW-контент", desc: "Специфика ниши, о которой не говорят в открытую", icon: ShieldCheck },
    { id: 5, title: "Трафик USA", desc: "Где брать платёжеспособную аудиторию", icon: TrendingUp },
    { id: 6, title: "Продажи и коммуникация", desc: "Скрипты, воронки, работа с возражениями", icon: MessageSquare },
    { id: 7, title: "Масштабирование", desc: "Как вырасти с $2000 до $5000 и выше", icon: PieChart },
  ];

  const cases = [
    { name: "Андрей", age: "28 лет", role: "Из найма в бизнес", icon: Briefcase, accentColor: "#007AFF", before: "Менеджер по продажам, зарплата 70к. Слил 25к на бесполезные курсы.", after: "Получил систему. Уволился. Работает по 3-4 часа в день из дома.", result: "$3,200/мес", timeline: [{ month: "М1", amount: "$0" }, { month: "М2", amount: "$200" }, { month: "М3", amount: "$800" }, { month: "М4", amount: "$3200" }] },
    { name: "Марина", age: "34 года", role: "Мама двоих детей", icon: Baby, accentColor: "#FF2D55", before: "Пыталась сама 4 месяца. Доход $47. Думала, что талант нужен.", after: "Перестроила воронку за месяц. Сменила подход к контенту.", result: "$2,100/мес", timeline: [{ month: "М1", amount: "$47" }, { month: "М2", amount: "$900" }, { month: "М3", amount: "$2100" }] },
    { name: "Дима", age: "23 года", role: "Студент / Экс-курьер", icon: GraduationCap, accentColor: "#5856D6", before: "Боялся вложиться. Подрабатывал курьером. Денег вечно не хватало.", after: "Бросил курьерку. Зарабатывает больше, чем родители.", result: "$4,700/мес", timeline: [{ month: "М1", amount: "$300" }, { month: "М2", amount: "$400" }, { month: "М3", amount: "$1200" }, { month: "М4", amount: "$2800" }, { month: "М5", amount: "$4700" }] }
  ];

  const lessonPoints = [
    { title: "Топ-сегменты", desc: "Какие ниши платят больше всего и почему.", icon: Target },
    { title: "Язык клиента", desc: "Как говорить так, чтобы тебя хотели купить.", icon: MessageSquare },
    { title: "Западный рынок", desc: "Почему USA платит в 10 раз больше.", icon: Globe2 },
    { title: "Позиционирование", desc: "Конкретные примеры, работающие сейчас.", icon: Zap }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 flex flex-col items-center pb-32">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/85 ios-blur border-gray-100 py-2 md:py-3 shadow-sm' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <div className="max-w-screen-lg mx-auto px-5 flex justify-between items-center w-full">
           <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-apple-blue rounded-full"></span>
            <span className={`font-semibold tracking-tight text-xs md:text-sm transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>Полное руководство: от Проблемы к Свободе</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Статья 2</div>
        </div>
      </header>

      <main className="w-full">
        {/* --- SECTION 2: THE PROBLEM --- */}
        <Hero time="РАЗДЕЛ 2: ПРОБЛЕМА" title="Почему твои прошлые попытки провалились" subtitle="Давай разберём по косточкам, что пошло не так на самом деле." />
        <div className="max-w-[760px] mx-auto px-5 md:px-6 space-y-24 md:space-y-40">
          <section className="animate-fade-in"><p className="text-[18px] md:text-[24px] text-gray-700 leading-relaxed font-medium">Я общался с сотнями людей, которые «пробовали, но не получилось». И вижу три главные причины, почему они застряли без денег.</p></section>
          <section className="space-y-10">
            <div className="space-y-4"><span className="text-red-500 font-black text-[11px] uppercase tracking-[0.2em] bg-red-50 px-3 py-1 rounded-full">Причина №1</span><h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">Курс-пустышка за 2000 рублей</h2></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Когда ты платишь за ужин в кафе — твой мозг не воспринимает это как бизнес-инвестицию. Дисциплина пропадает на второй день.</p>
            <div className="bg-red-50 p-8 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left shadow-sm">
              <div className="shrink-0 flex flex-col items-center"><ProgressRing percentage={80} color="#EF4444" /><span className="mt-4 text-[10px] font-black uppercase text-red-500 tracking-widest">БРОСАЮТ ОБУЧЕНИЕ</span></div>
              <p className="text-lg md:text-xl font-bold text-red-900">Результат? Ноль. И укрепившаяся мысль: «Наверное, это не работает».</p>
            </div>
          </section>

          {/* --- SECTION 3: THE SOLUTION --- */}
          <div className="pt-24 md:pt-40 border-t border-gray-100"><Hero time="РАЗДЕЛ 3: СИСТЕМА" title="Окупаемый порог входа" subtitle="Почему одни годами крутятся в колесе, а другие выходят на $5000 за пару месяцев?" /></div>
          <section className="space-y-16">
            <p className="text-[18px] md:text-[24px] text-gray-700 leading-relaxed font-medium text-center md:text-left">Разница между новичком и профи — не в удаче. <span className="text-apple-blue font-bold">Разница — в подходе.</span></p>
            <div className="bg-gray-900 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-apple-blue/20 to-transparent"></div>
               <div className="relative z-10 space-y-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6"><div className="text-6xl md:text-8xl font-black tracking-tighter">$549</div><div className="text-blue-300 font-bold text-lg uppercase tracking-widest">Инвестиция в результат</div></div>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">Это <span className="text-white font-black">27% от твоего первого месяца</span> при цели в $2000. Окупаемость за 7-10 дней работы.</p>
                 </div>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               {modules.map((m) => (
                 <div key={m.id} className="group bg-white p-6 md:p-10 rounded-[2rem] border border-gray-100 hover:border-apple-blue transition-all duration-500 shadow-sm">
                    <div className="flex items-start space-x-6">
                       <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-apple-blue group-hover:text-white transition-all shrink-0"><m.icon size={28} /></div>
                       <div className="space-y-1"><h4 className="text-lg md:text-xl font-black text-gray-900">{m.title}</h4><p className="text-sm text-gray-400 font-medium">{m.desc}</p></div>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          {/* --- SECTION 4: CASE STUDIES --- */}
          <div className="pt-24 md:pt-40 border-t border-gray-100"><Hero time="РАЗДЕЛ 4: ДОКАЗАТЕЛЬСТВО" title="Кейсы тех, кто «дожал»" subtitle="Теория — это хорошо. Давай посмотрим на реальные цифры реальных людей." /></div>
          <section className="space-y-12">{cases.map((c, i) => (<CaseCard key={i} {...c} />))}</section>
          <section className="bg-gray-900 text-white p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] space-y-12 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Star size={300} /></div>
             <div className="relative z-10 space-y-8">
               <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Что общего у этих людей?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{["Получили систему", "Следовали шагам", "Не сдавались", "Использовали поддержку"].map((text, i) => (
                 <div key={i} className="flex items-center space-x-4"><div className="w-8 h-8 rounded-full bg-apple-blue flex items-center justify-center shrink-0"><CheckCircle2 size={16} /></div><span className="font-bold text-lg text-gray-100">{text}</span></div>
               ))}</div>
               <div className="pt-8 border-t border-white/10 italic text-gray-500 text-lg leading-relaxed">«Это работа по 3-4 часа в день. Но работа, которая реально меняет твою жизнь».</div>
             </div>
          </section>

          {/* --- SECTION 5: LEGALITY --- */}
          <div className="pt-24 md:pt-40 border-t border-gray-100"><Hero time="РАЗДЕЛ 5: БЕЗОПАСНОСТЬ" title="Это вообще легально?" subtitle="Честный разговор о законе, платформах и реальных рисках." /></div>
          <section className="space-y-12">
            <div className="bg-white p-8 md:p-14 rounded-[3rem] border border-gray-100 shadow-xl space-y-10 relative overflow-hidden">
               <div className="absolute -right-10 -top-10 text-gray-50 opacity-10"><Scale size={200} /></div>
               <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Ты создаёшь цифрового персонажа — <span className="text-gray-900 font-bold underline decoration-apple-blue decoration-2 underline-offset-4">интеллектуальную собственность.</span> Никакого обмана, это продажа цифрового продукта.</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{ title: 'Fanvue', desc: 'AI-First', icon: Globe }, { title: 'Fansly', desc: 'Support', icon: ShieldCheck }, { title: 'Patreon', desc: 'Arts', icon: Lock }].map((p, i) => (
                 <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center space-y-2"><div className="flex justify-center text-apple-blue mb-2"><p.icon size={24} /></div><h4 className="font-black text-gray-900 text-[10px]">{p.title}</h4></div>
               ))}</div>
            </div>
          </section>

          {/* --- SECTION 6: CTA --- */}
          <div className="pt-24 md:pt-40 border-t border-gray-100"><Hero time="РАЗДЕЛ 6: ВЫБОР" title="Сейчас у тебя два варианта" subtitle="Одна минута, которая определяет твоё будущее." /></div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 space-y-8 opacity-60">
              <h3 className="text-2xl font-black text-gray-900">Закрыть статью</h3>
              <p className="text-gray-500 text-sm">Продолжить делать то же самое. Покупать курсы за 2000₽ и надеяться на чудо.</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-white border-2 border-apple-blue shadow-2xl space-y-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 text-apple-blue"><Zap size={100} /></div>
               <h3 className="text-2xl font-black text-gray-900">Получить план</h3>
               <p className="text-gray-900 text-sm font-semibold">Разобраться в причинах застоя и получить пошаговую карту внедрения.</p>
            </div>
          </section>

          {/* --- SECTION 7: BONUS --- */}
          <div className="pt-24 md:pt-40 border-t border-gray-100"><Hero time="БОНУС ДЛЯ РЕШИТЕЛЬНЫХ" title="Что ты получишь сразу" subtitle="Польза начинается ещё до того, как мы созвонимся." /></div>
          <section className="bg-gray-900 text-white rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
             <div className="absolute -right-20 -top-20 opacity-10"><PlayCircle size={400} /></div>
             <div className="relative z-10 space-y-12 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-6">
                   <div className="w-16 h-16 bg-apple-blue rounded-2xl flex items-center justify-center shadow-lg"><Gift size={32} /></div>
                   <div><h3 className="text-2xl md:text-4xl font-black">Закрытый видео-урок</h3><p className="text-blue-300 font-bold uppercase tracking-widest text-xs">«Кому продавать, чтобы платили»</p></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{lessonPoints.map((point, i) => (
                   <div key={i} className="flex items-start gap-5 text-left"><div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0"><point.icon size={20} className="text-blue-400" /></div><div><h5 className="font-bold text-lg">{point.title}</h5><p className="text-gray-400 text-sm">{point.desc}</p></div></div>
                ))}</div>
             </div>
          </section>

          {/* FINAL CTA BUTTON */}
          <section className="text-center py-20 space-y-16">
             <div className="bg-white p-10 md:p-20 rounded-[4rem] border-2 border-apple-blue shadow-2xl space-y-12">
                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Записаться на диагностику</h3>
                <div className="flex flex-col items-center space-y-8">
                   <a href="https://t.me/your_form_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-6 bg-apple-blue text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black text-xl md:text-3xl shadow-2xl hover:bg-blue-600 transition-all active:scale-95 group">
                      <span>ЗАПОЛНИТЬ АНКЕТУ</span>
                      <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                   </a>
                   <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center gap-2 text-gray-400 font-black uppercase tracking-widest text-[10px]"><Clock size={14} /><span>Места на неделю: 3/5</span></div>
                      <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-apple-blue w-[60%] animate-pulse"></div></div>
                   </div>
                </div>
             </div>
             <p className="text-2xl font-black text-gray-300 italic">Твой новый путь начинается здесь.</p>
          </section>
        </div>
      </main>

      <footer className="w-full bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-[760px] mx-auto px-6 text-center text-gray-300 text-[10px] font-bold uppercase tracking-widest">AI MODEL BUSINESS GUIDE • THE COMPLETE JOURNEY</div>
      </footer>
    </div>
  );
};
