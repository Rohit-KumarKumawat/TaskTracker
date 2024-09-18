import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
