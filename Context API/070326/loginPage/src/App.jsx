import { createContext, useState } from "react"
import Checkout from "./Checkout"
import Login from "./Login";

export let UserContext = createContext()
function App() {

  const [user,setUser] = useState("Guest");

  return (
    <>
    <input type="text"  onChange={(e)=>{setUser(e.target.value)}}/>
    <UserContext.Provider value={{user,setUser}}>
      <Login/>
      <Checkout/>
    </UserContext.Provider>
    </>
  )
}

export default App
