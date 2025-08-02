import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataChart = ({ data }) => {
 return (
  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 mt-10">
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-5 tracking-tight">
      📈 Historical Data (Cases)
    </h3>

    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
        <XAxis
          dataKey="date"
          tick={{ fill: '#cbd5e1', fontSize: 12 }}
        />
        <YAxis
          tick={{ fill: '#cbd5e1', fontSize: 12 }}
          tickFormatter={(value) =>
            new Intl.NumberFormat('en', {
              notation: 'compact',
            }).format(value)
          }
        />
        <Tooltip
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }}
          labelStyle={{ color: '#94a3b8' }}
          itemStyle={{ color: '#c084fc' }}
          formatter={(value) => new Intl.NumberFormat().format(value)}
        />
        <Legend wrapperStyle={{ color: '#cbd5e1' }} />
        <Line type="monotone" dataKey="cases" stroke="#c084fc" activeDot={{ r: 6 }} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

};

export default DataChart;