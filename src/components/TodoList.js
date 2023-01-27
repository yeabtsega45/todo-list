import React from "react";

function TodoList() {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  ///////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  return <div></div>;
}

export default TodoList;
