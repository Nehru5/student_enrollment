import React from 'react'
import Nav from '../components/Nav'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UpdateStudent from './UpdateStudent'
const ViewStudent = () => {
  const [users,setUsers] = useState([])
  const navigate = useNavigate()

  function fetchData(){
    axios.get("http://localhost:3000/users")
    .then(x=>setUsers(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }
  return (
    <>
      <Nav/>
      <h1>Welcome to View student page</h1>
      {users.map((x)=>{
        return <div>
          <h2>Name: {x.name}</h2>
          <h2>Email: {x.email}</h2>
          <h2>Department: {x.department}</h2>
          <h2>Course: {x.course}</h2>
          <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
          <button>Delete</button>
        </div>
      })}
    </>
  )
}

export default ViewStudent