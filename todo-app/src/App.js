import React, { useState } from 'react';
import "./App.css"
import Todo from "./Todo"

function App() {

  function deleteTodo(e) {
    e.preventDefault();
    let index = e.target.value;
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  const [input, setInput] = useState(""); //short memory
  const [todos, setTodos] = useState([]); //short memory
  const addTodo = (e) => {
   // console.log('BOOM >' ,input);
    // 1 add whateever in input to the todos array
    // 2 clear the input field

    setTodos([...todos, input]);
    setInput("");
    e.preventDefault()  // prevent automatic refresh form
    //console.log([...todos, input]);
  } 

  return (
    <div className="App">
      <h1>Todo app</h1>
      <form>
          <input 
            value={input} 
            onChange = {(e) => setInput(e.target.value) }
            type="text"
          />
          <button disabled={!input} type="submit" onClick = {addTodo}>Add todo</button>; 
        
        
          {todos.map((todo, i) => {
            return (
              <Todo title ={todo} key ={i}
                                  value ={i}
                                  deleteTodo ={deleteTodo}
              />

          )
        })}
      </form>
    </div>  
  );
}

export default App;