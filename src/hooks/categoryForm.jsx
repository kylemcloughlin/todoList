import React, { useState, useEffect } from "react";
import '../datePicker.css'
export function HookCategoryForm({ createList }) {

  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    createList(value)
    setValue("");
  };

  return (
    <div class="control">
      <form
        // onSubmit={
        //   handleSubmit
        // }
        id="category-form" >
        <input className="input is-rounded" type="text" placeholder="Text input"
          value={  value
          }
          onChange={
            e => setValue(e.target.value)
          } >
          </input>
        <div class="control">
          <button className="button is-primary"
            onClick={
              handleSubmit
            }>Submit</button>
        </div>
      </form>
    </div>

  );
}

