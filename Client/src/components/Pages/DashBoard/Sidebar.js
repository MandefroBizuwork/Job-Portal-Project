import React from 'react'
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
        <div 
        className="d-flex flex-column flex-shrink-0 bg-dark text-bg-dark p-3"
        style={{
          width: "280px",
          height: "100%",
          overflow: "auto",
          position: "fixed",
          zIndex: "2",
          top: "0"
        }}
      >
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">Sidebar</span>
        </a>
        <hr style={{ color: "white" }} />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="#" className="nav-link active text-white">
              Dashboard
            </a>
          </li>
          <li>
            <Link to="/dashboard/profile" className="nav-link  text-white">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/dashboard/jobs" className="nav-link  text-white">
              Jobs
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Manage Jobs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
