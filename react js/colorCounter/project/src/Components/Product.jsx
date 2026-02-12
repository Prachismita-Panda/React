import {useState} from "react"
import "./Product.css"
export default function Product(){
    const[name,showName] = useState("");
    const[type,showType] = useState("");
    const[price,showPrice] = useState("");
   

   function product1(){
        showName("Nike Mercurial Superfly 10 Elite x Air Max 95 SE");
        showType(" High-Top Football Boot");
        showPrice("₹ 27 095.00");
   
   }
   function product2(){
        showName("Nike V2K Run");
        showType("Men's Shoes");
        showPrice("₹ 10 795.00");
   }
   function product3(){
        showName("Nike Pegasus 41 Jakob Ingebrigtsen");
        showType("Men's Road Running Shoes");
        showPrice("₹ 12 795.00");
   }

    return(
        
        <div >
           
            
            <button onClick={product1}>Product1</button>
            <button onClick={product2}>Product2</button>
            <button onClick={product3}>Product3</button>

            <div className="product">
                <h1>{name}</h1>
                <h3>{type}</h3>
                <h3>{price}</h3>
            </div>

        </div>
       
    );

}