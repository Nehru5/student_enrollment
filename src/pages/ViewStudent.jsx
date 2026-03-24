import React from 'react'
import Nav from '../components/Nav'
import { useEffect,useState } from 'react'
import axios from 'axios'
const ViewStudent = () => {
  const [users,setUsers] = useState([])
  function fetchData(){
    axios.get("http://localhost:3000/users")
    .then(x=>setUsers(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])
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
          <button>Edit</button>
          <button>Delete</button>
        </div>
      })}
    </>
  )
}

export default ViewStudent