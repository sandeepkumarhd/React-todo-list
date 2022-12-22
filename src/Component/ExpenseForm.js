import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
const ExpenseForm = ({input,setInput,todos,setTodos}) => {
  const onInputChange = (event) => {
setInput(event.target.value)
}
const onFormSubmit = (event) => {
event.preventDefault()
setTodos([...todos,{id:uuidv4(),title:input}])
setInput("")
}
  return (
    <form onSubmit={onFormSubmit}>
        <input  className="task-input" type="text"
         placeholder = "Enter Text " value={input}
          required onChange={onInputChange}/>
      <button className="button-add" type="submit">Add</button>
    </form>
  );
};
export default ExpenseForm;
