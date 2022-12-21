import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (tasks) => {
  const onUpdateTaskButtonClick = () => {
    const updatedTask = {
      id: tasks.id,
      title: tasks.title,
      isComplete: !tasks.isComplete,
      onDeleteCallback: tasks.onDelete,
    };

    tasks.onUpdate(updatedTask);
  };

  // updated Task.isComplete to tasks.isComplete to access the value needed
  const buttonClass = tasks.isComplete ? 'tasks__item__toggle--completed' : '';

  const handleRemoveClicked = () => {
    tasks.onDeleteCallback(tasks.id);
  };

  return (
    <div>
      <li className="tasks__item">
        <button
          className={buttonClass}
          onClick={() => onUpdateTaskButtonClick(tasks.id)}
        >
          {tasks.title}
        </button>
        <button
          className="tasks__item__remove button"
          onClick={handleRemoveClicked}
        >
          x
        </button>
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
