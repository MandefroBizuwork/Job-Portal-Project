import React,{useState} from "react";
function Footer() {
  const [quicklinks,setQuicklinks]=useState(false)
  const displayQuicklink=()=>{
    setQuicklinks((prv)=>!prv)
  }


console.log(quicklinks)
  return (
    <div className="container-fluid bg-dark   ">
      <footer className="container">
        <div className="row footer-links-wrapper">
          <div className="col-xxl-4">
            <h1 className="btn btn-secondary  " onClick={displayQuicklink}>
              Quick links{" "}
              <i
                className={`fa fa-${quicklinks? "close":"plus"} plus_icon plus_icon`}
                aria-hidden="true"
              ></i>
            </h1>
           <ul className={`list-unstyled ${quicklinks? "showQuicklink":""}`}>
              <li>
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xxl-4">
            <h1 className="btn btn-secondary">
              Contact{" "}
              <i className="fa fa-plus plus_icon" aria-hidden="true"></i>
            </h1>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="nav-link">
                  Email: support@jobportal.com
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Phone: +123 456 7890
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Address: 123 Job Street, Career City
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xxl-4">
            <h1 className="btn btn-secondary">
              Follow us{" "}
              <i className="fa fa-plus plus_icon" aria-hidden="true"></i>
            </h1>
            <ul className="list-unstyled">
              <li>
                {" "}
                <a href="#" aria-label="Facebook" className="nav-link">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#" aria-label="Twitter" className="nav-link">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#" aria-label="LinkedIn" className="nav-link">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram" className="nav-link">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
