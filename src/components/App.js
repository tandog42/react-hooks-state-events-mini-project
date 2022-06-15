import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(eachCategory) {
    setSelectedCategory(eachCategory);
  }

  function deleteTask(text) {
    setTasks(tasks.filter(task => task.text !== text));
  }
  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All");

  const onTaskFormSubmit = (newTask) => {
     setTasks([...tasks, newTask]);
  console.log(newTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES.filter(deleteCat => deleteCat !== "All")}
      />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
