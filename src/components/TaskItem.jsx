import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ACTION_TYPES } from '../context/taskReducer';

export const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleToggle = () => {
    dispatch({ type: ACTION_TYPES.TOGGLE_TASK, payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: ACTION_TYPES.DELETE_TASK, payload: task.id });
  };

  const handleSave = () => {
    if (!editText.trim()) return;
    dispatch({
      type: ACTION_TYPES.EDIT_TASK,
      payload: { id: task.id, newText: editText.trim() },
    });
    setIsEditing(false);
  };

  return (
    <li
      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all duration-200 gap-3 ${
        task.completed
          ? 'bg-slate-100 border-slate-200'
          : 'bg-white border-slate-200 hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="w-5 h-5 accent-blue-600 cursor-pointer rounded focus:ring-blue-500"
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-3 py-1 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-slate-800"
            autoFocus
          />
        ) : (
          <span
            className={`text-base break-words transition-colors ${
              task.completed
                ? 'line-through text-slate-400'
                : 'text-slate-700'
            }`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 self-end sm:self-auto">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-3 py-1.5 rounded-md shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            disabled={task.completed}
            className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-semibold px-3 py-1.5 rounded-md shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-3 py-1.5 rounded-md shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          Delete
        </button>
      </div>
    </li>
  );
};