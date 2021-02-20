import React,{useState} from 'react'
import Add from "./Add"

export default function Textarea({handleAdd}) {

     const [state, setState] = useState("");

     function handleChange(event) {
         setState(event.target.value);
     }

     function resetState() {
         setState("");
     }

    return (
        <>
        <textarea id="task" value={state} onChange={handleChange}></textarea>
        <Add handleAdd={handleAdd} newTask = {state} resetState={resetState}/>
        </>
    )
}
