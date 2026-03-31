import { useState } from 'react'
import {Checkbox} from "./ui/Checkbox.jsx"
import {Text} from "./ui/Text.jsx"
import {Button} from "./ui/Button.jsx"
import {Input} from "./ui/Input.jsx"

export const List = ({tasks, checkHandler, editTask, deleteTask, editingId}) => {
    const [editText, setEditText] = useState("")
    return (
        <ul>
          {tasks.map((task) =>
            <li key={task.id} className='w-94 px-3.5 py-2.5 mb-4 outline outline-gray-300 rounded'>
              {editingId === task.id ? 
                <div><Input defaultValue="" className='px-1 outline outline-gray-300 rounded' value={editText} onChange={e => setEditText(e.target.value)}/></div>
                :
                <div className='flex items-center'>
                  <Checkbox defaultChecked={task.isCompleted} className='w-5 h-5 mr-2' onChange={e=>checkHandler(task.id, e.target.checked)} /> 
                  <Text className='font-medium'>{task.taskName}</Text>
                </div>
              }
              <div className='mt-2 mb-1'>
                <Button className='w-42 inline-block h-7.5 mr-3 border border-gray-300 rounded' onClick={()=>editTask(task.id, editText)}> {editingId === task.id ? "Save" : "Edit"} </Button>
                <Button className='w-42 inline-block h-7.5 bg-red-500 text-white rounded' onClick={()=>deleteTask(task.id)}> Delete </Button>
              </div>
            </li>
          )}
        </ul>
    )
}