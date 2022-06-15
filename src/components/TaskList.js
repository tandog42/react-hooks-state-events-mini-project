import React from "react";
import Task from "./Task";

function TaskList({ deleteTask, tasks }) {
  return (
    <div className="tasks">
      {tasks.map(eachTask => (
        <Task
          deleteTask={deleteTask}
          key={eachTask.text}
          text={eachTask.text}
          category={eachTask.category}
        />
      ))}
    </div>
  );
}

export default TaskList;
