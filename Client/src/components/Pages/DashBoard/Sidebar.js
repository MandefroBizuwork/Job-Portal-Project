import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../../images/profile.jpg";
import "./Header.css"
import $ from "jquery";
function Sidebar({sideBarOpen}) {

  function DropDawnToggle() {
    $("#DropItems").slideToggle();
   
  }


  return (
    // <div>
    //   <div
    //     className="d-flex flex-column flex-shrink-0 bg-dark text-bg-dark "
    //     style={{
    //       width: "280px",
    //       height: "100%",
    //       overflow: "auto",
    //       position: "fixed",
    //       zIndex: "2",
    //       top: "0",
    //     }}
    //   >
     
    //     <ul className="nav nav-pills flex-column  adminMenu ">
    //       <li className="pb-5  " style={{backgroundColor:"#0f100e"}}>
           

    //         <div class="dropdown profile-element mx-1 mt-5" >
    //           <div style={{display:"flex" ,flexDirection:"column",gap:"3",alignItems:"center"}}>

             
    //         <img
    //             src={Profile}
    //             alt="image"
    //             style={{width: "90px", height: "90px",borderRadius: "50%"}}
                
    //           />
              
    //           <a data-toggle="dropdown" className="dropdown-toggle " href="#" onClick={DropDawnToggle} >
    //             <span class="block m-t-xs font-bold">Mandefro Bizuwork</span><br/>
    //             <span class="text-muted text-xs block">
    //               Profile 
    //             </span>
                
    //           </a>
    //           </div>
    //           <ul className="dropdown-menu animated fadeInRight m-t-xs" id="DropItems">
    //             <li>
    //               <a class="dropdown-item" href="/update_client_profile/3144">
    //                 Profile
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="/change-password/">
    //                 Change Password
    //               </a>
    //             </li>
               
    //             <li class="dropdown-divider"></li>
    //             <li>
    //               <a class="dropdown-item" href="../Logout">
    //                 Logout
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </li>

       
         
    //       </ul>
        
    //       <ul className="nav nav-pills flex-column mb-auto adminMenu mx-1 ">
    //       <hr />
    //       <li className="">
    //         <a href="#" className="nav-link  text-white">
    //           Dashboard
    //         </a>
    //       </li>
    //       <hr />
    //       <li className="">
    //         <Link to="/dashboard/profile" className="nav-link  text-white">
    //           Profile
    //         </Link>
    //       </li>
    //       <hr />
    //       <li className="">
    //         <Link to="/dashboard/jobs" className="nav-link  text-white">
    //           Jobs
    //         </Link>
    //       </li>
    //       <hr />
    //       <li className="">
    //         <a href="#" className="nav-link text-white">
    //           Manage Jobs
    //         </a>
    //       </li>
    //        <hr />
    //       <li className="">
    //         <a href="#" className="nav-link text-white">
    //           Products
    //         </a>
    //       </li>
    //        <hr />
    //     </ul>
        
       
    //   </div>
    // </div>
    <aside id="sidebar" className={`mysidebar ${sideBarOpen? "showsidbar":"hidesidbar"} `}>

    <ul class="sidebar-nav mb-auto" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      {/* <!-- End Dashboard Nav -->

      <!-- End Components Nav --> */}

      <li class="nav-item">
        <a style={{position:"relative"}} class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
          <i class="bi bi-journal-text"></i><span>Forms</span>
          {/* <i class="bi bi-chevron-down ms-auto"></i> */}
          <svg style={{float:"right",right:"0",position:"absolute"}} className="   ms-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
        </a>
        <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav" >
          <li>
            <a href="forms-elements.html">
              <i class="bi bi-circle"></i><span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i class="bi bi-circle"></i><span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i class="bi bi-circle"></i><span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i class="bi bi-circle"></i><span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- End Forms Nav -->

      <!-- End Tables Nav -->

      <!-- End Charts Nav -->

      <!-- End Icons Nav --> */}

      

      <li class="nav-item">
        <a class="nav-link collapsed" href="users-profile.html">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </a>
      </li>
      {/* <!-- End Profile Page Nav -->

      <!-- End F.A.Q Page Nav -->

      <!-- End Contact Page Nav -->

      <!-- End Register Page Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-login.html">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li>
      {/* <!-- End Login Page Nav -->

      <!-- End Error 404 Page Nav -->

      <!-- End Blank Page Nav --> */}

    </ul>
    

  </aside>
  );
}

export default Sidebar;
