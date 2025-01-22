import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../../images/profile.jpg";
import "./Header.css";
import $ from "jquery";
function Sidebar({ sideBarOpen }) {
  const [isCollapsed, setIscollapsed] = useState(true);
  const collapseMenu1 = () => {
    setIscollapsed((prev) => !prev);
  };
  return (
    <aside
      id="sidebar"
      className={`mysidebar ${sideBarOpen ? "showsidbar" : "hidesidbar"} `}
    >
    <hr style={{backgroundColor:"black", height:"1.5px"}}/>
      <ul class="sidebar-nav mb-auto" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link collapsed" href="">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <!-- End Dashboard Nav -->

      <!-- End Components Nav --> */}

        <li class="nav-item">
          <a
            onClick={collapseMenu1}
            style={{ position: "relative" }}
            class="nav-link "
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
            aria-expanded="false"
          >
            <i class="bi bi-journal-text"></i>
            <span>Category</span>
            {/* <i class="bi bi-chevron-down ms-auto"></i> */}

            <svg
              style={{ float: "right", right: "0", position: "absolute" }}
              className={`ms-auto ${
                isCollapsed ? "bi-chevron-up" : "bi-chevron-down"
              } `}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>

            {/* <svg  
               style={{ float: "right", right: "0", position: "absolute" }}
                className="   ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg> */}
          </a>
          <ul
            id="form-collapse"
            data-bs-parent="#sidebar-nav"
            className={`sidbarDropdown-container ${
              isCollapsed ? "" : "form-collapse"
            }`}
          >
            <li>
              <a href="forms-elements.html">
                <i class="bi bi-circle"></i>
                <span>Electronics</span>
              </a>
            </li>
            <hr style={{ backgroundColor: "#585757" }} />
            <li>
              <a href="forms-layouts.html">
                <i class="bi bi-circle"></i>
                <span>Men Clothes</span>
              </a>
            </li>
            <hr style={{ backgroundColor: "#585757" }} />
            <li>
              <a href="forms-editors.html">
                <i class="bi bi-circle"></i>
                <span>Female clothes</span>
              </a>
            </li>
            <hr style={{ backgroundColor: "#585757" }} />
          </ul>
        </li>
        {/* <!-- End Forms Nav -->

      <!-- End Tables Nav -->

      <!-- End Charts Nav -->

      <!-- End Icons Nav --> */}
        <li class="nav-item">
          <a class="nav-link collapsed" href="#">
            <i class="bi bi-grid"></i>
            <span>Products</span>
          </a>
        </li>
        <li class="nav-item">
          <Link class="nav-link collapsed" to="/dashboard/usersPage">
            <i class="bi bi-grid"></i>
            <span>Users</span>
          </Link>
        </li>

        {/* <!-- End Login Page Nav -->

      <!-- End Error 404 Page Nav -->

      <!-- End Blank Page Nav --> */}
      </ul>
    </aside>
  );
}

export default Sidebar;
