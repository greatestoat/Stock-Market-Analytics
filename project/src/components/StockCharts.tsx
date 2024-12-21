import React from 'react';
import { ParsedStockData } from '../types/stock';
import { PriceChart } from './PriceChart';
import { MetricsChart } from './MetricsChart';

interface StockChartsProps {
  stock: ParsedStockData;
}

export const StockCharts: React.FC<StockChartsProps> = ({ stock }) => {
  const priceData = stock.dates.map((date, i) => ({
    date,
    open: stock.prices.open[i],
    high: stock.prices.high[i],
    low: stock.prices.low[i],
    close: stock.prices.close[i],
  }));

  const volumeData = stock.dates.map((date, i) => ({
    date,
    volume: stock.metrics.volume[i],
    pe: stock.metrics.pe[i],
    pb: stock.metrics.pb[i],
  }));

  return (
    <div className="space-y-8">
      <PriceChart data={priceData} />
      <MetricsChart data={volumeData} />
    </div>
  );
};