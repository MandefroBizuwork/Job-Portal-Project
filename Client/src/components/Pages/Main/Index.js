import React, { useEffect, useState } from "react";
import StepIndicator from "../../StepIndicator/Steps";
// import ContactPage from "../ContactUs/ContactPage"; // Uncomment if needed
// import Video from "./video/Video"; // Uncomment if you need this component

function Index() {
  const [error, setError] = useState("");
  const [jobsData, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const api = "http://localhost:2000/api/jobs/";
        const response = await fetch(api);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setJobs(data.Jobs[0]); // Store all jobs
      } catch (e) {
        setError(e.message);
        console.error(e.message);
      }
    };

    fetchJobs();
  }, []);

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
      
      <section className="container-fluid shadow bg-light clearfix py-3" style={{ marginTop: "130px" }}>
        <div className="search text-center">
          <h2 className="mb-4">Find Your Dream Job</h2>
          <form action="">
            <div className="row d-inline-flex gx-5">
              <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="keywords"
                  placeholder="Keywords"
                />
              </div>
              <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="location"
                  placeholder="Location"
                />
              </div>
              <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="company"
                  placeholder="Company"
                />
              </div>
              <div className="col-md-2 mb-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <StepIndicator />

      <section className="container-fluid shadow bg-light clearfix my-5">
        <div className="job-listings">
          <h2 data-aos="fade-up" className="text-center mb-4">
            Latest Job Listings
          </h2>
          <div className="row">
            {error ? (
              <div className="alert alert-danger text-center">{error}</div>
            ) : jobsData && jobsData.length > 0 ? (
              jobsData.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4" data-aos="fade-up">
                    <div className="card-header">
                      <h3>
                        <strong>{item.JOB_TITLE}</strong>
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Company: {item.COMPANY}</p>
                      <p className="card-text">Location: {item.LOCATION}</p>
                      <p className="card-text">Salary: {item.SALARY}</p>
                      <p className="card-text">Description: {item.DESCRIPTION}</p>
                      <a href="#" className="btn btn-success btn-md">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="container-fluid bg-light my-4">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                  <h1 style={{ color: "red" }}>There are no jobs available</h1>
                  {/* <Video /> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <ContactPage /> */}
    </>
  );
}

export default Index;