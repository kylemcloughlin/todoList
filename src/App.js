import React, { useState, useEffect } from "react";
import './App.css';
import { HookCategoryForm }from './hooks/categoryForm.jsx';
import { HookTodoListForm } from './hooks/todoListForm.jsx';
import TodoListFormat from './hooks/todoFormat.jsx';
function App() {
  const [title, setTitle] = useState();
  // const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  let [isDone, setIsDone] = useState(false)
  const createList = text => {
    console.log("hiting here?")
    setTitle(text);
  
  
  };
  const addTodo = text => {
    console.log(text)
    list.push(text);
    console.log(list, title)
  }
  
 const finish = () => {
  setIsDone(true)
 }
  return (
    <div className="App">
      <header className="App-header">
      
           {
             isDone ? (<TodoListFormat list={list} title={title}/> ) : ( < HookTodoListForm addTodo = {
               addTodo
               }
              createList = {
                 createList
              } finish={
                finish
              }/> )
             }
  
      </header>
    </div>
  );
}

export default App;


