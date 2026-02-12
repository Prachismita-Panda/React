import { useState } from "react";
export default function Form(){

     const[todo,setTodo] = useState(" ");
      const[todos,setTodos] = useState([ ]);

    function handleSubmit(e){
        e.prevenDefault();
        setTodos([...todos,todo ]);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={todo} 
            onChange = {(e) => setTodo(e.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
        </>

    );
}