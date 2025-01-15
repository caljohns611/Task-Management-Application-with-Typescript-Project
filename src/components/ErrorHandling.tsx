const validateTask = (task: Task): string[] => {
    const errors: string[] = [];
    if (!task.title) errors.push('Title is required');
    return errors;
  };