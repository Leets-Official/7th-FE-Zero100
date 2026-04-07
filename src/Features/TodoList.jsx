import TodoTitle from "./TodoTitle.jsx";

export default function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoTitle 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </ul>
  );
}