
import React from 'react';

interface ProgressRingProps {
  percentage: number;
  color: string;
  size?: number;
  mdSize?: number;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({ percentage, color, size = 100, mdSize = 128 }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Container with responsive width/height using CSS variables or Tailwind classes */}
      <svg 
        viewBox="0 0 128 128" 
        className="transform -rotate-90 w-24 h-24 md:w-32 md:h-32"
      >
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="#F2F2F7"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1.5s ease-in-out' }}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <span className="absolute text-xl md:text-2xl font-black text-gray-900 tracking-tighter">
        {percentage}%
      </span>
    </div>
  );
};
