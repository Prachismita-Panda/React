import React from 'react'

const StudentInfo = ({stud}) => {
    // console.log("Roll number= ",stud.roll);
    // console.log("Name= ",stud.name);
    // console.log("Age = ",stud.age)
  return (
    <div>
      <h1>Student Information </h1>
      {
        stud.map((item)=>{
            return <h1>{item}</h1>
        })
      }
     
    </div>
  )
}

export default StudentInfo
