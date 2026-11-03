import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ACTION_TYPES } from '../context/taskReducer';

export const TaskSummary = () => {
  const { state, dispatch } = useContext(TaskContext);

  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter((task) => task.completed).length;

  const handleClearAll = () => {
    if (totalTasks > 0 && window.confirm('Are you sure you want to delete all tasks?')) {
      dispatch({ type: ACTION_TYPES.CLEAR_ALL });
    }
  };

  return (
    <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6 text-sm text-slate-600">
      <div className="space-x-4">
        <span>
          Total: <strong className="text-slate-900">{totalTasks}</strong>
        </span>
        <span>
          Completed: <strong className="text-emerald-600">{completedTasks}</strong>
        </span>
      </div>
      {totalTasks > 0 && (
        <button
          onClick={handleClearAll}
          className="bg-slate-500 hover:bg-slate-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          Clear All
        </button>
      )}
    </div>
  );
};