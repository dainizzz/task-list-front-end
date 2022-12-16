import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {

  const [taskData, setTaskData] = useState(TASKS);
  /* Function to Update Task isComplete Goes Here (Toggle Complete Part 1)
      useState
      mapping to update the task data
      use id to select the correct task to update*/ 
      // pass prop

  // const [complete, setComplete] = useState(isComplete);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';


  const updateTaskData = updatedTask => {
    const tasks = taskData.map(task => {
      if (task.id === updatedTask.id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTaskData(tasks);
  };






  // Function to unregister task using filter

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} onUpdateTask={updateTaskData} />}</div>

      </main>
    </div>
  );
};

export default App;
