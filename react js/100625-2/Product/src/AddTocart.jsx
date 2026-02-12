import Checkout from "./Checkout";

export default function AddToCart(props){
    var product = props.product;
    return(
        <>
        <Checkout product={product}/>
        </>
    );

}