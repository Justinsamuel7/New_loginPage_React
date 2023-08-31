import React,{useState} from 'react';
import './style.css';
import HomePage from "./HomePage"

export default function CheckLogin() {

  const [isLogin, setIsLogin]=useState(false)
  const [showpass, setShowpass]=useState(false)
  const [usrInfo, setUsrInfo]=useState(
    {
      username:"",
      password:""
    })
  const [showError, setShowError]=useState("")

  let ExistingUsers=[
    {
      username:"Justin",
      password:"Justin@49"
    },
    {
      username:"Fede",
      password:"Fede@15"
    },
    {
      username:"Vini",
      password:"Vini@7"
    },
    {
      username:"Jude",
      password:"Jude@5"
    }
  ]

  const collectInputs = (e)=>{
    let key=e.target.name
    setUsrInfo({...usrInfo, [key]:e.target.value})

  }

  const check = (e)=>{
    e.preventDefault
    let isPresent = ExistingUsers.findIndex((obj)=>{
      obj['username']==usrInfo.username
      console.log(obj.username+"  "+usrInfo.username)
    })

    if(isPresent == -1)
    {
      setShowError("Invalid User, Or user not exist")
    }else if((ExistingUsers[isPresent].username==usrInfo.username) && (ExistingUsers[isPresent].password==usrInfo.password)){
      setIsLogin(true)
    }else{
      setShowError("Invalid Password")
    }
    

  }

  const switchHideShow= ()=>{
    setShowpass(!showpass)
  }

  const loginform = ()=>{
    return (
      <form onSubmit={check}>
        <input placeholder="User Name" type="text" value={usrInfo.username} name="username" onChange={collectInputs}/>
        <input placeholder="Password" type={showpass ? "text" : "password"} id="pwd" value={usrInfo.password} name="password" onChange={collectInputs}/>
        <input type="checkbox" onChange={switchHideShow}/>
        <p>{showError}</p>
        <button type="submit">Submit</button>
      </form>
    )
  }

  return (
    <div>
      {isLogin? <HomePage/> : loginform()}
    </div>
  );
}
