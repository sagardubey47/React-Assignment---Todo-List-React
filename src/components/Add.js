import React from 'react'

export default function Add({handleAdd, newTask, resetState}) {
    console.log(newTask);
    return (
        <button id="btn" onClick={()=>{handleAdd(newTask, resetState)}}>ADD</button>
    )
}
