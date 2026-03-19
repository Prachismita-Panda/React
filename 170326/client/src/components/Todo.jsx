import React, { useState } from 'react'

const Todo = () => {

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);

 
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h1>Todo List</h1>
        <input type="text" value={todo} onChange={(e) =>{setTodo(e.target.value)}} />
        <button type='submit'>ADD</button>
      </form>

      {todos.map((item) =>{
        return <h1 key={item}>{item}</h1>
      })}
    </div>
  )
}

export default Todo
