import React, { useState, useEffect } from "react";
import '../App.css'

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    minHeight: '50%',
    borderTopRightRadius: '2em',
    borderBottomLeftRadius: '2em',
    backgroundColor: 'rgba(24, 24, 24, 0.9)',
    boxShadow: '0px 11px 19px -1px rgba(0,0,0,0.54)',
    border: '1px solid black',
    color: "white"
  }
};
let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let dayformatter = day => {
  let contraction = "th"
  let dateInNumbers = []
  let date = day.split("")
  date.map(num => {
    dateInNumbers.push(Number(num))
  })
  
  if (dateInNumbers[0] === 1) {
    
  } else {
    if (dateInNumbers[1] === 1) {
      contraction = "st"
    } else if (dateInNumbers[1] === 2) {
      contraction = "nd"
    } else if (dateInNumbers[1] === 3) {
      contraction = "rd"
    } else {
      contraction = "th"
    }
    
  }
  if (dateInNumbers[0] === 0) {
    let output = [dateInNumbers[1].toString(), contraction]
    output = output.join("")
    return output
  } else {
    let output = [dateInNumbers[0].toString(), dateInNumbers[1].toString(), contraction]
    output = output.join("")
    return output
  }
  
}
// console.log(list)
function Todo({ item, list, id, update }) {
  useEffect(() => {
    // console.log("BIG",list)
    Modal.setAppElement('body')
  }, [])
  const [select, setSelect] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const handleTodo = (item) => {
    setSelect(item)
    setModalOpen(true);
    console.log(select)
  }
  const updateList = (item, e, list) => {
    update(item.id)
    e.preventDefault();
    setModalOpen(false);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  let dateformatter = date => {
    let handle = date.split("-").reverse()
    let year = handle[2]
    let month = Number(handle[1]) - 1
    let day = dayformatter(handle[0])
    let output = [months[month], day, year]
    output = output.join(" ")
    return output;
  }


  return (
    <div>
      <div className="todo" onClick={() => handleTodo(item)}>
        <h3>{item.todo}</h3>
        <span>{item.importance}</span>
        <h6>{item.status}</h6>
        <h4>{dateformatter(item.date)}</h4>
      </div>
      <Modal 
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Todo"
      >

        <h2 id="title-modal">{item.todo}</h2>
        <h2 id="date">{dateformatter(item.date)}</h2>
        <h2 id="important">{item.importance <= 0 ? ("No importance Provided.") : (item.importance)}</h2>
        <p class="modal-body">{item.discription <= 0 ? ("No Discription Provided.") : (item.discription)}</p>
        <button id="close" class="modal-buttons" onClick={closeModal}>close</button>
        <form>
      {item.status === "incomplete" ? (
            <button class="modal-buttons" onClick={(e) => updateList(item, e, list)}>work on this!</button>
    
          ) : (
    
              <button class="modal-buttons" onClick={(e) => updateList(item, e, list)}>{item.status === "pending" ? ("Finish") :("Return To")}</button>
          ) }
  

        </form>
      </Modal>
    </div>)
  
  
  
  }
  export default Todo;
  
