import { useState } from "react";
import "./App.css";
// import { Planets } from './Planets'

function App() {
  // const planets = [
  //   { name:'Mercury', isGasPlanet: false },
  //   { name:'Venus', isGasPlanet: false },
  //   { name:'Earth', isGasPlanet: false },
  //   { name:'Mars', isGasPlanet: false },
  //   { name:'Jupiter', isGasPlanet: true },
  //   { name:'Saturn', isGasPlanet: true },
  //   { name:'Uranus', isGasPlanet: true },
  //   { name:'Neptune', isGasPlanet: true },
  // ]
  
  // return (
  //   <div>
  //     {planets.map((planet, key) => (
  //       <Planets name={planet.name} isGasPlanet={planet.isGasPlanet} />
  //     ))}
  //   </div>
  // );

  // const[count,setCount] = useState(0);
  // return(
  //   <div>
  //     <button onClick={
  //       () => {
  //         setCount(count + 1);
  //       }
  //     }>Increase</button>

  //     <button onClick={() =>{
  //       setCount(count - 1);
  //     }}>Decrease</button>

  //     <button onClick={() =>{
  //       setCount(0);
  //     }}>Set 0</button>

  //     <h1>{count}</h1>
  //   </div>
    
  // );

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    setTodoList([...todoList, task]);
    setNewTask(""); // Clear input field
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>To Do List</h1>
      <div className="input-container">
        <input type="text" value={newTask} onChange={handleChange} placeholder="Enter a task..." />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list-container">
        {todoList.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span>{task.taskName}</span>
            <div className="task-buttons">
              <button className="complete-btn" onClick={() => completedTask(task.id)}>
                ✅
              </button>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
