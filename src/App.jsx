import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Completed from "./pages/Completed";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Eat", completed: false },
    { id: 2, text: "Sleep", completed: false },
    { id: 3, text: "Repeat", completed: false },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home todos={todos} setTodos={setTodos} />} />
        <Route
          path="/completed"
          element={<Completed todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;