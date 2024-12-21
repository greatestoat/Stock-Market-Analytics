export interface StockData {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  change: number;
  changePercent: number;
  volume: number;
  turnover: number;
  pe: number;
  pb: number;
  deliveryPercent: number;
}

export interface ParsedStockData {
  symbol: string;
  dates: string[];
  prices: {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
  };
  metrics: {
    volume: number[];
    pe: number[];
    pb: number[];
    deliveryPercent: number[];
  };
}