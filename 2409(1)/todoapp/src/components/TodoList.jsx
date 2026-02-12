import TodoItems from "./TodoItems";

export default function TodoList({todos, setTodos}){
    return(
        <div>
            {todos.map((item) => (
                 <TodoItems key={item} item={item} todos={todos} setTodos={setTodos}/>
                 ))}
        </div>
    );
}