import Child from "./Child";

export default function Mother(props){
    var text = props.text;
    return(
        <>
        <Child text = {text}/>
        </>

    );
}