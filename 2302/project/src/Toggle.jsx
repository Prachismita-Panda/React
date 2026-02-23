import React, { useState } from 'react'

const Toggle = () => {

    const [color,setColor] = useState("blue");

    const toggleColor = ()=>{
        setColor( color === "blue" ? "red" : "blue");
    }


    return (
        <div  style={{
                backgroundColor: color,
                height:"100vh",
                textAlign:"center",
                paddingTop:"50px",
                color:"white",
                width: "30%",
                height:"20vh",
                border: "1px solid white"

            }}>
           
          
            <button onClick={toggleColor}>Toggle</button>
      
        </div>
    )
}

export default Toggle
