import React from 'react'
import "./MainHeader.css"
function MainHeader() {
  return (
 
      <div class="pagetitle" style={{marginBottom: "10px"}}>
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    
  )
}

export default MainHeader
