import StudentInfo from "./StudentInfo"


function App() {

    let studentRoll = 101;
    let studentName = "Ram";
    let studentAge = 23;

  return (
    <>
      <StudentInfo name={studentName} roll={studentRoll} age={studentAge}/>
    </>
  )
}

export default App
