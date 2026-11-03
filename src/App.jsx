import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { TaskSummary } from './components/TaskSummary';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-slate-100 text-slate-800 flex justify-center items-start p-4 sm:p-8">
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6 sm:p-8 mt-6">
          <header className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-slate-800">
              Task Manager
            </h1>
          </header>
          <main>
            <TaskInput />
            <TaskSummary />
            <TaskList />
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;