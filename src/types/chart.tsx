function calculatePercentageChange(data: MarketDataPoint[]): MarketDataPoint[] {
  if (!data.length) return data;

  const base = data[0];
  return data.map((point) => ({
    ...point,
    bitcoin: ((point.bitcoin - base.bitcoin) / base.bitcoin) * 100,
    nasdaq: ((point.nasdaq - base.nasdaq) / base.nasdaq) * 100,
    nifty: ((point.nifty - base.nifty) / base.nifty) * 100,
  }));
}
