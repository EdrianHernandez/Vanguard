
import React from 'react';
import { PIPELINE_STAGES } from '../constants';

const SalesPipeline: React.FC = () => {
  const totalValue = PIPELINE_STAGES.reduce((acc, stage) => acc + stage.value, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:p-8 mb-8 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Revenue Pipeline Funnel</h2>
          <p className="text-sm text-slate-500 mt-1">Real-time health of your active sales cycles</p>
        </div>
        <div className="bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-0.5">Pipeline Value</span>
          <span className="text-2xl font-black text-indigo-700">${(totalValue / 1000000).toFixed(2)}M</span>
        </div>
      </div>
      
      {/* Funnel Visualization */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2 min-h-[180px]">
          {PIPELINE_STAGES.map((stage, idx) => {
            const nextStage = PIPELINE_STAGES[idx + 1];
            const conversionRate = nextStage ? Math.round((nextStage.count / stage.count) * 100) : null;
            
            // Calculate taper for the "funnel" effect using clip-path
            // We want each stage to get slightly shorter/narrower top to bottom, 
            // but in horizontal mode, we can simulate this with vertical tapering.
            const taperTop = 10 + (idx * 5); // Start at 10% from top, increase by 5% each stage
            const taperBottom = 90 - (idx * 5); // Start at 90% from bottom, decrease by 5% each stage
            
            return (
              <div key={stage.id} className="relative flex-1 flex group min-w-[120px]">
                <div className="relative w-full flex flex-col items-center justify-center py-6 px-4 transition-all duration-300 hover:scale-[1.02] z-10">
                  {/* Funnel Segment Background with Clip Path */}
                  <div 
                    className={`absolute inset-0 ${stage.color} opacity-90 transition-all duration-300 group-hover:opacity-100 shadow-sm border-r border-white/20`}
                    style={{
                      clipPath: `polygon(0% 0%, 100% ${taperTop - 10}%, 100% ${taperBottom + 10}%, 0% 100%)`,
                      filter: idx === PIPELINE_STAGES.length - 1 ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' : 'none'
                    }}
                  ></div>

                  {/* Stage Content */}
                  <div className="relative z-20 text-center">
                    <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${idx > 3 ? 'text-white' : 'text-indigo-900/60'}`}>
                      {stage.label}
                    </div>
                    <div className={`text-3xl font-black leading-none ${idx > 3 ? 'text-white' : 'text-slate-900'}`}>
                      {stage.count}
                    </div>
                    <div className={`text-xs font-bold mt-2 px-2 py-0.5 rounded-full inline-block ${idx > 3 ? 'bg-white/20 text-white' : 'bg-slate-900/5 text-slate-600'}`}>
                      ${(stage.value / 1000).toFixed(0)}k
                    </div>
                  </div>
                </div>

                {/* Conversion Connector */}
                {nextStage && (
                  <div className="hidden lg:flex absolute -right-4 top-0 bottom-0 w-8 items-center justify-center z-30">
                    <div className="bg-white border border-slate-200 shadow-sm rounded-full w-8 h-8 flex items-center justify-center text-[10px] font-black text-slate-500 group-hover:text-indigo-600 group-hover:border-indigo-200 group-hover:scale-110 transition-all">
                      {conversionRate}%
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend / Insight Footer */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-indigo-500 rounded-full"></div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Velocity</div>
            <div className="text-sm font-bold text-slate-700">14.2 Days Avg.</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-emerald-500 rounded-full"></div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Win Prob.</div>
            <div className="text-sm font-bold text-slate-700">32% Overall</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-amber-500 rounded-full"></div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Leakage</div>
            <div className="text-sm font-bold text-slate-700">8.1% Monthly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPipeline;
