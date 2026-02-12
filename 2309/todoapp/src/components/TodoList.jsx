import { useState } from "react";
import TodoItems from "./TodoItems";

const[todos,setTodos] = useState([]);

export default function TodoList(){
    return(
        <div>
            {todos.map((item) => {
              <TodoItems key={item}  item ={item} />
            })}
        </div>
    );
}