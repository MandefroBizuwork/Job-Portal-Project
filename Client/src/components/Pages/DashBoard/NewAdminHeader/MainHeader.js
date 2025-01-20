import React from 'react'
import "./MainHeader.css"
import { Link } from 'react-router-dom'
function MainHeader() {
  return (
 
      <div class="pagetitle" style={{marginBottom: "10px"}}>
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    
  )
}

export default MainHeader
