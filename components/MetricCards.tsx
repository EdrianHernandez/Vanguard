
import React from 'react';
import { METRICS } from '../constants';

const MetricCard: React.FC<{ metric: typeof METRICS[0] }> = ({ metric }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={metric.icon} />
          </svg>
        </div>
        <div className={`flex items-center text-[11px] font-bold px-1.5 py-0.5 rounded-md ${metric.trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'}`}>
          <span>{metric.trend === 'up' ? '↑' : '↓'} {metric.change}%</span>
        </div>
      </div>
      <div>
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{metric.label}</h3>
        <p className="text-2xl font-black text-slate-900 mt-2 tracking-tight">{metric.value}</p>
      </div>
    </div>
  );
};

const MetricCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {METRICS.map((metric, idx) => (
        <MetricCard key={idx} metric={metric} />
      ))}
    </div>
  );
};

export default MetricCards;
