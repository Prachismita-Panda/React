import React, { useState } from 'react'

const Form = ({todos,setTodos}) => {

    const [todo ,setTodo] = useState("");
 

    function handleSubmit(e){
      e.preventDefault();
      setTodos([...todos,todo]);
      setTodo("");
    }
    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h1>Todo List</h1>
            <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
            <button type='submit'>ADD</button>
        </form>

     
        </div>
    )
}
      
 

export default Form
