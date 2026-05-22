import { useContext } from "react"
import { UserContext } from "./App"

function Checkout(){

    let {user} = useContext(UserContext)
    return(
        <>
            <h1>Hello {user}</h1>
        </>
       
    )
}

export default Checkout