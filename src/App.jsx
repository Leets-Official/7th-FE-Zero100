import { useRef, useState } from 'react'
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

  
  const keyCount = useRef(3)
  const [completedCount, setCompletedCount] = useState(0)
  const nameText = useRef()
  const [editingId, setEditingId] = useState(0)
  const [tasks, setTasks] = useState([
    {id:1, isCompleted: false, taskName: "Eat"},
    {id:2, isCompleted: false, taskName: "Sleep"},
    {id:3, isCompleted: false, taskName: "Repeat"}
  ])

/*------------------------------------------------------------------------------------------*/

  const addTask = ()=> {
    keyCount.current++
    nameText.current.value.trim() && setTasks(prev => [...prev, {id: keyCount.current, isCompleted: false, taskName: nameText.current.value}])
  }

  const deleteTask = (id) => {
    tasks.map(task => {
      if (task.id === id) { 
        task.isCompleted && setCompletedCount(prev => --prev)
      } 
    })
    
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
  
  const filterTasks = (filter) => {
    if (filter === Filters.All) {
      return tasks
    } else if (filter === Filters.Active) {
      return tasks.filter(task => !task.isCompleted)
    } else if (filter === Filters.Completed) {
      return tasks.filter(task => task.isCompleted)
    }
  }

  const checkHandler = (id, isChecked) => {
    const copiedTasks = tasks.map(task => {
      if (task.id === id) { 
        isChecked ? setCompletedCount(prev => ++prev) : setCompletedCount(prev => --prev)
        return {...task, isCompleted: isChecked} 
      } else {return task}
    })

    setTasks(copiedTasks)
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
        <h2 className='w-94 mt-3.5 mb-2.5 font-bold'>{tasks.length - completedCount} tasks remaining </h2>
    
        {/* 필터별 리스트 */}
        <Routes>
          <Route path="/" element={<Navigate to="/all" replace/>} />
          <Route path="/all" element={
            <List 
              tasks={filterTasks(Filters.All)}
              checkHandler={checkHandler}
              editTask={editTask}
              deleteTask={deleteTask}
              editingId={editingId}
            />
          }/>
  
          <Route path="/active" element={
            <List 
              tasks={filterTasks(Filters.Active)}
              checkHandler={checkHandler}
              editTask={editTask}
              deleteTask={deleteTask}
              editingId={editingId}
            />
          }/>
  
          <Route path="/completed" element={
            <List 
              tasks={filterTasks(Filters.Completed)}
              checkHandler={checkHandler}
              editTask={editTask}
              deleteTask={deleteTask}
              editingId={editingId}
            />
          }/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
