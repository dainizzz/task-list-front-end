import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const apiToJson = task => {
  const {description, id, is_complete: isComplete, title} = task;

  return {description, id, isComplete, title};
};

const taskAsync = async () => {
  try {
    const respone = await axios.get(`${baseUrl}/tasks`);
    return respone.data.map(apiToJson);
  } catch (err) {
    console.log(err);
  }
};

const updateAsync = async (id, markComplete) => {
  const endpoint = markComplete ? `mark_complete` : 'mark_incomplete';

  try {
    const response = await axios.patch(`${baseUrl}/tasks/${id}/${endpoint}`);

    return apiToJson(response.data.task);
  } catch(err) {
    console.log(err);
  }
};

const deleteAsync = async id => {
  try {
    await axios.delete(`${baseUrl}/tasks/${id}`);
  } catch (err) {
    console.log(err);
  }
}
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

  const reloadTask = async () => {
    try {
      const tasks = await taskAsync();
      setTaskData(tasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    reloadTask();
  }, []);

  

  // change updateTaskData for async
  const updateTaskData = async id => {
    const task = tasks.find(task => task.id === id);

    if (!task) {return;}

    try {
      const newTask = await updateAsync(id, !task.isComplete);
      setTaskData(prevTasks => {
        return prevTasks.map(task => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // need to write to async delete specific task 

  
    const tasks = taskData.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTaskData(tasks);
  };

  const deleteTask = (id) => {
    const newTasks = taskData.filter((task) => task.id !== id);
    setTaskData(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={taskData}
              onUpdateTask={updateTaskData}
              onDeleteCallback={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
