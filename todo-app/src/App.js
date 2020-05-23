import React, { useState } from 'react';
import "./App.css"
import Todo from "./Todo"

function App() {
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    console.log('BOOM >' ,input);
  } 

  return (
    <div className="App">
      <h1>Todo app</h1>
      <input value={input} onChange = {e => setInput(e.target.value) }type="text"/>
      <button onClick = {addTodo}>Add todo</button>
      <Todo title="Take dogs"/>
    </div>  
  );
}

export default App;