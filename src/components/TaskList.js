import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

/* TaskList will receive data passed in as props from App */
const TaskList = ({ tasks }) => {
  const getTaskListJSX = (tasks) => {
    /* Update the map function to modify props.tasks (Toggle Complete Part 2)*/
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      /* Add onUnregister prop type */
    })
  ).isRequired,
};

export default TaskList;
