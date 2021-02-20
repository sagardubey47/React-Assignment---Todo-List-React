import React,{useState, useEffect} from "react";
import "./../styles/App.css";
import Taskarea from "./Textarea" 
import Add from "./Add"
import Task from "./Task"

function App() 
{    
    const [tasks , setTasks] = useState([]);
	const [edit, setEdit] = useState(false);

	 function handleAdd(newTask, resetState) {
		 
		if(newTask != "") {
        setTasks( prevTasks => {return [...prevTasks, newTask]});
		resetState();
	 }
	}

	 function onDelete(id) {
		
		 setTasks((prevTasks) => {
             return prevTasks.filter((task, index) => {
			 return index != id;
		 });
		 });
	 }

	 function handleEdit() {
		 setEdit(true);
	 } 
										 
	return (
	<div id="main">
	   <div className="container">
           <h2 id="heading" > todo list</h2>
		   {   
			   tasks.map((task, index) => {
                  return <Task key={index} id={index}  data={task} onDelete={onDelete} handleEdit={handleEdit} />
		       })
		   }
          
		  <Taskarea handleAdd={handleAdd} />
		  
	   </div>
	   
	</div>
	);
}


export default App;
