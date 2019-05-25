import React, { useState, useEffect } from "react";
import './App.css';
import { HookCategoryForm }from './hooks/categoryForm.jsx';
import { HookTodoListForm } from './hooks/todoListForm.jsx';
function App() {
  const [title, setTitle] = useState(null);
  const createList = text => {
    // console.log(title, "title");
    setTitle(text);
    // console.log(title, "set title");
    
    // const newTodos = {
    //   text,
    //   isCompleted: false
    // }
  
  };
  const addTodo = text => {
    console.log(text);
  }
  console.log(title)
  return (
    <div className="App">
      <header className="App-header">
      <h1>{title}</h1>
           {
             !title ? ( < HookCategoryForm createList = {
                 createList
               }
               />) : ( <HookTodoListForm addTodo = {addTodo}/> )
             }
     
      
  
      </header>
    </div>
  );
}

export default App;


