import React from 'react';
import { MOCK_TASKS } from '../constants';
import { TaskStatus } from '../types';

const TaskCard = ({ task }) => {
  const priorityColors = {
    'High': 'text-rose-600 bg-rose-50 border-rose-100',
    'Medium': 'text-amber-600 bg-amber-50 border-amber-100',
    'Low': 'text-blue-600 bg-blue-50 border-blue-100',
  };

  return (
    <div className="task-card bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 mb-3 cursor-grab active:cursor-grabbing group">
      <div className="flex justify-between items-start mb-3">
        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md border tracking-widest ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        <button className="text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
      <h4 className="text-xs font-bold text-slate-700 mb-4 leading-relaxed">{task.title}</h4>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-1.5">
          <img className="w-5 h-5 rounded-full ring-2 ring-white" src={`https://picsum.photos/32/32?random=${task.id}`} alt="avatar" />
        </div>
        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">#{task.id}</span>
      </div>
    </div>
  );
};

const TaskBoard = () => {
  const columns = [
    { title: 'To-Do', status: TaskStatus.TODO, count: MOCK_TASKS.filter(t => t.status === TaskStatus.TODO).length },
    { title: 'In Progress', status: TaskStatus.IN_PROGRESS, count: MOCK_TASKS.filter(t => t.status === TaskStatus.IN_PROGRESS).length },
    { title: 'Done', status: TaskStatus.DONE, count: MOCK_TASKS.filter(t => t.status === TaskStatus.DONE).length },
  ];

  return (
    <div className="bg-slate-50 rounded-2xl p-4 lg:p-5 border border-slate-200/60 shadow-inner">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">Operations Board</h2>
        <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">View All</button>
      </div>
      <div className="space-y-8">
        {columns.map((col) => (
          <div key={col.status} className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${col.title === 'Done' ? 'bg-emerald-400' : 'bg-slate-300'}`}></span>
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{col.title}</h3>
              </div>
              <span className="text-[9px] font-black text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded-full border border-slate-200/30">{col.count}</span>
            </div>
            <div className="min-h-[100px]">
              {MOCK_TASKS.filter(t => t.status === col.status).map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
              <button className="w-full py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-white transition-all flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
