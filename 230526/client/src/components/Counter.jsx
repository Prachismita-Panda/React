import { useState } from "react";


const Counter = () => {

    let [count, setCount] = useState(1);
    
    function Increase(){
        count = count+1;
        setCount(count);
        console.log(count);
    }

    function Decrease(){
        count = count-1;
        setCount(count);
        console.log(count);
    }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
      
    </>
  )
}

export default Counter
