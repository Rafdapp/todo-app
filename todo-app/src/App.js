import React from 'react';
import "./App.css"
import Todo from "./Todo"

function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>
      <input type="text"/>
      <button>Add todo</button>
      <Todo title="Take dogs"/>
    </div>  
  );
}

export default App;