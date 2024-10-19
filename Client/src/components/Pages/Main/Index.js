import React, { useEffect, useState } from "react";
// import Video from "./video/Video"; // Uncomment if you need this component

function Index() {
  const [error, setError] = useState("");
  const [jobsData, SetJobs] = useState([]);

  useEffect(() => {
    const api = "http://localhost:2000/";
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const jobsData = data.Jobs;
        SetJobs(jobsData);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

    return (
      <>
        <section
          className="container-fluid shadow bg-light clearfix py-3 "
          style={{ marginTop: "130px" }}
        >
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
        <section className="container-fluid shadow bg-light clearfix my-5">
          <div className="job-listings">
            <h2 className="text-center mb-4">Latest Job Listings</h2>

            <div className="row">
              {jobsData && jobsData.length > 0 ? (
                jobsData.map((item, index) =>
                  item ? (
                    <div className="col-md-4" key={index}>
                      <div className="card  mb-4">
                        <div className="card-header">
                          <h3>
                            <strong>{item.JOB_TITLE}</strong>
                          </h3>
                        </div>
                        <div className="card-body">
                          <p className="card-text">Company: {item.COMPANY}</p>
                          <p className="card-text">Location: {item.LOCATION}</p>
                          <p className="card-text">Salary: {item.SALARY}</p>
                          <p className="card-text">
                            Description: {item.DESCRIPTION}
                          </p>
                          <a href="#" className="btn btn-success btn-md">
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : null
                )
              ) : (
                <section
                  className="container-fluid bg-light"
                  style={{ marginTop: "100px" }}
                >
                  <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5 text-center">
                      <h1 style={{ color: "red" }}>
                        There is no jobs available
                      </h1>
                    </div>
                    {/* <Video /> */}
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }


export default Index;
