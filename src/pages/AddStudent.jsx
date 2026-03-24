import React from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
const AddStudent = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [department,setDepartment] = useState("")
  const [course, setCourse] = useState("")
  return (
    <>
      <Nav/>
      <center>
        <h1>Add Student</h1>

        <form action="">
          <input 
          type="text" 
          placeholder='Enter student name' required value={name} 
          onChange={(e)=>{
              setName(e.target.value)
          }} /><br />

          <input
          type="text"
          placeholder='Enter Email' 
          required 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          /><br />

          <input
           type="text" 
           placeholder='Enter Department' 
           required 
           value={department}
           onChange={(e)=>{setDepartment(e.target.value)}}
           /> <br />

          <input
           type="text" 
           placeholder='Enter Course' 
           required 
          value={course}
          onChange={(e)=>{setCourse(e.target.value)}}
           /> <br />
          <button>Add</button>
        </form>
      </center>
    </>
  )
}

export default AddStudent