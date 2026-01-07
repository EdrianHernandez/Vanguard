
export enum LeadStatus {
  NEW = 'New',
  CONTACTED = 'Contacted',
  QUALIFIED = 'Qualified',
  NEGOTIATION = 'Negotiation',
  CLOSED = 'Closed'
}

export enum TaskStatus {
  TODO = 'To-Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done'
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  status: LeadStatus;
  value: number;
  lastContacted: string;
}

export interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High';
  status: TaskStatus;
}

export interface PipelineStage {
  id: string;
  label: string;
  count: number;
  value: number;
  color: string;
}

export interface MetricData {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon: string;
}
