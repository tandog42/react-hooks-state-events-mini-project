import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function addedTask(e) {
    setText(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
   onTaskFormSubmit({ text, category });
  }
  const chosenCategory = (e) => setCategory(e.target.value);

  return (
    <form className="new-task-form" onSubmit={(e) => formSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={addedTask} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={chosenCategory}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
