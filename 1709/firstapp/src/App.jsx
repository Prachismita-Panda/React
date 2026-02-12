import StudentDetails from "./StudentDetail"


function App() {

  const data = {
    roll : 101 ,
    name : "Ram " ,
    marks : [90, 80, 70]
  }
  
 

  return (
    <>
      <StudentDetails studentData={data}/>
    </>
  )
}

export default App
