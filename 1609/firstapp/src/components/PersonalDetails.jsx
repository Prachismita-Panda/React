import { useState } from "react"


function PersonalDetails() {
 const [count,setCount] =useState(0);
 const [val,setVal] =useState(1);

 function handleSubmit(e){
  e.preventDefault();
  setCount(count+Number(val));

 }


  return (
    <>
    

    <form >
        <h1>Name:Prachismita Panda</h1>
        <h1>Gender: Female</h1>
        <h1> Date of Birth : 28-10-2005</h1>
    </form>
    

    
     
    </>
  )
}

export default PersonalDetails
