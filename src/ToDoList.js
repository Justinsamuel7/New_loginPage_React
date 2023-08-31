import React,{useState} from 'react';
import './style.css';

export default function ToDoList() {

  const [taskArr, setTaskArr]=useState([])
  const [taskName, setTaskName]=useState("")

  const taskNameSetter = (e)=>{
    setTaskName(e.target.value)
  }

  const addToTaskArray = ()=>{
    setTaskArr([...taskArr, taskName])
    setTaskName("")
  }
  const deleteFromAray = (index)=>{
    let TempArray=[...taskArr]
    TempArray.splice(index, 1)
    setTaskArr(TempArray)

  }
  return (
    <>
    <h1>To Do List</h1>
    <input type="text" placeholder="Task Name" onChange={taskNameSetter} value={taskName}/> <button onClick={addToTaskArray}>Add</button>
    <div>
      <h3>Tasks</h3>
      <div class="Tasks">
      {taskArr.map((task, index)=>{
        return(
          <div key={index} class="individualTask"><span>{task}</span> <button>Done</button> <button onClick={()=>deleteFromAray(index)}>Delete</button></div>
        )
      })}
      </div>
    </div>
    </>
  );
}
