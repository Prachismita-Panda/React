export default function Product(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <h3>{props.purpose}</h3>
            <h3>{props.availibility}</h3>
            <h3>{props.price}</h3>
        
        </div>
    );
}