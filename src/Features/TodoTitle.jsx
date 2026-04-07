import { useState } from "react";
import Checkbox from "../Components/Checkbox.jsx";
import Text from "../Components/Text.jsx";
import Button from "../Components/Button.jsx";
import Input from "../Components/Input.jsx";

export default function TodoTitle ({ task, onToggle, onDelete, onEdit }){
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleSave = () =>{
        if (!editTitle.trim()) return;
        onEdit(task.id, editTitle);
        setIsEditing(false);
    };

    if (isEditing) {
        return(
            <li className="border border-gray-200 rounded-md p-4 mb-4 bg-white list-none">
                <Input value={editTitle} onChange={setEditTitle}
                className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:border-black"/>
                <Button onClick={handleSave} className="w-full bg-black text-white py-2 rounded-md font-medium">Save Edit</Button>
            </li>
        )
    }
    return (
        <li key={task.id} className="border border-gray-200 rounded-md p-4 mb-4 bg-white list-none">
            <div className="flex items-center gap-3 mb-4">
                <Checkbox
                    id={task.id}
                    checked={task.done}
                    onChange={() => onToggle(task.id)}
                    className="w-5 h-5"
                />
                <Text tagName="span" className="text-lg">{task.title}</Text>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => setIsEditing(true)} className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md font-medium">Edit</Button>
                <Button onClick={() => onDelete(task.id)} className="flex-1 bg-red-600 text-white py-2 rounded-md font-medium">Delete</Button>
            </div>
        </li>
    );
}