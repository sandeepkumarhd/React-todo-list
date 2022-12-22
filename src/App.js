import React, {useState} from "react";
import ExpenseForm from "./Component/ExpenseForm";
import ExpenseData from "./Component/ExpenseData";
import Header from "./Component/Header";
import "./Component/ExpenseForm.css";
function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([])
  const [edit,setEdit] = useState(null)
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <ExpenseForm
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos}
          edit = {edit}
          setEdit = {setEdit}
          />
        </div>
        <div>
          <ExpenseData todos = {todos} setTodos = {setTodos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
