import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { optionalCallExpression } from "@babel/types";
// import { ServerHttp2Stream } from "http2";



export function HookTodoListForm({ addTodo, createList, finish }) {
  const urgency = ["very important", "important", "not important"];
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [dis, setDis] = useState("");
  const [date, setDate] = useState(new Date());
  const [todoUrgency, setTodoUrgency] = useState("");
  const [hardTitle, setHardTitle] = useState(false)
  
  const handleSubmit = e => {
    if (hardTitle == false ) {
     createList(title)
      setHardTitle(true);
    }
    e.preventDefault();
    let output = {
      todo: todo,
      discription: dis,
      date: date,
      importance: todoUrgency,
      status: "incomplete"
    }

    addTodo(output)
    setTodo("")
    setDis("")
    setTodoUrgency("")
  };

  const handleDate = res => {
    setDate(res)
    console.log(date);
  }
  const handleFinish = e => {
    e.preventDefault();
    console.log("hit");
   finish()
  }
  return (
    <div>
      <form
        id="todoListForm" >
          { !hardTitle ? (
            <input className="input is-rounded" type="text" placeholder="Choose A Title!"
            value={title
            }
            onChange={
              e => setTitle(e.target.value)
            } />
    
          ) : (<h1>{title}</h1>) }
        < input type="text" className="input is-rounded" value={todo} onChange={e => setTodo(e.target.value)}
        />
        < textarea type="text" className="textarea is-rounded" value={dis} onChange={e => setDis(e.target.value)}
        />
        <div className="select is-rounded">
          <select value={todoUrgency} onChange={e => setTodoUrgency(e.target.value)}>
            <option>Rounded dropdown</option>
            {urgency.map(opt => {
              return (<option value={opt}>{opt}</option>)
            })}
          </select>
        </div>
        <DatePicker
          selected={date}
          onChange={handleDate}
        />
        <button className="button is-info" onClick={handleSubmit}>Add To List</button>
        <div className="control">
          <button className="button is-warning"
            onClick={handleFinish}>Submit</button>
        </div>
      </form>
    </div>
  );
}


