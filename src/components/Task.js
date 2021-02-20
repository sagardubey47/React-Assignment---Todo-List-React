import React from 'react'

function Task({data, onDelete, id, handleEdit}) {
    
    return (
        
        <div className="row" className="list">
           {id }.{data}
           <div style={{float:"right"}}>
           <button onClick={handleEdit} className="edit">Edit</button>
           <button onClick={()=> {onDelete(id)}} className="delete">Delete</button>
           </div>
        </div>
    )
}

export default Task
