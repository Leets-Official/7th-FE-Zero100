import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Text from "../components/Text";

function Completed({ todos, setTodos }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const completedTodos = todos.filter((item) => item.completed);

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

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="title">TodoMatic</h1>
        <Text className="subtitle">Completed tasks</Text>

        <div className="filter-box">
          <Link to="/" className="filter-link">
            <Button variant="filter">All</Button>
          </Link>

          <Link to="/" className="filter-link">
            <Button variant="filter">Active</Button>
          </Link>

          <Button variant="activeFilter">Completed</Button>
        </div>

        <Text className="count-text">{completedTodos.length} completed tasks</Text>

        <div className="todo-list">
          {completedTodos.map((item) => (
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
                  <span className="todo-text completed">{item.text}</span>
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

export default Completed;