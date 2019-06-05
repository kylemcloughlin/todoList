import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import '../App.css';
function handleBanners(x) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000)
  }).then(() => x)
}
function loadingTimer(input) {
  let output = input.toISOString().slice(0, 10);
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => output);
}
export function HookTodoListForm({ addTodo, createList, finish }) {
 
  const urgency = ["very important", "important", "not important"];
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [dis, setDis] = useState("");
  const [datePicker, setDatepicker] = useState(new Date())
  const [date, setDate] = useState(datePicker.toISOString().slice(0, 10));
  const [todoUrgency, setTodoUrgency] = useState("");
  const [hardTitle, setHardTitle] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [hasSaved, SetHasSaved] = useState(false)
  const [displayTodo, setDisplayTodo] = useState("")
  const [hasTitleError, setHasTitleError] = useState(false);
  const create = e => {
    e.preventDefault()
    if (title === "") {
      setHasTitleError(true)
      console.log("hit")    
      handleBanners(false).then(() => {
        titleEToggle();
     })

      // console.log("hit", title)
      // setHardTitle(false)
      // setHasError(true)
      // handleBanners(false).then(() => {
      //   setHasTitleError(false)
      // })
    } else {

      createList(title)
      setHardTitle(true);
    }
  }
  const handleSubmit = e => {
    // if (hardTitle === false ) {
    // }
    e.preventDefault();
      setDisplayTodo(todo);
    let output = {
      todo: todo,
      discription: dis,
      date: date,
      importance: todoUrgency,
      status: "incomplete"
    }
    if(output.todo === "") {
     
     setHasError(true) 
      handleBanners(false).then(() =>{
        setHasError(false)
      })
    
    } else {
    addTodo(output)
    SetHasSaved(true)  
    handleBanners(false).then(() => {
        SetHasSaved(false)
      })
  }
    setTodo("")
    setDis("")
    setTodoUrgency("")
  };

  const handleDate = (res, date) => {
    
    setDatepicker(res)
   
    loadingTimer(res).then(output => {
      setDate(output)

    })

  }
  const handleFinish = e => {
    e.preventDefault();
    if (todo === true) {
      
    }
   finish()
  }

  const titleEToggle = () => {
    console.log("hit")
    const el = document.getElementById("titleError")
    $(el).slideToggle();
    
  }
  useEffect(() =>{
    titleEToggle();
  },[])
  
  return (
    <div id="todoForm">
      {hasTitleError ? (
        <div id="titleError" class="message-banner">
          <h1>Whoops!</h1>
          <h2>Make Sure You Choose A Title Before Creating Your List</h2>
        </div>
      ) : (null)} 
   {hasError ? (
     <div id="error" class="message-banner">
      <h1>Whoops!</h1>
      <h2>Make Sure You Pick A Task Before Adding To the List!</h2>
    </div>
   ):(null)} 
      {hasSaved ? (<div class="message-banner" id="saved-banner">
        <h2>{displayTodo} Added To list!</h2>
      </div>) :
        (null)}
      <form
        id="todoListForm" >
          { !hardTitle ? (
           <div>
                <h1>Start your List!</h1>
            <input  type="text" id="title" placeholder="Choose A Title For The List!"
            value={title}onChange={e => setTitle(e.target.value)
            }  /> <button onClick={create} id="title-button">Create</button>
            </div>
    
          ) : (<div>

          <h1>Create Your Todo's:</h1> 
        < input type="text" className="inputs" placeholder="Pick A Task!" value={todo} onChange={e => setTodo(e.target.value)}
        />
        < textarea type="text" className="textarea is-rounded" placeholder="What's has to be done?" value={dis} onChange={e => setDis(e.target.value)}
        />
        
        <div className="select" >
          <select id="select" value={todoUrgency} onChange={e => setTodoUrgency(e.target.value)}>
            <option>How Important Is It?</option>
            {urgency.map((opt, id) => {
              return (<option value={opt} key={id}>{opt}</option>)
            })}
          </select>
        </div>
        <DatePicker className="dateInput"
        selected={datePicker}
        onChange={handleDate}
        dateFormat="MMMM d, yyyy"
        includeTimes="false"
        />
     <div className="seperator">

        <button className="addToList" onClick={handleSubmit}>Add To List</button>
          <button className="submit" id="right"
          onClick={handleFinish}>Submit</button>

          </div>
          </div>

          ) }
      </form>
    </div>
  );
}


