import React from 'react'
import Nav from '../components/Nav'
import { useState } from 'react'
import axios from 'axios'
import { toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [department,setDepartment] = useState("")
  const [course, setCourse] = useState("")

  const navigate = useNavigate()

  function saveData(e){
      e.preventDefault()
      const userData = {name,email,department,course}
      axios.post("http://localhost:3000/users",userData)
      .then(()=>{
        toast.success("Student Added")
        setName("")
        setEmail("")
        setDepartment("")
        setCourse("")
        navigate("/viewstudent")
      })
      .catch(err=>console.log(err))
  }
  return (
    <>
      <Nav/>
      
      <center>
        <h1>Add Student</h1>
        <form action="" onSubmit={saveData}>
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