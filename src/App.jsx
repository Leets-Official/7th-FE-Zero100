import { useState, useRef } from "react";
import { Routes, Route, Link } from "react-router";
import Text from "./Components/Text.jsx";
import Button from "./Components/Button.jsx";
import TodoList from "./Features/TodoList.jsx";
import TodoAdd from "./Features/TodoAdd.jsx";

function App() {
  const [tasks, setTasks] = useState ([
    { id: 0, title: "Eat", done: true},
    { id: 1, title: "Sleep" , done: false},
    { id: 2, title: "Repeat", done: false}
  ]);
  
  const nextId = useRef(3);
 
  const addTask = (input) => {
    const newTask = { id: nextId.current, title: input, done: false};
    setTasks([...tasks, newTask]);
    nextId.current += 1;
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id) ? { ...task, done: !task.done } : task));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle} : task));
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const remainingTasks = tasks.filter(task => !task.done).length;

  const allTasks = tasks;
  const activeTasks = tasks.filter(task => !task.done);
  const completedTasks = tasks.filter(task => task.done);

  return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-xl p-6">
        <Text tagName="h1" className="text-3xl font-bold text-center mb-2">TodoMatic</Text>
        
        <TodoAdd onAddTask={addTask}></TodoAdd>

        <div className="flex gap-2 mb-6">
          <Link to="/all" className="flex-1 bg-gray-500 text-white text-center py-3 rounded-md">
            <Button>All</Button>
          </Link>
          <Link to="/" className="flex-1 bg-gray-500 text-white text-center py-3 rounded-md">
            <Button>Active</Button>
          </Link>
          <Link to="/completed" className="flex-1 bg-gray-500 text-white text-center py-3 rounded-md">
            <Button>Completed</Button>
          </Link>
        </div>

        <Text tagName="h3" className="text-lg font-bold text-gray-800 mb-4">
          {remainingTasks} tasks remaining
        </Text>
      
        <Routes>
          <Route path="/all" element={
              <TodoList 
                tasks={allTasks} 
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            } 
          />

          <Route path="/" element={
              <TodoList 
                tasks={activeTasks} 
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            } 
          />
          
          <Route path="/completed" element={
              <TodoList 
                tasks={completedTasks} 
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            } 
          />
        </Routes>
      </div>
    </div>
  )
}

export default App;