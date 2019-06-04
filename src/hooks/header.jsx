import React, {useState, useEffect} from "react";
import '../App.css';
import list from "../list.png"
export default function Header(title) {
  
  useEffect(() => {
    setHardTitle(title.title)
    
  },[title])
  const [hardTitle, setHardTitle] = useState("")
  return (
    <header className="head">
      <img src={list} alt="list" id="photo" href="/"/>
      <h1><strong id="name">Smart List</strong>
      </h1>
      
     <strong className="todo-title">{hardTitle}</strong> 
   
    </header>
  )
}