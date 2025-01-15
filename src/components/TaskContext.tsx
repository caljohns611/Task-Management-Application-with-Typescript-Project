import React, { createContext, useContext, useReducer } from 'react';
import { Task, TaskAction } from './types';

type TaskContextType = {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const initialState: Task[] = [];

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.id);
    case 'UPDATE_TASK':
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    default:
      return state;
  }
};

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
