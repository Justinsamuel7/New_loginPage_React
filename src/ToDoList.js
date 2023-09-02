import React,{useState} from 'react';
import './style.css';

export default function ToDoList() {

  const [taskArr, setTaskArr]=useState([])
  const [taskName, setTaskName]=useState("")

  const taskNameSetter = (e)=>{
    setTaskName(e.target.value)
  }

  const addToTaskArray = ()=>{

    setTaskArr([...taskArr, {"task":taskName, "done":false}])
    setTaskName("")
  }
  const deleteFromAray = (index)=>{
    let TempArray=[...taskArr]
    TempArray.splice(index, 1)
    setTaskArr(TempArray)
  }
  const markDone = (index)=>{
    let TempArray=[...taskArr]
    TempArray[index]["done"]=true
    setTaskArr(TempArray)
    console.log(taskArr)
  }


  return (
    <>
    <h1>To Do List</h1>
    <input type="text" placeholder="Task Name" onChange={taskNameSetter} value={taskName}/> <button onClick={addToTaskArray}>Add</button>
    <div>
      <h3>Tasks</h3>
      <div class="Tasks">
      {taskArr.map((taskObj, index)=>{
        return(
          <div key={index} class={taskObj.done? "individualTaskDone":"individualTask"}><span>{index+1}. {taskObj.task}</span> <div><button onClick={()=>markDone(index)}>Done</button> <button onClick={()=>deleteFromAray(index)}>Delete</button></div></div>
        )
      })}
      </div>
    </div>
    </>
  );
}
