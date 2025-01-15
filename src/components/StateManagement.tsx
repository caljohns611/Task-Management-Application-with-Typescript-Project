import React, { useReducer } from 'react';
import { Task } from './types'

type TaskState = Task[];
type TaskAction = { type: 'ADD_TASK'; task: Task } | { type: 'DELETE_TASK'; id: string };

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

const TaskDashboard: React.FC = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  
  const addTask = (task: Task) => dispatch({ type: 'ADD_TASK', task });
  const deleteTask = (id: string) => dispatch({ type: 'DELETE_TASK', id });

  return (
    <div>
      <button onClick={() => addTask({ id: '4', title: 'New Task', status: 'Pending' })}>Create Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.status}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default taskReducer;