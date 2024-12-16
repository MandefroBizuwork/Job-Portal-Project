import React from 'react'

function AdminHeader() {
  return (
    <div className="fixed-top shadow bg-light " style={{  marginLeft: "280px",zIndex: "1" }}>
    <div className=" d-flex justify-content-between my-3 px-3" >
      <h4 className="m-0">Fixed Header</h4>
      <nav>
        <a href="#" className="me-3">Home</a>
        <a href="#" className="me-3">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </div>
  )
}

export default AdminHeader
