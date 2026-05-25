import React from 'react'

const StudentInfo = ({roll,name,age}) => {

  
  return (
    <div>
      <h1>Roll number = {roll}</h1>
      <h1>Name = {name}</h1>
      <h1>Age = {age}</h1>
    </div>
  )
}

export default StudentInfo
