import React from "react";

function Task({ text, category, onDeleteTask }) {

  function handleClick() {
    onDeleteTask(text);
  }

  // click handler for deleting task referencing change handler passed as props
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

// assigning click handler

export default Task;
