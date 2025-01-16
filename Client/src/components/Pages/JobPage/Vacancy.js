import React, { useEffect, useState } from "react";

const Vacancy = () => {
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
      <section
        className="container-fluid shadow bg-light clearfix py-3"
        style={{ marginTop: "130px" }}
      >
        <div className="search text-center">
          <h2 className="mb-4">Find Your Dream Job</h2>
          <form action="">
            <div className="row d-inline-flex gx-5">
              {/* <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="keywords"
                  placeholder="Keywords"
                />
              </div> */}
              <div className="col-md-4 mb-2 d-inline-flex align-items-center">
                <label htmlFor="category"><strong>Category:</strong></label>
                <select className="form-select form-select-lg" name="category">
                  <option selected>select category</option>
                  <option value="Telecom">Telecom</option>
                  <option value="IT">IT</option>
                  <option value="Telecom">Banking and insurance</option>
                </select>
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
                      <p className="card-text">
                        Description: {item.DESCRIPTION}
                      </p>
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
    </>
  );
};

export default Vacancy;
