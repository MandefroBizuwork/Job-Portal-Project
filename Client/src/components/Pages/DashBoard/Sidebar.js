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
      <hr style={{ height: "2px" }} />
      <ul class="sidebar-nav mb-auto" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link collapsed" href="#">
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
            class="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
            aria-expanded="false"
          >
            <i class="bi bi-journal-text"></i>
            <span>Forms</span>
            {/* <i class="bi bi-chevron-down ms-auto"></i> */}
            {isCollapsed ? (
              <svg
                style={{ float: "right", right: "0", position: "absolute" }}
                className="   ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            ) : (
              <svg 
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
              </svg>
            )}
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
                <span>Form Elements</span>
              </a>
            </li>
            <hr style={{ backgroundColor: "#585757" }} />
            <li>
              <a href="forms-layouts.html">
                <i class="bi bi-circle"></i>
                <span>Form Layouts</span>
              </a>
            </li>
            <hr style={{ backgroundColor: "#585757" }} />
            <li>
              <a href="forms-editors.html">
                <i class="bi bi-circle"></i>
                <span>Form Editors</span>
              </a>
            </li>
            <hr style={{ backgroundColor: "#585757" }} />
            <li>
              <a href="forms-validation.html">
                <i class="bi bi-circle"></i>
                <span>Form Validation</span>
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
