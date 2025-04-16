import { useState, useEffect, useCallback } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { MarketDataPoint } from '../types/chart';
import { historicalMarketData } from './data/historicalData';
import CustomTooltip from './CustomTooltip';

const calculatePercentageChange = (data: MarketDataPoint[]): MarketDataPoint[] => {
  if (!data.length) return data;
  const base = data[0];
  return data.map(point => ({
    ...point,
    bitcoin: parseFloat(((point.bitcoin - base.bitcoin) / base.bitcoin * 100).toFixed(2)),
    nasdaq: parseFloat(((point.nasdaq - base.nasdaq) / base.nasdaq * 100).toFixed(2)),
    nifty: parseFloat(((point.nifty - base.nifty) / base.nifty * 100).toFixed(2)),
  }));
};


const LivePerformanceChart = () => {
  // Extract unique years and sort descending (most recent first)
  const uniqueYears = Array.from(
    new Set(historicalMarketData.map(d => d.timestamp.split('-')[0]))
  ).sort((a, b) => parseInt(b) - parseInt(a));

  const [selectedYear, setSelectedYear] = useState<string>(uniqueYears[0]);
  const [data, setData] = useState<MarketDataPoint[]>([]);

  const formatTimestamp = useCallback((timestamp: string): string => {
    const [_, month] = timestamp.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[parseInt(month) - 1];
  }, []);

  useEffect(() => {
    const filtered = historicalMarketData.filter(d => d.timestamp.startsWith(selectedYear));
    setData(calculatePercentageChange(filtered));
  }, [selectedYear]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-xl font-bold text-white">Performance Comparison (% Change)</h3>
        <select
          className="bg-zinc-800 text-zinc-200 border border-zinc-700 rounded px-3 py-1 mt-4 sm:mt-0"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {uniqueYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="timestamp" stroke="#999" tickFormatter={formatTimestamp} />
            <YAxis stroke="#999" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area type="monotone" dataKey="bitcoin" name="Bitcoin" stroke="#FF9900" fill="url(#bitcoinGradient)" />
            <Area type="monotone" dataKey="nasdaq" name="NASDAQ-100" stroke="#5C6BC0" fill="url(#nasdaqGradient)" />
            <Area type="monotone" dataKey="nifty" name="Nifty 50" stroke="#66BB6A" fill="url(#niftyGradient)" />
            <defs>
              <linearGradient id="bitcoinGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF9900" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#FF9900" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="nasdaqGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5C6BC0" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#5C6BC0" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="niftyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#66BB6A" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#66BB6A" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LivePerformanceChart;
