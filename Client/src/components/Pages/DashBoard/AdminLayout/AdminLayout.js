import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminFooter from '../AdminFooter'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom' 

const AdminLayout = () => {
  return (
    <div>
        <Sidebar/>
   <AdminHeader/>
      <Outlet/>
<AdminFooter/>
    </div>
  )
}

export default AdminLayout
