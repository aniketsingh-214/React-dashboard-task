import React, { useMemo } from 'react';
import useFetchData from '../hooks/useFetchData';
import MetricCard from './MetricCard';

import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const ChartCard = ({ title, children }) => (
  <div className="bg-glass backdrop-filter backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-lg h-96">
    <h3 className="text-xl font-bold text-text-light mb-4">{title}</h3>
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-secondary-dark p-4 border border-gray-700 rounded-md shadow-lg">
        <p className="label text-text-light">{label}</p>
        {payload.map((pld) => (
          <p key={pld.dataKey} style={{ color: pld.color }}>
            {`${pld.name}: ${new Intl.NumberFormat().format(pld.value)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const yAxisFormatter = (value) => new Intl.NumberFormat('en', { notation: 'compact' }).format(value);

const AreaChartCard = ({ data }) => (
  <ChartCard title="Area Chart">
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 60 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(204, 214, 246, 0.2)" />
      <XAxis dataKey="date" stroke="#8892b0" tick={{ fontSize: 12 }} />
      <YAxis stroke="#8892b0" tickFormatter={yAxisFormatter} />
      <Tooltip content={<CustomTooltip />} />
      <Legend wrapperStyle={{ bottom: 0, marginBottom: '20px' }} />
      <Area type="monotone" dataKey="cases" stackId="1" stroke="#8884d8" fill="#8884d8" name="Total Cases" />
      <Area type="monotone" dataKey="recovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Recovered" />
    </AreaChart>
  </ChartCard>
);

const BarChartCard = ({ data }) => (
  <ChartCard title="Bar Chart">
    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(204, 214, 246, 0.2)" />
      <XAxis dataKey="date" stroke="#8892b0" tick={{ fontSize: 12 }} />
      <YAxis stroke="#8892b0" tickFormatter={yAxisFormatter} />
      <Tooltip content={<CustomTooltip />} />
      <Legend wrapperStyle={{ bottom: 0, marginBottom: '20px'  }} />
      <Bar dataKey="recovered" fill="#82ca9d" name="Recovered" />
      <Bar dataKey="deaths" fill="#ff6b6b" name="Deaths" />
    </BarChart>
  </ChartCard>
);

const LineChartCard = ({ data }) => (
  <ChartCard title="Line Chart">
    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(204, 214, 246, 0.2)" />
      <XAxis dataKey="date" stroke="#8892b0" tick={{ fontSize: 12 }} />
      <YAxis stroke="#8892b0" tickFormatter={yAxisFormatter} />
      <Tooltip content={<CustomTooltip />} />
      <Legend wrapperStyle={{ bottom: 0, marginBottom: '20px'  }} />
      <Line type="monotone" dataKey="cases" stroke="#64ffda" strokeWidth={2} name="Total Cases" />
      <Line type="monotone" dataKey="deaths" stroke="#ff6b6b" strokeWidth={2} name="Deaths" />
    </LineChart>
  </ChartCard>
);

const CasesIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const DeathsIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>;
const RecoveredIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const Dashboard = () => {
  const { data: globalData, loading: globalLoading } = useFetchData('https://disease.sh/v3/covid-19/all');
  const { data: historicalData, loading: historicalLoading, error } = useFetchData('https://disease.sh/v3/covid-19/historical/all?lastdays=90');

  const chartData = useMemo(() => {
    if (!historicalData) return [];
    
    const cases = historicalData.cases || {};
    const deaths = historicalData.deaths || {};
    const recovered = historicalData.recovered || {};
    
    return Object.keys(cases).map(date => ({
      date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      cases: cases[date],
      deaths: deaths[date],
      recovered: recovered[date],
    }));
  }, [historicalData]);

  if (globalLoading || historicalLoading) {
    return <div className="text-center mt-20 text-accent-cyan text-2xl">Loading Global Data...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500 text-2xl">Error fetching data. Please try again later.</div>;
  }
  
  return (
    <div>
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <MetricCard title="Total Cases" value={globalData?.cases} icon={CasesIcon} />
        <MetricCard title="Total Deaths" value={globalData?.deaths} icon={DeathsIcon} />
        <MetricCard title="Total Recovered" value={globalData?.recovered} icon={RecoveredIcon} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AreaChartCard data={chartData} />
        <BarChartCard data={chartData} />
        <LineChartCard data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;