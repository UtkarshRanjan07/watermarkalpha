import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data - to be replaced with API data
const performanceData = [
  { month: 'Jan', bitcoin: 3.8, nasdaq: 4.0, nifty: 3.5 },
  { month: 'Feb', bitcoin: 4.5, nasdaq: 3.2, nifty: 2.8 },
  { month: 'Mar', bitcoin: 5.2, nasdaq: 3.8, nifty: 4.2 },
  { month: 'Apr', bitcoin: 2.3, nasdaq: 4.5, nifty: 5.0 },
  { month: 'May', bitcoin: -3.7, nasdaq: 3.0, nifty: 4.3 },
  { month: 'Jun', bitcoin: -1.2, nasdaq: 2.5, nifty: 3.9 },
  { month: 'Jul', bitcoin: 6.3, nasdaq: 4.8, nifty: 5.2 },
  { month: 'Aug', bitcoin: 8.5, nasdaq: 5.5, nifty: 4.7 },
  { month: 'Sep', bitcoin: 7.2, nasdaq: 4.9, nifty: 5.6 },
  { month: 'Oct', bitcoin: 9.5, nasdaq: 5.8, nifty: 5.9 },
  { month: 'Nov', bitcoin: 12.3, nasdaq: 6.2, nifty: 6.3 },
  { month: 'Dec', bitcoin: 10.5, nasdaq: 7.0, nifty: 6.8 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 p-4 rounded-lg shadow-lg">
        <p className="text-white font-medium">{`${label}`}</p>
        {payload.map((entry: TooltipPayload, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="font-medium">
            {`${entry.name}: ${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Performance = () => {
  return (
    <section className="section bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gold-gradient">Market Performance</span>
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
          Performance comparison of Bitcoin, Nasdaq-100, and Nifty 50
        </p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-8">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="bitcoin" 
                  name="Bitcoin" 
                  stroke="#FF9900" 
                  fill="url(#bitcoinGradient)" 
                  strokeWidth={1.5} 
                />
                <Area 
                  type="monotone" 
                  dataKey="nasdaq" 
                  name="NASDAQ-100" 
                  stroke="#5C6BC0" 
                  fill="url(#nasdaqGradient)" 
                  strokeWidth={1.5} 
                />
                <Area 
                  type="monotone" 
                  dataKey="nifty" 
                  name="Nifty 50" 
                  stroke="#66BB6A" 
                  fill="url(#niftyGradient)" 
                  strokeWidth={1.5} 
                />
                <defs>
                  <linearGradient id="bitcoinGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF9900" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#FF9900" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="nasdaqGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5C6BC0" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#5C6BC0" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="niftyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#66BB6A" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#66BB6A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;