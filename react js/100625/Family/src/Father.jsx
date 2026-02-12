import Mother from "./Mother";

export default function Father(props){
    var text = props.text;
    return(
        <>
        <Mother text = {text}/>
        </>
    );
}