import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../images/Logo2.png";
import $ from "jquery";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function MyToggle() {
  $("#menuItems").slideToggle();
  $("#togleIcon").toggleClass("fa-bars fa-times");
}

function DropDawnToggle() {
  $("#DropItems").slideToggle();
  $("#Dropbtn").toggleClass("fa-caret-down fa-caret-up");
}
function Header() {
  useEffect(() => {
    function handleScroll() {
      const scroll = $(window).scrollTop();
      if (scroll >= 60) {
        $("#myHeader").addClass("black");
        $("#navlink").addClass("blue");
      } else {
        $("#myHeader").removeClass("black");
        $("#navlink").removeClass("blue");
      }
    }
    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <nav id="myHeader" className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img
              className="logo"
              src={Logo}
              alt="Apple"
              width="40"
              height="50"
            /> */}
          </Link>
          <button
            onClick={MyToggle}
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bars">
              <i id="togleIcon" className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
          <div id="menuItems" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-3">
              <li className="nav-item">
                <Link
                  id="navlink"
                  className="nav-link js-scroll-trigger"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="navlink"
                  className="nav-link js-scroll-trigger"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link id="navlink" className="nav-link" to="/Vacancy/">
                  Vacancy
                </Link>
              </li>
              <li className="nav-item">
                <Link id="navlink" className="nav-link" to="/PostJob/">
                  Post a Job
                </Link>
              </li>
              <li className="nav-item">
                <Link id="navlink" className="nav-link" to="/ManageJob/">
                  Manage Job
                </Link>
              </li>
              <li className="nav-item">
                <Link id="navlink" className="nav-link" to="/documents/">
               Documents
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  id="navlink"
                  onClick={DropDawnToggle}
                  className="nav-link"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  Category{" "}
                  <i
                    id="Dropbtn"
                    className="fa fa-caret-down"
                    aria-hidden="true"
                  ></i>
                </Link>
                <ul
                  id="DropItems"
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      IT & Telecom
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Business
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Engineering
                    </Link>
                  </li>
                </ul>
              </li>
            
            </ul>
            <Link id="navlink" className="nav-link button-2" to="/Register/">
              Register
            </Link>
            <Link  id="navlink" className="nav-link button-2" to="/login/">
              Login
            </Link>
            <Button variant="primary">
              Notifications
              <Badge bg="danger">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            
             
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
