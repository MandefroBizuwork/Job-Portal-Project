import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../images/Logo2.png";
import $ from 'jquery'


function MyToggle(){

// alert("hi")
$("#menuItems").slideToggle();
$("#togleIcon").toggleClass("fa fa-bars  fa fa-times");



}

function DropDawnToggle(){
  $("#DropItems").slideToggle();
  $("#Dropbtn").toggleClass("fa fa-caret-down  fa fa-caret-up");

}


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
           {/* {Logo} */}
           <img className="logo" src={Logo} alt="Apple" width="40" height="50"/>
          </Link>
          <button onClick={MyToggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bars"><i id="togleIcon" className="fa fa-bars" aria-hidden="true"></i></span>
          </button>
          <div id="menuItems" className="collapse navbar-collapse">
            <ul  className="navbar-nav me-auto mb-2 mb-lg-0 fs-3">
              <li className="nav-item">
                <Link className="nav-link  js-scroll-trigger" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link " to="/Vacancy/">
                  Vacancy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/PostJob/">
                  Post a Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/ManageJob/">
                  Manage Job
                </Link>
              </li>
             
              <li className="nav-item dropdown">
                <Link onClick={DropDawnToggle}
                  className="nav-link"
                  to="#"
                  
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category<i id="Dropbtn" className="fa fa-caret-down" aria-hidden="true"></i>

                </Link>
                <ul id="DropItems" className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      IT & Telecom
                    </Link>
                  </li>
                  <li> <hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Bussiness
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                     Engeenering
                    </Link>
                  </li>
                </ul>
              </li>
             
            </ul>
           
            <Link className="nav-link " to="/Register/">
                  Register
                </Link>
               <Link className="nav-link" to="/Login/">
                  Login
                </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
