import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PriceChartProps {
  data: Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }>;
}

export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Price Trends</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#4F46E5" name="Close" strokeWidth={2} />
            <Line type="monotone" dataKey="high" stroke="#10B981" name="High" strokeWidth={1} />
            <Line type="monotone" dataKey="low" stroke="#EF4444" name="Low" strokeWidth={1} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};