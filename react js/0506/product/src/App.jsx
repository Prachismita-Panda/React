import Product from "./Components/Product"


function App() {

  function product1(){
        <div className="product">
          <Product Name="Nike Air jr" type="Football shoe" Price="15 000" />
        </div>
       
    }
    function product2(){
        <div className="product">
          <Product Name="Nike Air jr" type="Football shoe" Price="15 000" />
        </div>
       
    }
    function product3(){
        <div className="product">
          <Product Name="Nike Air jr" type="Football shoe" Price="15 000" />   
        </div>
       
    }
  
  return (
    <>

        <button onClick={product1}>Product 1</button>
        <button onClick={product2}>Product 2</button>
        <button onClick={product3}>Product 3</button>
      
    </>
  )
}

export default App
