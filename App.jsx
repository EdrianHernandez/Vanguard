import React, { useState } from 'react';
import MetricCards from './components/MetricCards';
import LeadTable from './components/LeadTable';
import SalesPipeline from './components/SalesPipeline';
import TaskBoard from './components/TaskBoard';
import AIInsights from './components/AIInsights';

const BrandLogo = ({ collapsed, className = "" }) => (
  <div className={`flex items-center transition-all duration-300 ${collapsed ? 'justify-center' : 'gap-3'} ${className}`}>
    <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200 shrink-0 transform hover:scale-105 transition-transform duration-200">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    {!collapsed && (
      <span className="text-lg font-black text-slate-900 tracking-tighter whitespace-nowrap overflow-hidden animate-in fade-in slide-in-from-left-2 duration-500">
        VANGUARD<span className="text-indigo-600">.</span>
      </span>
    )}
  </div>
);

const SidebarLink = ({ icon, label, active, collapsed }) => (
  <a 
    href="#" 
    title={collapsed ? label : ""}
    className={`flex items-center gap-3 rounded-xl transition-all duration-300 group ${collapsed ? 'px-0 justify-center h-12 w-12 mx-auto' : 'px-4 py-2.5'} ${active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'}`}
  >
    <div className={`${collapsed ? 'scale-110' : ''} transition-transform`}>
      {icon}
    </div>
    {!collapsed && (
      <span className="font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-300">
        {label}
      </span>
    )}
  </a>
);

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen(!mobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Overlay for Mobile */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out transform 
        ${mobileOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'} 
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}>
        
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className={`p-6 transition-all duration-300 ${isCollapsed ? 'px-4' : 'px-6'}`}>
            <BrandLogo collapsed={isCollapsed} className="mb-8" />

            {/* Navigation */}
            <nav className="space-y-2">
              <SidebarLink 
                active 
                collapsed={isCollapsed}
                label="Dashboard" 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>} 
              />
              <SidebarLink 
                collapsed={isCollapsed}
                label="Deals & Leads" 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
              />
              <SidebarLink 
                collapsed={isCollapsed}
                label="Reports" 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} 
              />
              <SidebarLink 
                collapsed={isCollapsed}
                label="Tasks" 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} 
              />
            </nav>
          </div>

          <div className="mt-auto p-4 border-t border-slate-100">
            <button 
              onClick={toggleSidebar}
              className={`hidden lg:flex items-center justify-center w-full h-10 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all ${isCollapsed ? '' : 'gap-2 px-3'}`}
            >
              <svg className={`w-5 h-5 transition-transform duration-500 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              {!isCollapsed && <span className="text-xs font-bold uppercase tracking-widest">Minimize</span>}
            </button>

            <div className={`mt-4 p-2 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 ${isCollapsed ? 'px-1' : 'px-3'}`}>
              <div className={`flex items-center transition-all duration-300 ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
                <img className="w-9 h-9 rounded-full border-2 border-white shadow-sm shrink-0" src="https://picsum.photos/40/40" alt="profile" />
                {!isCollapsed && (
                  <div className="flex flex-col min-w-0 animate-in fade-in duration-500">
                    <span className="text-xs font-bold text-slate-900 truncate">Eric Stratton</span>
                    <span className="text-[10px] text-slate-500 font-medium truncate uppercase tracking-wider">Sales Director</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className={`flex-1 transition-all duration-300 ${mobileOpen ? 'ml-0' : (isCollapsed ? 'lg:ml-20' : 'lg:ml-64')}`}>
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              {isCollapsed && <BrandLogo collapsed className="lg:mr-2" />}
              <div className="h-6 w-[1px] bg-slate-200 hidden lg:block mx-1"></div>
              <h1 className="text-lg font-bold text-slate-800">Dashboard Overview</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search..." className="bg-transparent border-none text-sm focus:outline-none text-slate-600 placeholder:text-slate-400 w-48" />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
              <div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
          <AIInsights />
          <MetricCards />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 items-start">
            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
              <SalesPipeline />
              <LeadTable />
            </div>
            <div className="space-y-6 lg:space-y-8">
              <TaskBoard />
              
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 lg:p-6">
                <h3 className="text-sm font-bold text-slate-800 mb-5">Performance by Segment</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Enterprise', val: 74, color: 'bg-indigo-500' },
                    { label: 'Mid-Market', val: 52, color: 'bg-emerald-500' },
                    { label: 'SME', val: 41, color: 'bg-amber-500' },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">
                        <span>{item.label}</span>
                        <span>{item.val}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${item.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="px-8 py-10 text-center text-slate-400 text-xs border-t border-slate-200 mt-12 bg-white">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center">
                 <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-bold text-slate-900 tracking-tighter">VANGUARD<span className="text-indigo-600">.</span></span>
            </div>
            <p className="font-medium mt-2">Professional Sales Operations Engine</p>
            <p className="mt-1 opacity-60">Session active for 2h 14m &bull; All systems operational</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
