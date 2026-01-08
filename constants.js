import React from 'react';
import { LeadStatus, TaskStatus } from './types';

export const MOCK_LEADS = [
  { id: '1', name: 'Alexander Wright', company: 'TechNova Solutions', email: 'alex@technova.com', status: LeadStatus.NEW, value: 12500, lastContacted: '2023-10-24' },
  { id: '2', name: 'Sarah Jenkins', company: 'Global Logistics Inc', email: 's.jenkins@globallog.co', status: LeadStatus.QUALIFIED, value: 45000, lastContacted: '2023-10-22' },
  { id: '3', name: 'Marcus Chen', company: 'Quantum Dynamics', email: 'm.chen@quantum.io', status: LeadStatus.CONTACTED, value: 8200, lastContacted: '2023-10-25' },
  { id: '4', name: 'Elena Rodriguez', company: 'Starlight Retail', email: 'elena@starlight.es', status: LeadStatus.NEGOTIATION, value: 32000, lastContacted: '2023-10-20' },
  { id: '5', name: 'David Miller', company: 'Urban Dev Group', email: 'dmiller@urbandev.com', status: LeadStatus.CLOSED, value: 150000, lastContacted: '2023-10-15' },
];

export const MOCK_TASKS = [
  { id: '101', title: 'Prepare Q4 Sales Deck', assignee: 'John Doe', priority: 'High', status: TaskStatus.TODO },
  { id: '102', title: 'Follow up with TechNova', assignee: 'Jane Smith', priority: 'Medium', status: TaskStatus.IN_PROGRESS },
  { id: '103', title: 'Update CRM Contact List', assignee: 'Mike Ross', priority: 'Low', status: TaskStatus.DONE },
  { id: '104', title: 'Quarterly Review Meeting', assignee: 'Sarah Connor', priority: 'High', status: TaskStatus.TODO },
  { id: '105', title: 'Client Feedback Survey', assignee: 'Jane Smith', priority: 'Medium', status: TaskStatus.DONE },
];

export const PIPELINE_STAGES = [
  { id: 'p1', label: 'Prospecting', count: 24, value: 120000, color: 'bg-indigo-50' },
  { id: 'p2', label: 'Qualification', count: 18, value: 95000, color: 'bg-indigo-100' },
  { id: 'p3', label: 'Proposal', count: 12, value: 75000, color: 'bg-indigo-200' },
  { id: 'p4', label: 'Negotiation', count: 8, value: 210000, color: 'bg-indigo-400' },
  { id: 'p5', label: 'Closed Won', count: 42, value: 890000, color: 'bg-emerald-500' },
];

export const METRICS = [
  { label: 'Total Leads', value: '1,284', change: 12.5, trend: 'up', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10V7a4 4 0 00-8 0v4M5 7h14' },
  { label: 'Conversion Rate', value: '24.2%', change: 2.1, trend: 'up', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { label: 'Avg Deal Size', value: '$12,400', change: 5.4, trend: 'down', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Active Tasks', value: '48', change: 8.2, trend: 'up', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
];
