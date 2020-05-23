import React, { useState } from 'react';
import "./App.css"
import Todo from "./Todo"

function App() {
  const [input, setInput] = useState(""); //short memory
  const [todos, setTodos] = useState([]); //short memory
  const addTodo = (e) => {
    console.log('BOOM >' ,input);
    // 1 add whateever in input to the todos array
    // 2 clear the input field

    setTodos([...todos, input]);
    setInput("");
    console.log([...todos, input]);
  } 

  return (
    <div className="App">
      <h1>Todo app</h1>
      <input 
        value={input} 
        onChange = {(e) => setInput(e.target.value) }
        type="text"
      />
      <button onClick = {addTodo}>Add todo</button>; 
      {todos.map(todo => {
        return (
          <Todo title ={todo} />
        )
      })}
    </div>  
  );
}

export default App;