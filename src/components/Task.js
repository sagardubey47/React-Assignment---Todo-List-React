import React, {useState} from 'react'

function Task({data, onDelete, id, updateEdit}) {

    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState("");

    function handleEdit() {
        setEdit(true);
    }

    function handleChange(event) {
      setValue(event.target.value);
      console.log(value);
    }

    function add(id) {
        updateEdit(id, value);
        setEdit(false);
    }
    
    return (
        edit ? <><textarea value={value} onChange={handleChange} className="editTask"></textarea> 
        <button onClick={()=> {add(id)}} className="saveTask"> add</button></>:
        <div className="row list" >
           {id +1}.{data}
           <div style={{float:"right"}}>
           <button onClick={handleEdit} className="edit">Edit</button>
           <button onClick={()=> {onDelete(id)}} className="delete">Delete</button>
           </div>
        </div>
    )
}

export default Task
