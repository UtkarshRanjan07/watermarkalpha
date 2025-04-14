import { MarketDataPoint } from "../types/chart.tsx";

// Initial historical data
const initialData: MarketDataPoint[] = [
  { timestamp: "2023-01", bitcoin: 3.8, nasdaq: 4.0, nifty: 3.5 },
  { timestamp: "2023-02", bitcoin: 4.5, nasdaq: 3.2, nifty: 2.8 },
  { timestamp: "2023-03", bitcoin: 5.2, nasdaq: 3.8, nifty: 4.2 },
  { timestamp: "2023-04", bitcoin: 2.3, nasdaq: 4.5, nifty: 5.0 },
  { timestamp: "2023-05", bitcoin: -3.7, nasdaq: 3.0, nifty: 4.3 },
  { timestamp: "2023-06", bitcoin: -1.2, nasdaq: 2.5, nifty: 3.9 },
  { timestamp: "2023-07", bitcoin: 6.3, nasdaq: 4.8, nifty: 5.2 },
  { timestamp: "2023-08", bitcoin: 8.5, nasdaq: 5.5, nifty: 4.7 },
  { timestamp: "2023-09", bitcoin: 7.2, nasdaq: 4.9, nifty: 5.6 },
  { timestamp: "2023-10", bitcoin: 9.5, nasdaq: 5.8, nifty: 5.9 },
  { timestamp: "2023-11", bitcoin: 12.3, nasdaq: 6.2, nifty: 6.3 },
  { timestamp: "2023-12", bitcoin: 10.5, nasdaq: 7.0, nifty: 6.8 },
];

// Helper to generate random performance data between -2% and +2%
const generateRandomChange = (): number => {
  return parseFloat((Math.random() * 4 - 2).toFixed(2));
};

// Format current timestamp as YYYY-MM-DD HH:MM:SS
const formatTimestamp = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Generate a single new data point
export const generateNewDataPoint = (lastData: MarketDataPoint): MarketDataPoint => {
  const now = new Date();
  
  return {
    timestamp: formatTimestamp(now),
    bitcoin: lastData.bitcoin + generateRandomChange(),
    nasdaq: lastData.nasdaq + generateRandomChange(),
    nifty: lastData.nifty + generateRandomChange(),
  };
};

// Get initial data
export const getInitialMarketData = (): MarketDataPoint[] => {
  return [...initialData];
};

// Simulate streaming data
let subscribers: ((data: MarketDataPoint) => void)[] = [];

let isStreaming = false;
let streamInterval: number | NodeJS.Timeout | null = null;
let currentData = initialData[initialData.length - 1];

export const startDataStream = (): void => {
  if (isStreaming) return;
  
  isStreaming = true;
  
  streamInterval = setInterval(() => {
    currentData = generateNewDataPoint(currentData);
    
    subscribers.forEach(callback => {
      callback(currentData);
    });
  }, 3000); // Update every 3 seconds
};

export const stopDataStream = (): void => {
  if (streamInterval) {
    clearInterval(streamInterval);
    isStreaming = false;
  }
};

export const subscribeToMarketData = (callback: (data: MarketDataPoint) => void): () => void => {
  subscribers.push(callback);
  
  // Start streaming if it's not already started
  if (!isStreaming) {
    startDataStream();
  }
  
  // Return unsubscribe function
  return () => {
    subscribers = subscribers.filter(sub => sub !== callback);
    
    // Stop streaming if no subscribers left
    if (subscribers.length === 0) {
      stopDataStream();
    }
  };
};