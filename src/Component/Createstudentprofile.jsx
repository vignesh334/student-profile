import React, { useState } from 'react'
import c from "./create.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createstudentprofile = () => {

    let nav = useNavigate("http://localhost:3000/StudentDetails")


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
    const sub=()=>{
        axios.post("http://localhost:3000/StudentDetails",{name:name,bus:bus,blood:blood,address:address,standard:standard})
        .then(()=>{
            console.log("Happy Hacking")
        })
        // window.location.assign("/") 
        nav("/profile")
    }
  return (
    <div className={c.container}>
        <div className={c.box}>
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
      <button onClick={sub} >Submit</button> 
      </div>
    </div>
  )
}

export default Createstudentprofile
