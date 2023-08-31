import React,{useState} from 'react';
import './style.css';
import Timer from "./Timer"
import CurrentTime from "./CurrentTime"
import ToDoList from "./ToDoList"
import Api from "./Api"


export default function HomePage() {

  const [page, setPage]=useState(1)

  const changePage = (num)=>{
    setPage(num)
  }
  
  const subComponent =()=>{
    if(page==1)
    {
      return <Timer/>
    }else if(page==2)
    {
      return <CurrentTime/>
    }else if(page==3)
    {
      return <ToDoList/>
    }else if(page==4)
    {
      return <Api/>
    }
  }



  return (
    <div>
      <h1 id="homepageheading">Home Page</h1>
      <div id="nav">
        <button onClick={()=>changePage(1)}>Timer</button>
        <button onClick={()=>changePage(2)}>Current Time</button>
        <button onClick={()=>changePage(3)}>To-Do List</button>
        <button onClick={()=>changePage(4)}>Api Call</button>
      </div>
      <div id="subComponent">
      {subComponent()}
      </div>
    </div>
  )
}
