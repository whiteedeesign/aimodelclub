
import React from 'react';

interface HeroProps {
  time: string;
  title: string;
  subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({ time, title, subtitle }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Elements - softer and larger */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-blue-50/50 rounded-full blur-[40px] md:blur-[140px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-blue-100/20 rounded-full blur-[40px] md:blur-[120px]"></div>

      <div className="max-w-[800px] mx-auto px-5 relative z-10 text-center md:text-left">
        <div className="inline-block px-3 py-1 md:px-5 md:py-1.5 bg-gray-100/80 rounded-full text-gray-500 text-[9px] md:text-xs font-bold mb-6 md:mb-10 tracking-[0.1em] uppercase animate-fade-in shadow-sm">
          {time}
        </div>
        
        <h1 className="text-3xl md:text-[80px] font-black tracking-[-0.04em] text-gray-900 leading-[1.2] md:leading-[1] mb-5 md:mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {title}
        </h1>
        
        <p className="text-base md:text-[32px] text-gray-500 leading-[1.5] md:leading-[1.4] font-medium animate-fade-in max-w-2xl mx-auto md:mx-0" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        <div className="mt-8 md:mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      </div>
    </section>
  );
};
