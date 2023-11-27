import React from 'react'
import { Link } from 'react-router-dom'
import h from "./home.module.css"

const Home = () => {
  return (
    <div>
      <nav>
        <Link className={h.content}  to="/">Create Student Profile</Link>
        <Link className={h.content} to="/profile">Student Profile</Link>
      </nav>
    </div>
  )
}

export default Home
