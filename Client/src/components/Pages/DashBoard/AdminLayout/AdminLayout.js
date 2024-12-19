import React, { useState } from 'react'
// import AdminHeader from '../AdminHeader'
import AdminFooter from '../AdminFooter'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom' 
import AdminHead from '../NewAdminHeader/AdminHead'

const AdminLayout = () => {
const [sideBarOpen,setsideBarOpen]=useState(true)
const ToggleSidebar=()=>{
  setsideBarOpen(!sideBarOpen)
}
  return (
    <div>
        {/* <Sidebar/> */}
   {/* <AdminHeader/> */}
  <AdminHead ToggleSidebar={ToggleSidebar}/>
  <Sidebar sideBarOpen={sideBarOpen}/>
  <div id="main-container" className={`${sideBarOpen?" ":"mainToggler"}`}  >
   <Outlet/>
  </div>
<AdminFooter/>
    </div>
  )
}

export default AdminLayout
