import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

// Passing down event handlers:
  //  update proptypes - expects a prop names onUpdateTask -DONE
  // send onUpdateTask function from Tasklist to Task


const TaskList = ({tasks, onUpdateTask}) => {
  // console.log({tasks})
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          // it is tasks.onUpdateTask because the value of onUpdate will be what was
          // passed to tasks.onUpdateTask (tasks being the arbitrary name for props)
          onUpdate={onUpdateTask}
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
    })).isRequired,
    onUpdateTask: PropTypes.func.isRequired,
};

export default TaskList;
