import { useState } from "react";
import TodoItems from "./TodoItem";




export default function TodoList(){
    const[todos,setTodos] = useState([]);
    return(
        <div>
            {todos.map((item) => {
                <TodoItems  key={item}  item ={item} />
              
            })}
        </div>
    );
}