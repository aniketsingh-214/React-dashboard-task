import React from 'react';

const MetricCard = ({ title, value, icon }) => {
  return (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-cyan-400 transition-all duration-300">
    <div className="flex items-center justify-between">
      <h3 className="text-sm uppercase font-medium text-slate-300 tracking-wide">
        {title}
      </h3>
      <div className="text-cyan-400 text-xl">
        {icon}
      </div>
    </div>

    <p className="text-4xl font-extrabold text-white mt-4">
      {value ? new Intl.NumberFormat().format(value) : '...'}
    </p>
  </div>
);

};

export default MetricCard;