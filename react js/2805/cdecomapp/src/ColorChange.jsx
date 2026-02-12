import { useState } from "react";
export default function ColorChange(){

    const[color,setColor] = useState("White");

    return(
        <>
            <h1>{color}</h1>
            <button onClick = { () =>  setColor("Red") }>Red</button>
            <button onClick = { () =>  setColor("Green") }>Green</button>
            <button onClick = { () =>  setColor("Blue") }>Blue</button>
        </>
    );
}