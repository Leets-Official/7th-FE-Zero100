import { useState } from "react";
import Text from "../Components/Text.jsx";
import Input from "../Components/Input.jsx";
import Button from "../Components/Button.jsx";

export default function TodoAdd({ onAddTask }){
    const [input, setInput] = useState ("");

    const handleClick = () => {
    if (!input.trim()) return;
    onAddTask(input);
    setInput("");
  };

  return(
    <div className="mb-6">
        <Text tagName="h2" className="text-center mb-4 text-base">What needs to be done?</Text>
        <Input value={input} onChange={setInput} className="w-full border border-gray-300 p-3 mb-3 rounded-md focus:outline-none"/>
        <Button onClick={handleClick} className="w-full bg-black text-white font-bold py-3 rounded-md">Add</Button>
    </div>
  )
}