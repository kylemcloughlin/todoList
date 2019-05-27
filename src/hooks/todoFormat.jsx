import React, { useState, useEffect } from "react";

import { optionalCallExpression } from "@babel/types";

export default function TodoListFormat({title, list}) {
  const [incomplete, setIncomplete] = useState([]);
  const [pending, setPending] = useState([]);
  const [complete, setComplete] = useState([]); 
  React.useEffect(() => {
    sorter(list)
  }, []);

  const sorter = (list) => {
    list.forEach((item) => {
      if (item.status === "incomplete") {
        console.log("hit")
        incomplete.push(item)
        console.log(incomplete)

      }
      else if (item.status === "pending") {
        console.log("pending")
      } else {
        console.log("comeplete")
      }
    })
  }
  return (
    <div>
      <h1>{title}</h1>
    
      
      <div>
        <h2>incomplete</h2>
        {incomplete.map((item) =>{
         return ( <div>
              <h3>{item.todo}</h3>
              <h4>{item.importance}</h4>
              <h4>{item.date}</h4>
         </div>)
        })}
      </div>
      <div>
        <h2>currenting working on</h2>
      </div>
      <div>
        <h2>complete</h2>
      </div>

    
    
    </div>

  )
}