import React, { useEffect, useState } from 'react'
import e from "../Component/edit.module.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const Editprofile = () => {

  const [name,setName]=useState("");
  const [bus,setBus]=useState("");
  const [blood,setBlood]=useState("");
  const [standard,setStandard]=useState("");
  const [address,setAddress]=useState("");
  
  const namedata=(a)=>{
      setName(a.target.value)
  }
  const busdata=(a)=>{
      setBus(a.target.value)
  }
  const blooddata=(a)=>{
      setBlood(a.target.value)
  }
  const standarddata=(a)=>{
      setStandard(a.target.value)
  }
  const addressdata=(a)=>{
      setAddress(a.target.value)
  }
  let obj =useParams()
   let nav =useNavigate("http://localhost:3000/StudentDetails")
  useEffect(()=>{
    axios.get(`http://localhost:3000/StudentDetails/${obj.xyz}`)
    .then((d)=>{
      setName(d.data.name)
      setBus(d.data.bus)
      setBlood(d.data.blood)
      setStandard(d.data.standard)
      setAddress(d.data.address)
    })
  },[])
  const handleClick=()=>{ 
  axios.put(`http://localhost:3000/StudentDetails/${obj.xyz}`,{name:name,bus:bus,blood:blood,address:address,standard:standard})
  .then(()=>{
    console.log("Updated")
  })
  nav("/profile")
  }
  return (
    <div className={e.container}>
       <div className={e.box}>
      <div>
        <label htmlFor="">NAME:</label>
        <input type="text" placeholder='Enter Student Name' value={name} onChange={namedata} />
      </div>
      <div> 
        <label htmlFor="">Bus No:</label>
        <input type="text" placeholder='Enter Student Bus.No Here..' value={bus} onChange={busdata}/>
      </div>
      <div>
        <label htmlFor="">BLOOD GROUP:</label>
        <input type="text" placeholder='Blood Group' value={blood} onChange={blooddata} />
      </div>
      <div>
        <label htmlFor="">STANDARD:</label>
        <input type="text" placeholder='Standard' value={standard} onChange={standarddata} />
      </div>
      <div>
        <label htmlFor="">ADDRESS:</label> 
        <input type="text" placeholder='Student Current Address'  value={address} onChange={addressdata}/>
      </div>
      <button onClick={handleClick} >Submit</button> 
      </div>
    </div>
  )
}

export default Editprofile
