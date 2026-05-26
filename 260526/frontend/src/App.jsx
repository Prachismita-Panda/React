import StudentInfo from "./StudentInfo"

function App() {

  let stud = {
    roll:101,
    name:"Shyam",
    age:23
  }
 

  return (
    <>
      <StudentInfo stud={stud} />
    </>
  )
}

export default App
