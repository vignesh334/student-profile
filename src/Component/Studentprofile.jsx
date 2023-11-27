import axios from 'axios';
import React, { useEffect, useState } from 'react'
import s from "./studentprofile.module.css"
import { Link } from 'react-router-dom';

const Studentprofile = () => {

  let[data,setData]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/StudentDetails")
    .then((s)=>{
      setData(s.data) 
    })
  },[])

  let datadel =(b)=>{
    axios.delete(`http://localhost:3000/StudentDetails/${b}`)
    window.location.assign("/profile")
  }
  return (
    <div  className={s.main} >
      {data.map((x)=>{
        return(
            <div className={s.container_box}>
              <h1>Name :{x.name}</h1>
              <h2>Bus No :{x.bus}</h2>
              <h3>Blood Group :{x.blood}</h3>
              <h4>Standard :{x.standard}</h4>
              <h5 >Address :{x.address}</h5> 
             <Link to={`/edit/${x.id}`}> <button  className={s.btn}>Edit</button></Link>
              {/* <button  className={s.btn}>Edit</button>  */}
              <button onClick={()=>{datadel(x.id)}} className={s.btn}>Delete</button> 
              
            </div>
           
        )
      })}
    </div>
  )
}

export default Studentprofile
