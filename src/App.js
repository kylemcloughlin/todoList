import React, {
  useState, useEffect
} from "react";
import './App.css';
// import {
//   HookCategoryForm
// } from './hooks/categoryForm.jsx';
import {
  HookTodoListForm
} from './hooks/todoListForm';
import TodoListFormat from './hooks/todoFormat';
import Footer from './hooks/footer';
import Header from './hooks/header';

function App() {
  const [title, setTitle] = useState("");
  // const [todo, setTodo] = useState();
  const [list] = useState([]);
  let [isDone, setIsDone] = useState(false)
  const createList = text => {
    console.log("hiting here?")
    setTitle(text);


  };
  const addTodo = text => {
    // console.log(text)
    list.push(text);
    // console.log(list, title)
  }

  const finish = () => {
    setIsDone(true)
  }
  return ( <div className = "App" >
    <section className = "body" >
  <Header title={title}/>
    {
      isDone ? ( < TodoListFormat list = {
          list
        }
        title = {
          title
        }
        /> ) : ( 
           < HookTodoListForm addTodo = {
                addTodo
                }
                createList = {
                 createList
                } finish={
                finish
                }/>  
        
      )
    }
  <Footer/>
    </section> 
    </div>
  );
}

export default App;