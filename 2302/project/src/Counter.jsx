 import React, { useState } from 'react'


 
 const Counter = () => {

    const [count,setCount] = useState(0);

    function reset(){
       setCount(0);
    }

    return (
     <div>
        <h1>{count}</h1>
        <br />
        <button onClick={()=>setCount(count+5)}>Increase</button>
        <button onClick={()=>setCount(count-2)}>Decrease</button>
        <button onClick={reset}>Reset</button>
       
     </div>
    )
 }
 
 export default Counter
 