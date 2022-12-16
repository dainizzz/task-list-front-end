import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';


// Finish toggle
const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

const Task = ({id, title, isComplete, onUpdate}) => {

  
  // add const Task = (props) => {return inside here}
  return (
    <li className="tasks__item">
      <button onClick={() => onUpdate(id)}>{title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
  // add isComplete prop thing
  // Add onUnregister prop type
};

export default Task;


        /* /* // className={`tasks__item__toggle ${buttonClass}`}
        // add button using Props for is.Complete (<button onClick={isComplete}> Complete Task) (Toggle Complete Part 3)
        // onClick={() => props.onUpdate(!complete)}
        // add button using Props for onUnregister */
  