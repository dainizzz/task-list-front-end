import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

// Directions for creating the single source of truth (aka keeping data in one place )
  // isComplete needs to be in App.js - (was already done in original repo)
  // update propTypes in TaskList & Task - (was already done in original repo)
  // Ensure TaskList Passes the New App Data (aka isComplete) - (already done in original repo)
  // Use isComplete as a prop in Student


// const Task = ({
//   id,
//   title,
//   isComplete,
//   onUpdate,
//   onDeleteCallback,
// }) => 

const Task = (tasks) => {
  const onUpdateTaskButtonClick = () => {
    const updatedTask = {
      id: tasks.id,
      title: tasks.title,
      isComplete: !tasks.isComplete,
      onDeleteCallback: tasks.onDelete

    };

    tasks.onUpdate(updatedTask);
  };

  // changed line 32 to have Task.isComplete - finally seeing the site
  const buttonClass = Task.isComplete ? 'tasks__item__toggle--completed' : '';


  const handleRemoveClicked = () => {
    tasks.onDeleteCallback(tasks.id);
  };

  // added line 18 into Task (was previously outside)
  return (
    <div>
      <li className="tasks__item">
        <button className={`tasks__item__toggle ${buttonClass}`} 
        onClick={() => onUpdateTaskButtonClick(tasks.id)}>{tasks.title}</button>
        <button className="tasks__item__remove button"
        onClick={handleRemoveClicked}>x</button>
    </li>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Task;