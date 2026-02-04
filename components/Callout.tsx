
import React from 'react';
import { Info, HelpCircle, Quote } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  icon?: 'info' | 'question' | 'quote';
}

export const Callout: React.FC<CalloutProps> = ({ 
  children, 
  variant = 'primary', 
  icon = 'quote' 
}) => {
  const bgStyles = {
    primary: 'bg-white border-blue-500',
    secondary: 'bg-gray-50 border-gray-300',
    accent: 'bg-amber-50 border-amber-400',
  };

  const iconColor = {
    primary: 'text-apple-blue',
    secondary: 'text-gray-400',
    accent: 'text-amber-500',
  };

  const IconComponent = icon === 'info' ? Info : icon === 'question' ? HelpCircle : Quote;

  return (
    <div className={`p-5 md:p-12 rounded-[1.2rem] md:rounded-[2.5rem] border-l-[3px] md:border-l-[6px] ${bgStyles[variant]} flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-8 animate-fade-in shadow-lg shadow-gray-200/40 my-6 md:my-16`}>
      <div className={`shrink-0 ${iconColor[variant]} opacity-40`}>
        {/* Fixed: Removed invalid md:size prop and redundant size prop */}
        <IconComponent strokeWidth={1.5} className="w-6 h-6 md:w-12 md:h-12" />
      </div>
      <div className="text-[18px] md:text-[28px] font-semibold tracking-tight text-gray-900 leading-[1.4] md:leading-[1.5]">
        {children}
      </div>
    </div>
  );
};