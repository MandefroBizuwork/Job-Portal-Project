import React, { useEffect, useState } from "react";
import StepIndicator from "../../StepIndicator/Steps";
// import ContactPage from "../ContactUs/ContactPage"; // Uncomment if needed
// import Video from "./video/Video"; // Uncomment if you need this component

function Index() {
  

  return (
    <>
      <header className="hero-area main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div
                className="hero-caption pt-150 pb-200"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  zIndex: "1",
                }}
              >
                <h2
                  data-aos="fade-right"
                  style={{
                    fontSize: "60px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontWeight: "900",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                  }}
                >
                  Find our products and services
                </h2>
                <p data-aos="fade-left">Branding news</p>
                <div className="row">
                  <div
                    data-aos="fade-right"
                    className="col-md-5 text-md-end hero-button"
                  >
                    <a className="button-1" href="/register">
                      Create an account
                    </a>
                  </div>
                  <div data-aos="fade-left" className="col-md-3 text-md-start">
                    <a className="button-1" href="/login">
                      Sign in
                    </a>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1638549227">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              style={{ fill: "white" }}
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            ></path>
          </svg>
        </div>
      </header>
      
    

      <StepIndicator />

    
      {/* <ContactPage /> */}
    </>
  );
}

export default Index;