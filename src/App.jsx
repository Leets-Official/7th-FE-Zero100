import { useRef, useState, useEffect } from 'react'
import {Button} from "./components/ui/Button.jsx"
import {Input} from "./components/ui/Input.jsx"
import {List} from "./components/List.jsx"
import { FliterButtons } from './components/FilterButtons.jsx'
import './App.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router'

function App() {

  const Filters = {
    All: "all",
    Active: "active",
    Completed: "completed"
  }
  
  const nameText = useRef()
  const [editingId, setEditingId] = useState(null)
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

/*------------------------------------------------------------------------------------------*/

  const addTask = () => {
    const newNameText = nameText.current.value
    if (newNameText.trim()) {
      nameText.current.value = ""
      setTasks(prev => [...prev, {id: crypto.randomUUID(), isCompleted: false, taskName: newNameText}])
    }
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const editTask = (id, text) => {
    if (id === editingId) {
      text.trim() && setTasks(prev => prev.map(task => (task.id === id) ? {...task, taskName: text} : task))
      setEditingId(null)
    } else {
      setEditingId(id)
    }
  }

  const cancelEditTask = () => {
    setEditingId(null)
  }
  
  const filterTasks = (filter) => {
    if (filter === Filters.All) {
      return tasks
    } else if (filter === Filters.Active) {
      return tasks.filter(task => !task.isCompleted)
    } else if (filter === Filters.Completed) {
      return tasks.filter(task => task.isCompleted)
    }
  }

  const countCompleted = (id, isChecked) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, isCompleted: isChecked } : task
    ))
  } 

// /*--------------------------------------------------------------------------------------------------*/

  return (
    <BrowserRouter>
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className=' bg-white py-7 w-109 flex flex-col items-center my-9 rounded-md shadow-xl'>
        <h1 className='font-bold text-3xl mb-5'> TodoMatic </h1>
        <h2 className='text-gray-600 mb-4.5'> What needs to be done? </h2>
    
        {/* task 추가 input&button */}
        <Input placeholder="Add a new task" className='w-94 h-10 p-1.5 outline outline-gray-300 rounded mb-2.5' ref={nameText}/>
        <Button className='w-94 h-10 bg-black text-white font-bold rounded mb-4' onClick={addTask}> Add </Button>
    
        {/* 필터 선택 버튼 */}
        <FliterButtons/>
    
        {/* 남은 Task 수 표시 */}
        <h2 className='w-94 mt-3.5 mb-2.5 font-bold'>{tasks.filter(task => !task.isCompleted).length} tasks remaining </h2>
    
        {/* 필터별 리스트 */}
        <Routes>
          <Route path="/" element={<Navigate to="/all" replace/>} />
          <Route path="/all" element={
            <List 
              tasks={filterTasks(Filters.All)}
              checkHandler={countCompleted}
              editTask={editTask}
              deleteTask={deleteTask}
              editingId={editingId}
              cancelEditTask={cancelEditTask}
            />
          }/>
  
          <Route path="/active" element={
            <List 
              tasks={filterTasks(Filters.Active)}
              checkHandler={countCompleted}
              editTask={editTask}
              deleteTask={deleteTask}
              editingId={editingId}
              cancelEditTask={cancelEditTask}
            />
          }/>
  
          <Route path="/completed" element={
            <List 
              tasks={filterTasks(Filters.Completed)}
              checkHandler={countCompleted}
              editTask={editTask}
              deleteTask={deleteTask}
              editingId={editingId}
              cancelEditTask={cancelEditTask}
            />
          }/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
