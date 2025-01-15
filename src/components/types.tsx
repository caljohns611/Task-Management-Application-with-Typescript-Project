export interface Task {
    id: string;
    title: string;
    status: 'Pending' | 'In Progress' | 'Completed';
  }
  
  export type TaskAction =
    | { type: 'ADD_TASK'; task: Task }
    | { type: 'DELETE_TASK'; id: string }
    | { type: 'UPDATE_TASK'; task: Task };