import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const { state } = useContext(TaskContext);

  if (state.tasks.length === 0) {
    return (
      <p className="text-center text-slate-400 my-8 italic">
        No tasks found. Add a task to get started!
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {state.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};