import { useState } from "react"; 
export default function ColorChange(){
    const [color,setColor] = useState("pink");

    function backgroundChange(str){
        setColor(str);
    }

    return(
        <div>

            <div style={{border:"1px solid red" , width:"300px" , height:"300px",backgroundColor:color}}></div>
            <button onClick={ () => { backgroundChange("red")}}>Red</button>
            <button onClick={() => { backgroundChange("green")}}>Green</button>
            <button onClick={() => { backgroundChange("yellow")}}>Yellow</button>

        </div>
    );
   
}