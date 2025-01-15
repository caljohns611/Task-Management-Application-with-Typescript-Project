import React, { useState } from 'react';
import { Task } from './types';

interface TaskDetailsProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TaskDetails;