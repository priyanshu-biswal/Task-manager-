import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ACTION_TYPES } from '../context/taskReducer';

export const TaskInput = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      payload: text.trim(),
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
      >
        Add Task
      </button>
    </form>
  );
};