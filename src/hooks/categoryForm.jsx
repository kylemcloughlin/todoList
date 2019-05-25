import React, { useState, useEffect } from "react";

export function HookCategoryForm({ createList }) {
  
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
  createList(value)
    setValue("");
  };

  return (
  <form 
    onSubmit={
    handleSubmit
  }
    id="category-form" >
    < input type="text"
      className="input"
      value={
        value
      }
      onChange={
        e => setValue(e.target.value)
      }
    /> pick a title!</form>
 
  );
}

