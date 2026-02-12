import { useState } from "react";

export default function Counter(){
   const [count,setCount] = useState(1)

function increaseVal(){
    
    setCount(count+1);

}

function decreaseVal(){
        setCount(count-1);
}
  
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increaseVal}>Increase</button>
            <button onClick={decreaseVal}>Decrease</button>
        </>
    );
}





