import React from "react";


import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
const Dashboard = () => {
  return (
    <>
      {/* Sidebar - collapses into a top navbar on smaller screens */}
     {/* <Sidebar/> */}
      {/* Fixed Header */}
      
    {/* <AdminHeader/> */}
      {/* Main Content */}
      <div className="container mt-5" >
    
      <div className="container">
        <h1><a>Dashboard</a></h1>
        <hr/>

      </div>
     {/* content heree */}
      </div>
      

      {/* Footer */}
      <div className="container-fluid py-3 my-4 border-top bg-light">
        <div className="d-flex justify-content-center">
          <span>© 2024 Company, Inc</span>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="text-secondary" href="#">Twitter</a></li>
            <li className="ms-3"><a className="text-secondary" href="#">Instagram</a></li>
            <li className="ms-3"><a className="text-secondary" href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
