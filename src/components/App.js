import React,{useState, useEffect} from "react";
import "./../styles/App.css";
import Taskarea from "./Textarea" 
import Add from "./Add"
import Task from "./Task"

function App() 
{    
    const [tasks , setTasks] = useState([]);

	 function handleAdd(newTask, resetState) {
		 
		if(newTask.trim().length) {
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

	 function updateEdit(id, value) {
		
		if(value.trim().length) {
		 let newtasks = tasks.slice(0, id);
		 newtasks.push(value);
		 tasks.slice(id+1).forEach(item => newtasks.push(item));
		 
		 setTasks(newtasks);
		}
	 }

										 
	return (
	<div id="main">
	   <div className="container">
           <h2 id="heading" > todo list</h2>
		   {   
			   tasks.map((task, index) => {
                  return <Task key={index} id={index}  data={task} onDelete={onDelete} updateEdit={updateEdit} />
		       })
		   }
          
		  <Taskarea handleAdd={handleAdd} />
		  
	   </div>
	   
	</div>
	);
}


export default App;
