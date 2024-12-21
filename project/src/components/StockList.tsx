import React from 'react';
import { ParsedStockData } from '../types/stock';

interface StockListProps {
  stocks: ParsedStockData[];
  selectedStock: ParsedStockData | null;
  onSelectStock: (stock: ParsedStockData) => void;
}

export const StockList: React.FC<StockListProps> = ({
  stocks,
  selectedStock,
  onSelectStock,
}) => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-indigo-600">
        <h2 className="text-white text-lg font-semibold">Stocks</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {stocks.map((stock) => (
          <li
            key={stock.symbol}
            className={`cursor-pointer hover:bg-indigo-50 transition-colors ${
              selectedStock?.symbol === stock.symbol ? 'bg-indigo-100' : ''
            }`}
            onClick={() => onSelectStock(stock)}
          >
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">{stock.symbol}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};