import { historical } from 'yahoo-finance2';

export default async function handler(req, res) {
  const { symbol, days } = req.query;

  if (!symbol || !days) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - parseInt(days));

    const result = await historical(symbol, {
      period1: startDate,
      period2: endDate,
      interval: '1d',
    });

    const prices = result.map((entry) => entry.close).filter(Boolean);

    res.status(200).json({ prices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Yahoo Finance' });
  }
}
