import { useState, useRef } from "react";
import Text from "./Components/Text";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Input from "./Components/Input";

function App() {
  const [tasks, setTasks] = useState ([
    { id: 0, title: "Eat", done: true},
    { id: 1, title: "Sleep" , done: false},
    { id: 2, title: "Repeat", done: false}
  ]);
  
  const [input, setInput] = useState ("");
  const nextId = useRef(3);

  const [filtering, setFiltering] = useState("allTasks");
  
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const FILTER = {
    allTasks: () => true,
    activeTasks: (task) => !task.done,
    completedTasks: (task) => task.done
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!input) return;
    const newTask = { id: nextId.current, title: input, done: false};
    setTasks([...tasks, newTask]);
    setInput("");
    nextId.current += 1;
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id) ? { ...task, done: !task.done } : task));
  };

  const saveEditedTask = (id) => {
    if (!editTitle) return;
    setTasks(tasks.map(task => task.id === id ? { ...task, title: editTitle} : task));
    setEditId(null);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const remainingTasks = tasks.filter(task => !task.done).length;

  const filteredTasks = tasks.filter(FILTER[filtering]);
  return(
    <div>
      <Text tagName="h1">TodoMatic</Text>
      
      <div>
        <Text tagName="h2">What needs to be done?</Text>
        <Input value={input} onChange={setInput}/>
        <Button onClick={addTask}>Add</Button>
      </div>

      <div>
        <Button onClick={() => setFiltering("allTasks")}>Show all tasks</Button>
        <Button onClick={() => setFiltering("activeTasks")}>Show active tasks</Button>
        <Button onClick={() => setFiltering("completedTasks")}>Show completed tasks</Button>
      </div>

      <Text tagName="h3">{remainingTasks} tasks remaining</Text>
    
      <ul>
        {filteredTasks.map((task) => {
          if (editId === task.id){
            return (
              <li key={task.id}>
                <Input value={editTitle} onChagne={setEditTitle}/>
                <Button onClick={() => saveEditedTask(task.id)}>Save Edit</Button>
              </li>
            )
          }
          return(
            <li key={task.id}>
              <Checkbox
                id={task.id}
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <Text tagName="span">{task.title}</Text>
              <div>
                <Button onClick = {() => {
                  setEditId(task.id);
                  setEditTitle(task.title);
                }}>
                  Edit {task.title}
                </Button>
                <Button onClick={() => deleteTask(task.id)}>Delete {task.title}</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default App;