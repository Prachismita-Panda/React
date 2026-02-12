import AddToCart from "./AddTocart";

export default function Productitem(props){
    var product = props.product;
    return(
        <>
        <AddToCart product={product}/>
        </>
    );

}