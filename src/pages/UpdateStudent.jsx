import React,{useState,useEffect} from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const UpdateStudent = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [department,setDepartment] = useState("")
  const [course,setCourse] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then(x=>{
      setName(x.data.name)
      setEmail(x.data.email)
      setDepartment(x.data.department)
      setCourse(x.data.course)
    })
  },[])

  function handleUpdate(e){
      e.preventDefault()
      const newData = {name,email,department,course}
      axios.put(`http://localhost:3000/users/${id}`,newData)
      .then(()=>{
        toast.success("Student updated")
        navigate("/viewstudent")
      })
      .catch(err=>{
        toast.error("Failed to save")
      })
  }
  return (
    <>
    <Nav/>
      <center>
        <h1>Update student</h1>
        <form action="" onSubmit={handleUpdate}>
          <input type="text" placeholder='Enter Student name' required value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />

          <input type="text" placeholder='Enter Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />

          <input type="text" placeholder='Enter Department' required value={department} onChange={(e)=>{setDepartment(e.target.value)}} /> <br />

          <input type="text" placeholder='Enter Course' required value={course} onChange={(e)=>{setCourse(e.target.value)}} /> <br />

          <button>Update</button>
        </form>
      </center>
    </>
  )
}

export default UpdateStudent