import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    // {id: 1, text:"Eat Breakfast",},
    // {id: 2, text:"Take a Shower",},
    // {id: 3, text:"Walk the Dog",}
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
  if (newTask.trim() !== "") {
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
    };
    setTasks(t => [...t, newTaskObj]);
    setNewTask("");
  }
}

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function moveTaskUp(index) {
    const updatedTasks = [...tasks]
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    const updatedTasks = [...tasks]
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <span className="text">{task.text}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
