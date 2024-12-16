import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import AdminHeader from "../AdminHeader";

function AdminLayout() {
  return (
    <>
     <Sidebar/>
      <Outlet/>
     <AdminHeader/>
    </>
  );
}
export default AdminLayout;
