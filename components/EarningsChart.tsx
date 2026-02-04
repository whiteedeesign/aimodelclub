
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { month: 'Месяц 1', earnings: 800 },
  { month: 'Месяц 2', earnings: 2000 },
  { month: 'Месяц 3', earnings: 3200 },
  { month: 'Месяц 4', earnings: 4100 },
  { month: 'Месяц 5', earnings: 5000 },
  { month: 'Месяц 6', earnings: 5800 },
];

export const EarningsChart: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007AFF" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#007AFF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F2F2F7" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#8E8E93', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#8E8E93', fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: 'none', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '12px' 
            }}
            formatter={(value) => [`$${value}`, 'Доход']}
          />
          <Area 
            type="monotone" 
            dataKey="earnings" 
            stroke="#007AFF" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorEarnings)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
