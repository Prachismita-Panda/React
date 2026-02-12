export default function Child(props){
    var text = props.text;
    return(
        <div>
            <h1>
                {text}
            </h1>
        </div>
    );

}