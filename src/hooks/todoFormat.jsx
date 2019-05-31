import React, { useState, useEffect } from "react";
import '../App.css'
// import { optionalCallExpression } from "@babel/types";
// import Todo from "./todo.jsx"
import Modal from 'react-modal';
import Loader from './loader';
import { useSpring, animated } from 'react-spring'
import Todo from './todo'

const loaded = true;
function loadingTimer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => loaded);
}
function TodoListFormat({ title, list }) {
  const props = useSpring({ config: { duration: 500 }, opacity: 1, from: { opacity: 0 } })

  const [incomplete, setIncomplete] = useState([]);
  const [pending, setPending] = useState([]);
  const [complete, setComplete] = useState([]);
  const [isloaded, setIsLoaded] = useState(false)
  useEffect(() => {
    console.log("hit");
    sorter(list)
    loadingTimer().then(loaded => {
      setIsLoaded(loaded)
    })
  }, [list]);

  const sorter = (list) => {
    const one = []
    const two = []
    const three = []
    list.forEach((item) => {
      if (item.status === "incomplete") {
        item.id = list.indexOf(item)
        one.push(item)
      }
      else if (item.status === "pending") {
        item.id = list.indexOf(item)

        two.push(item)
      } else {
        item.id = list.indexOf(item)
        three.push(item)

      }
    })
    setIncomplete(one)
    setPending(two)
    setComplete(three)
  }


  const update = (item) => {

    let todo = list[item]
    if (todo.status === "pending") {
      todo.status = "complete"
    } else {
      todo.status = "pending"

    }
    sorter(list)
    // console.log(id)
  }



  if (isloaded === true) {
    console.log(list)

    return (
      <div id="holder-handler">
        <div className="todoHolder" id="incomplete">
          <h2 className="header">Incomplete:</h2>
          {incomplete.map((item, id) => {
            console.log(list)
            return (
              <Todo item={item}
                key={id}
                list={list}
                update={update}
                id={id} />
            )
          })

          }
        </div>
        <div className="todoHolder" id="complete" >
          <h1 className="header">Complete</h1>
          {complete > 1 ? (<h1></h1>) : (complete.map((item, id) => {
            return (
              <Todo item={item}
                key={id}
                list={list}
                update={update}
                id={id} />
            )
          }))}
        </div>
        <div className="todoHolder" id="pending">
          <h2 className="header">Pending</h2>
          {pending > 1 ? (<div></div>) : (pending.map((item, id) => {
            return (
              <Todo item={item}
                key={id}
                list={list}
                update={update}
                id={id} />
            )
          }))}

        </div>
      </div>

    )
  } else {
    return (<Loader />)
  }
}

export default TodoListFormat