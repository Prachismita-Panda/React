import "./Product.css"
export default function Product(props){
      
    const Name = props.Name;
    const type = props.type;
    const Price = props.Price;
   
    return(
        
        <div className="product">
         <h1>{Name}</h1>
         <h3>{type}</h3>
         <h3>MRP :{Price}</h3>
        </div>
        
    );
}