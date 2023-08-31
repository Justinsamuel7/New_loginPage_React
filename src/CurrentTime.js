import React,{useState} from 'react';
import './style.css';

export default function CurrentTime() {

  const[time, setTime]=useState(new Date())
  setInterval(()=>{
    setTime(new Date())
  }, 1000)


  return (
    <>
    <h1>Current Time : {new Date(time).toLocaleTimeString()}</h1>
    </>
  );
}
