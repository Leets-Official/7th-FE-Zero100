import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const Filters = {
    All: "all",
    Active: "active",
    Completed: "completed"
  }

  const keyCount = useRef(3)
  const completedCount = useRef(0)
  const nameText = useRef()
  const editText = useRef()
  const [selectedFilter, setFilter] = useState(Filters.All)
  const [editingId, setEditingId] = useState(0)
  const [tasks, setTasks] = useState([
    {id:1, isCompleted: false, taskName: "Eat"},
    {id:2, isCompleted: false, taskName: "Sleep"},
    {id:3, isCompleted: false, taskName: "Repeat"}
  ])

/*------------------------------------------------------------------------------------------*/

  const addTask = ()=> {
    keyCount.current++
    setTasks(prev => [...prev, {id: keyCount.current, isCompleted: false, taskName: nameText.current.value}])
  }

  const deleteTask = (id) => {
    tasks.map(task => {
      if (task.id === id) { 
        task.isCompleted && completedCount.current--
      } 
    })
    
    setTasks(prev => prev.filter(task => task.id != id))
  }

  const editTask = (id) => {
    if (id === editingId) { // 
      const copiedTasks = tasks.map(task => (task.id === id) ? {...task, taskName: editText.current.value} : task)
      setTasks(copiedTasks)
      setEditingId(0)
    } else {
      setEditingId(id)
    }
  }
  
  const filterTask = (task) => {
    if (selectedFilter === Filters.All) {
      return true
    } else if (selectedFilter === Filters.Active) {
      return !task.isCompleted
    } else if (selectedFilter === Filters.Completed) {
      return task.isCompleted
    }
  }

  const checkHandler = (id, isChecked) => {
    const copiedTasks = tasks.map(task => {
      if (task.id === id) { 
        isChecked ? completedCount.current++ : completedCount.current--
        return {...task, isCompleted: isChecked} 
      } else {return task}
    })

    setTasks(copiedTasks)
  } 

/*--------------------------------------------------------------------------------------------------*/

  return (
    <>
      <h1> TodoMatic </h1>
      <h2> What needs to be done? </h2>
      <div>
        <input ref={nameText}/>
        <button onClick={addTask}> Add </button>
      </div>
      <button onClick={()=>setFilter(Filters.All)}> Show all tasks </button>
      <button onClick={()=>setFilter(Filters.Active)}> Show active tasks </button>
      <button onClick={()=>setFilter(Filters.Completed)}> Show completed tasks </button>
      <h2>{tasks.length - completedCount.current} Task remaining </h2>
      <ul>
        {tasks.map((task) => (filterTask(task) === true) &&
          <li key={task.id}>
            {editingId === task.id ? 
              <div><input defaultValue={""} ref={editText}/></div>
              :
              <div><input defaultChecked={task.isCompleted} type="checkbox" onChange={e=>checkHandler(task.id, e.target.checked)}/> {task.taskName} </div>
            }
            <button onClick={()=>editTask(task.id)}> {editingId === task.id ? "Save" : `Edit ${task.taskName}`} </button>

            <button onClick={()=>deleteTask(task.id)}> Delete {task.taskName} </button>
          </li>
        )}
      </ul>
    </>
  )
}

export default App
