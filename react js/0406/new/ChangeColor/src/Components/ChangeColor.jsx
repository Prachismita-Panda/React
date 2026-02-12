import {useState} from "react" ;

export default function Changecolor(){

    const[color,SetColor] = useState("White");

    function changeRed(){
        SetColor("Red");
        
    }

    function changeGreen(){
        SetColor("Green");
    }

    function changeBlue(){
        SetColor("Blue");
    }
    

    return(
        <div className="ChangeColor" style={{backgroundColor : color, height : "100px" ,padding:"20px", width: "150px"}}>
            <h1 >{color}</h1>
            <button onClick = {changeRed} >Red</button>
            <button onClick = {changeGreen} >Green</button>
            <button onClick = {changeBlue} >Blue</button>

        </div>
    );
}