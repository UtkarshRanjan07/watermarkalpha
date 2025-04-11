export interface MarketDataPoint {
    timestamp: string;
    bitcoin: number;
    nasdaq: number;
    nifty: number;
  }
  
  export interface TooltipProps {
    active?: boolean;
    payload?: TooltipPayload[];
    label?: string;
  }
  
  export interface TooltipPayload {
    value: number;
    name: string;
    color: string;
    dataKey: string;
  }