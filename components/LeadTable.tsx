
import React, { useState } from 'react';
import { MOCK_LEADS } from '../constants';
import { LeadStatus } from '../types';

const LeadTable: React.FC = () => {
  const [leads] = useState(MOCK_LEADS);

  const getStatusColor = (status: LeadStatus) => {
    switch (status) {
      case LeadStatus.NEW: return 'bg-blue-50 text-blue-700 border-blue-100';
      case LeadStatus.CONTACTED: return 'bg-amber-50 text-amber-700 border-amber-100';
      case LeadStatus.QUALIFIED: return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case LeadStatus.NEGOTIATION: return 'bg-violet-50 text-violet-700 border-violet-100';
      case LeadStatus.CLOSED: return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Recent Leads</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage your latest potential deal opportunities</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
            Export
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-100">
            Add New
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-3.5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Client / Company</th>
              <th className="px-6 py-3.5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
              <th className="px-6 py-3.5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Deal Value</th>
              <th className="px-6 py-3.5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Last Contact</th>
              <th className="px-6 py-3.5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="lead-row hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-3.5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800">{lead.name}</span>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-tight">{lead.company}</span>
                  </div>
                </td>
                <td className="px-6 py-3.5">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black border tracking-wide uppercase ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-right">
                  <span className="text-sm font-bold text-slate-700">${lead.value.toLocaleString()}</span>
                </td>
                <td className="px-6 py-3.5">
                  <span className="text-[11px] font-medium text-slate-500">{lead.lastContacted}</span>
                </td>
                <td className="px-6 py-3.5 text-right">
                  <button className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50/50 rounded-lg hover:bg-indigo-600 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
