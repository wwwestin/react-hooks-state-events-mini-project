import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");


  // setting state for text input and assigning category

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

// submit handler for form input referencing state and assigning categories to inpit
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

// change handlers declared as anonymous functions (WITH map that returns key for new category), submit handler attached to form,

export default NewTaskForm;
