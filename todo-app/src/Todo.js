
 import React from 'react';
 
 const Todo = (props) => {
     return (
         <div>
             <h1>{props.title}</h1>
             <button className="deleteBtn" value={props.value} onClick={props.deleteTodo}>DELETE</button>
         </div>
     );
 };
 
 export default Todo;

