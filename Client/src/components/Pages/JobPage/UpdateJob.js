import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fouro4 from "../../ErorrPage/Fouro4";

function UpdateJob() {
    const { JobID } = useParams();
  const [Jobs, SetJobs] = useState([]);

  useEffect(() => {
    const api = "http://localhost:2000/";
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const jobsData = data.Jobs;
        const singleJob = jobsData.filter((job) => job.JOB_ID == JobID);
        // console.log(singleJob)

        SetJobs(singleJob);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, [JobID]);

  console.log(JobID);
if(Jobs.length){
  return (
    <section className="container-fluid ">
      <div className="form-wraper">
        <div className="header">
          <h5>Update job {JobID}</h5>
        </div>
        <form action="http://localhost:3003/PostJob" method="post">
          {Jobs.map((job) => {
            return (
              <div key={job.JOB_ID}>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Job title:</label>
                  </div>
                  <div className="col-75">
                    
                    <input
                      type="text"
                      value={job.JOB_TITLE}
                      id="Jtitle"
                      name="Jtitle"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Company:</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="Company" name="Company" value={job.COMPANY} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Location:</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="Location" name="Location" value={job.LOCATION} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Salary:</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="Salary" name="Salary"  value={job.SALARY} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Describtion:</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="Describtion" name="Describtion" value={job.DESCRIPTION} />
                  </div>
                </div>
              </div>
            );

          
          })}

          <div className="row">
            <div className="col-75">
              <div className="btn-container">
                <input type="submit" value="Save Update" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );}
  else{
   return <Fouro4/>
  }
}

export default UpdateJob;
