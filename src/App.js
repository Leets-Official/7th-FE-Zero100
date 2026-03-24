import { useState } from 'react';
import { Text } from './components/Text';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, name: 'Eat', completed: false },
    { id: 1, name: 'Sleep', completed: false },
    { id: 2, name: 'Repeat', completed: false },
  ]);

  const [newName, setNewName] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (!newName.trim()) return;//공백 입력시 추가 안 함

    const newTask = {
      id: Date.now(),//겹치지 않는 고유한 id를 만들 수 있음
      name: newName,
      completed: false,
    };

    setTasks([...tasks, newTask]);//spread사용 기존 배열에 새 항목 추가
    setNewName('');//spread사용 기존 배열에 새 항목 추가
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));//클릭한 id만 제외하고 남김
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }: task//클릭시 체크 바 변경
      )
    );
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.name);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: editText } : task
      )
    );

    setEditId(null);
    setEditText('');
  };

  return (
    <div>
      <h1>TodoMatic</h1>

      <div>
        <h2>What needs to be done?</h2>
        <Input value={newName} onChange={setNewName} />
        <Button onClick={addTask}>Add</Button>
      </div>

      <h3>{tasks.filter((t) => !t.completed).length} tasks remaining</h3>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              {editId === task.id ? (
                <>
                  <Input value={editText} onChange={setEditText} />
                  <Button onClick={() => saveEdit(task.id)}>Save</Button>
                </>
              ) : (
                <Text>{task.name}</Text>
              )}
            </div>

            {}
            <div>
              {editId !== task.id && (
                <Button onClick={() => startEdit(task)}>
                  {task.name} Edit
                </Button>
              )}
              <Button onClick={() => deleteTask(task.id)}>
                {task.name} Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;