import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Text from "../components/Text";

function Home({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === "") return;

    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, text: editText } : item
      )
    );

    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((item) => {
    if (filter === "active") return item.completed === false;
    return true;
  });

  const activeCount = todos.filter((item) => !item.completed).length;

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">TodoMatic</h1>
        <Text className="subtitle">What needs to be done?</Text>

        <div className="add-box">
          <Input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <Button onClick={addTodo} variant="add">
            Add
          </Button>
        </div>

        <div className="filter-box">
          <Button
            variant={filter === "all" ? "activeFilter" : "filter"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>

          <Button
            variant={filter === "active" ? "activeFilter" : "filter"}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>

          <Link to="/completed" className="filter-link">
            <Button variant="filter">Completed</Button>
          </Link>
        </div>

        <Text className="count-text">{activeCount} tasks remaining</Text>

        <div className="todo-list">
          {filteredTodos.map((item) => (
            <div key={item.id} className="todo-item">
              <div className="todo-top">
                <Checkbox
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                />

                {editingId === item.id ? (
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="Edit task"
                  />
                ) : (
                  <span
                    className={
                      item.completed ? "todo-text completed" : "todo-text"
                    }
                  >
                    {item.text}
                  </span>
                )}
              </div>

              <div className="todo-actions">
                {editingId === item.id ? (
                  <>
                    <Button variant="edit" onClick={() => saveEdit(item.id)}>
                      Save
                    </Button>
                    <Button variant="filter" onClick={cancelEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="edit"
                      onClick={() => startEdit(item.id, item.text)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="delete"
                      onClick={() => deleteTodo(item.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;