import React, { useState } from 'react';
// learn lesson says that this isn't needed anymore but doesn't work without

import PropTypes from 'prop-types';

import './Task.css';
// import TaskList from './TaskList';

// Directions for creating the single source of truth (aka keeping data in one place )
  // isComplete needs to be in App.js - (was already done in original repo)
  // update propTypes in TaskList & Task - (was already done in original repo)
  // Ensure TaskList Passes the New App Data (aka isComplete) - (already done in original repo)
  // Use isComplete as a prop in Student


// Deleted the line that initialized the piece of state isComplete with useState


const Task = (tasks) => {
    // write function to update task when button is clicked
  const onUpdateTaskButtonClick = () => {
    const updatedTask = {
      id: tasks.id,
      title: tasks.title,
      isComplete: !tasks.isComplete
    };

    tasks.onUpdate(updatedTask);
  };

  // changed line 32 to have Task.isComplete - finally seeing the site
  const buttonClass = Task.isComplete ? 'tasks__item__toggle--completed' : '';

  // added line 18 into Task (was previously outside)
  return (
    <li className="tasks__item">


      <button className={`tasks__item__toggle ${buttonClass}`} 
      onClick={onUpdateTaskButtonClick}>{tasks.title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Task;