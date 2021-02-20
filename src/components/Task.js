import React, {useState} from 'react'

function Task({data, onDelete, id, updateEdit}) {

    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState("");
    const [flag, setFlag] = useState(true);

    function handleEdit() {
        setEdit(true);
    }

    function handleChange(event) {
       
      setValue(event.target.value);
      if(value.trim().length) {
          setFlag(false);
      } else {
          setFlag(true);
      }
    }

    function add(id) {
        updateEdit(id, value);
        setEdit(false);
    }
    
    return (
        edit ? <><textarea value={value} onChange={handleChange} className="editTask"></textarea> 
        <button disabled={flag} onClick={()=> {add(id)}} className="saveTask"> add</button></>:
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
