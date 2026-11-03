# Task Manager

A lightweight React + Vite task manager that helps you add, edit, complete, and delete tasks. The app includes task summaries and a responsive layout for tracking everyday work.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Edit existing tasks inline
- Delete individual tasks
- Clear all tasks with confirmation
- View total and completed task counts
- Responsive UI built with React and Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal to use the app.

## Production Build

```bash
npm run build
```

This generates a production-ready build in the `dist` folder.

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  components/
    TaskInput.jsx
    TaskItem.jsx
    TaskList.jsx
    TaskSummary.jsx
  context/
    TaskContext.jsx
    taskReducer.js
```

## Notes

The app stores task state in a React context reducer, so the task list persists while the page remains mounted during a session.
