import React, { useState } from 'react';
import { Task } from './types';

const TaskForm: React.FC<{ onSubmit: (task: Task) => void }> = ({ onSubmit }) => {
  const [task, setTask] = useState<Task>({ id: '', title: '', status: 'Pending' });
  const [errors, setErrors] = useState<{ title?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: { title?: string } = {};

    if (!task.title) {
      valid = false;
      newErrors.title = 'Title is required';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(task);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      {errors.title && <span>{errors.title}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;