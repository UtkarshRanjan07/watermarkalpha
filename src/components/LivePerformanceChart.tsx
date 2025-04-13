// StockChart.tsx
import React, { useState } from "react";

const stockOptions = [
  { label: "Nasdaq-100", symbol: "NASDAQ:NDX" },
  { label: "NIFTY 50", symbol: "NSE:NIFTY" },
  { label: "Bitcoin", symbol: "BINANCE:BTCUSDT" },
];

export default function StockChart() {
  const [activeSymbol, setActiveSymbol] = useState(stockOptions[0].symbol);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen p-6">
      <div className="flex space-x-4 mb-6">
        {stockOptions.map((stock) => (
          <button
            key={stock.symbol}
            onClick={() => setActiveSymbol(stock.symbol)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeSymbol === stock.symbol
                ? "bg-blue-600 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {stock.label}
          </button>
        ))}
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${activeSymbol.replace(
            /[^a-zA-Z0-9]/g,
            ""
          )}&symbol=${activeSymbol}&interval=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hide_side_toolbar=false&allow_symbol_change=true&save_image=false&studies=[]`}
          width="100%"
          height="600"
          frameBorder="0"
          allowTransparency
          scrolling="no"
          title="Live Stock Chart"
        ></iframe>
      </div>
    </div>
  );
}
