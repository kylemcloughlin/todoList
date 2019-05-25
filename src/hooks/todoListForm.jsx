import React, { useState, useEffect } from "react";
import PickyDateTime from 'react-picky-date-time';
export function HookTodoListForm({ addTodo }) {

  const [todoValue, setTodoValue] = useState("");
  const [disValue, setDisValue] = useState("");
  const [time, setTime ] = useState({
    showPickyDateTime: true,
    date: '30',
    month: '01',
    year: '2000',
    hour: '03',
    minute: '10',
    second: '40',
    meridiem: 'PM'
  })
  const handleSubmit = e => {
  //   e.preventDefault();
    console.log(todoValue)
  //   if (!value) return;
  //  addTodo(value);
  //   // setValue("");
  };

  return (
    <div>

    <form
      id="todoListForm" >
      < input type="text"className="input" value={todoValue} onChange={e => setTodoValue(e.target.value)}
      /> what do you have to do?
      </form>
      <form
        id="todoListForm" >
        < input type="text" className="input" value={disValue} onChange={e => setDisValue(e.target.value)}
        /> discription:
      </form>
      <PickyDateTime
        size="m"// 'xs', 's', 'm', 'l'
        mode={1} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
        locale={`en-us`}// 'en-us' or 'zh-cn'; default is en-us
        show={time.showPickyDateTime}
        />
      </div>
  );
}