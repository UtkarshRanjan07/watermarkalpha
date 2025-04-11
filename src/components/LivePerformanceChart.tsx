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
import { 
  getInitialMarketData, 
  subscribeToMarketData 
} from '../services/marketDataService';
import CustomTooltip from './CustomTooltip';
import { Button } from './ui/button';
import { PlayIcon, PauseIcon } from 'lucide-react';
import { useToast } from './ui/use-toast';

const LivePerformanceChart = () => {
  const [data, setData] = useState<MarketDataPoint[]>(getInitialMarketData());
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const { toast } = useToast();

  const formatTimestamp = useCallback((timestamp: string): string => {
    // If timestamp is just YYYY-MM, return it as is
    if (timestamp.length === 7) {
      const [year, month] = timestamp.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return monthNames[parseInt(month) - 1];
    }
    
    // Otherwise, it's a full timestamp, format it nicely
    if (timestamp.includes(' ')) {
      const [date, time] = timestamp.split(' ');
      return time;
    }
    
    return timestamp;
  }, []);

  const handleNewDataPoint = useCallback((newPoint: MarketDataPoint) => {
    setData(prevData => {
      // Keep only last 12 data points for better visualization
      const newData = [...prevData, newPoint];
      if (newData.length > 20) {
        return newData.slice(newData.length - 20);
      }
      return newData;
    });
    
    const now = new Date();
    setLastUpdated(`${now.toLocaleTimeString()}`);
  }, []);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;
    
    if (!isPaused) {
      unsubscribe = subscribeToMarketData(handleNewDataPoint);
      toast({
        title: "Live data streaming activated",
        description: "Watching market changes in real-time",
      });
    }
    
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [isPaused, handleNewDataPoint, toast]);

  const togglePause = () => {
    setIsPaused(!isPaused);
    
    toast({
      title: isPaused ? "Resuming live data" : "Paused live data",
      description: isPaused ? "Real-time updates resumed" : "Real-time updates paused",
    });
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Performance Comparison</h3>
          {lastUpdated && (
            <p className="text-zinc-400 text-sm mt-1">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
        
        <Button 
          onClick={togglePause}
          variant="outline"
          className="mt-4 sm:mt-0 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border-zinc-700"
        >
          {isPaused ? (
            <>
              <PlayIcon size={16} className="mr-2" />
              Resume Live Data
            </>
          ) : (
            <>
              <PauseIcon size={16} className="mr-2" />
              Pause Live Data
            </>
          )}
        </Button>
      </div>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="timestamp" 
              stroke="#999" 
              tickFormatter={formatTimestamp}
            />
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
  );
};

export default LivePerformanceChart;