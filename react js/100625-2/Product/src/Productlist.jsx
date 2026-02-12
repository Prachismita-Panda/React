import Productitem from "./Productitem";

export default function Productlist(props){
    var product = props.product;
    return(
        <>
        <Productitem product={product}/>
        </>
    );

}