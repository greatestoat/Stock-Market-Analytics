import React from 'react';
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface MetricsChartProps {
  data: Array<{
    date: string;
    volume: number;
    pe: number;
    pb: number;
  }>;
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Volume & Metrics</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="volume" fill="#6366F1" name="Volume" />
            <Line yAxisId="right" type="monotone" dataKey="pe" stroke="#EF4444" name="P/E" />
            <Line yAxisId="right" type="monotone" dataKey="pb" stroke="#10B981" name="P/B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};