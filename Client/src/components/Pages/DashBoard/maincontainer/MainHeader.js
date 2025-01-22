import React from 'react'
// import "./MainHeader.css"
import { Link } from 'react-router-dom'
function MainHeader({pagetype}) {
  return (
 
      <div class="pagetitle" style={{marginBottom: "10px"}}>
    
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active">{pagetype}</li>
        </ol>
      </nav>
      <h1><hr style={{height:"3px"}}/></h1>
    </div>
    
  )
}

export default MainHeader
