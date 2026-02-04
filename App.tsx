
import React, { useState, useEffect } from 'react';
import { LongreadOne } from './pages/LongreadOne';
import { LongreadTwo } from './pages/LongreadTwo';
import { LongreadThree } from './pages/LongreadThree';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#one');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#one');
      window.scrollTo(0, 0); 
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#one':
        return <LongreadOne />;
      case '#two':
        return <LongreadTwo />;
      case '#three':
        return <LongreadThree />;
      default:
        return <LongreadOne />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
      
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-white/80 ios-blur px-4 py-2 rounded-full border border-gray-200 shadow-2xl flex space-x-4">
        <a href="#one" className={`text-[10px] font-bold uppercase tracking-widest ${currentPath === '#one' ? 'text-apple-blue' : 'text-gray-400'}`}>Статья 1</a>
        <a href="#two" className={`text-[10px] font-bold uppercase tracking-widest ${currentPath === '#two' ? 'text-apple-blue' : 'text-gray-400'}`}>Статья 2</a>
        <a href="#three" className={`text-[10px] font-bold uppercase tracking-widest ${currentPath === '#three' ? 'text-apple-blue' : 'text-gray-400'}`}>Статья 3</a>
      </nav>
    </div>
  );
};

export default App;