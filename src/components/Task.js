import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// Remove state from here
const Task = ({ id, title, isComplete }) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  // add const Task = (props) => {return inside here}
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // add button using Props for is.Complete (<button onClick={isComplete}> Complete Task) (Toggle Complete Part 3)
        onClick={() => setComplete(!complete)}
        // add button using Props for onUnregister
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  // add isComplete prop thing
  // Add onUnregister prop type
};

export default Task;
