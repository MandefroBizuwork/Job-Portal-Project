import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../../images/profile.jpg";
import "./Header.css"
import $ from "jquery";
function Sidebar() {

  function DropDawnToggle() {
    $("#DropItems").slideToggle();
   
  }
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 bg-dark text-bg-dark "
        style={{
          width: "280px",
          height: "100%",
          overflow: "auto",
          position: "fixed",
          zIndex: "2",
          top: "0",
        }}
      >
     
        <ul className="nav nav-pills flex-column  adminMenu ">
          <li className="pb-5  " style={{backgroundColor:"#0f100e"}}>
           

            <div class="dropdown profile-element mx-1 mt-5" >
              <div style={{display:"flex" ,flexDirection:"column",gap:"3",alignItems:"center"}}>

             
            <img
                src={Profile}
                alt="image"
                style={{width: "90px", height: "90px",borderRadius: "50%"}}
                
              />
              
              <a data-toggle="dropdown" className="dropdown-toggle " href="#" onClick={DropDawnToggle} >
                <span class="block m-t-xs font-bold">Mandefro Bizuwork</span><br/>
                <span class="text-muted text-xs block">
                  Profile 
                </span>
                
              </a>
              </div>
              <ul className="dropdown-menu animated fadeInRight m-t-xs" id="DropItems">
                <li>
                  <a class="dropdown-item" href="/update_client_profile/3144">
                    Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/change-password/">
                    Change Password
                  </a>
                </li>
               
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="../Logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>

       
         
          </ul>
        
          <ul className="nav nav-pills flex-column mb-auto adminMenu mx-1 ">
          <hr />
          <li className="">
            <a href="#" className="nav-link  text-white">
              Dashboard
            </a>
          </li>
          <hr />
          <li className="">
            <Link to="/dashboard/profile" className="nav-link  text-white">
              Profile
            </Link>
          </li>
          <hr />
          <li className="">
            <Link to="/dashboard/jobs" className="nav-link  text-white">
              Jobs
            </Link>
          </li>
          <hr />
          <li className="">
            <a href="#" className="nav-link text-white">
              Manage Jobs
            </a>
          </li>
           <hr />
          <li className="">
            <a href="#" className="nav-link text-white">
              Products
            </a>
          </li>
           <hr />
        </ul>
        
       
      </div>
    </div>
  );
}

export default Sidebar;
