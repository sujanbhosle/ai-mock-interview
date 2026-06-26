import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav
        style={{
            display:'flex',
            justifyContent:"space-between",
            padding:"20px",
            backgroundColor:"#242424",
            color:"white",
        }}    
    >

        <h2>Ai mock interview</h2>
        <div>
            <Link
                to="/"
                style={{color:"white",marginRight:"20px",textDecoration:"none"}}>Home
                </Link>
            <Link
                to="/login"
                style={{color:"white",marginRight:"20px",textDecoration:"none"}}>Login</Link>
            <Link
                to="/register"
                style={{color:"white",textDecoration:"none"}}>Register</Link>
        </div>
      </nav>
    </div>
  )
}
