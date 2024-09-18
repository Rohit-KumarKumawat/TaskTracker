import React, { useState } from "react";
import TaskList from "./TaskList";
import "./TaskCard.css";

const TaskCard = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="task-card">
      <h2>Tasks</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskCard;
