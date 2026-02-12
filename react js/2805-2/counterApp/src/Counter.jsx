import { useState } from "react";
export default function Counter(){

    const [count,setCount] = useState(0);
    let [color,setColor] = useState("");

    function increaseValue(){
        setCount(count+1);
       
        if(count>=0 && count<=5 ){
            color = {backgroundColor:"white"}
        }
        else if(count>5 && count<=10 ){
           color = {backgroundColor:"green"}
        }
        else if (count>10 && count<=15){
            color = {backgroundColor:"red"}
        }
        // setCount(count);
        setColor(color);
    }


    function decreaseValue(){
        setCount(count-1);
       
        if(count<=0 && count>=-5 ){
            color = {backgroundColor:"white"}
        }
        else if(count<-5 && count>= -10 ){
           color = {backgroundColor:"green"}
        }
        else if (count<-10 && count>=-15){
            color = {backgroundColor:"red"}
        }
        // setCount(count);
        setColor(color);
    }

    return(
        <div >
            <h1 style={color}>{count}</h1>
            <button onClick = {increaseValue}>+</button>
            <button onClick = {decreaseValue}>-</button>
        </div>
    );
}