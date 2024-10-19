import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
// import SelfCloseModalAlert from "./SelfCloseModalAlert";
import SelfClosingAlert from "./SelfClosingAlert";




function ManageJob() {
  const [showModal, setShow] = useState(false);
  const [modalType, setModalType] = useState("create");
  const [selectedJob, setSelectedJob] = useState({});
  const [jobsData, SetJobs] = useState([]);
  const [values, setValues] = useState({
    Company: "",
    Description: "",
    Jtitle: "",
    Location: "",
    Salary: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [err, setError] = useState(false);

  useEffect(() => {
    const api = "http://localhost:2000/";
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const jobsData = data.Jobs || [];
        SetJobs(jobsData);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  const handleClose = () => {
    setSelectedJob({});
    setValues({
      Company: "",
      Description: "",
      Jtitle: "",
      Location: "",
      Salary: "",
    });
    setShow(false);
  };

  const ShowPostModal = () => {
    setShow(true);
    setModalType("create");
    setValues({
      Company: "",
      Description: "",
      Jtitle: "",
      Location: "",
      Salary: "",
    });
  };

  const ShowUpdateModal = (item) => {
    setShow(true);
    setModalType("update");
    setSelectedJob(item);
    setValues({
      Company: item.COMPANY,
      Description: item.DESCRIPTION,
      Jtitle: item.JOB_TITLE,
      Location: item.LOCATION,
      Salary: item.SALARY,
    });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!values.Company.trim()) errors.Company = "Company name is required.";
    if (!values.Description.trim())
      errors.Description = "Description is required.";
    if (!values.Jtitle.trim()) errors.Jtitle = "Job title is required.";
    if (!values.Location.trim()) errors.Location = "Location is required.";
    if (!values.Salary || isNaN(values.Salary) || values.Salary <= 0)
      errors.Salary = "Salary must be a positive number.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const url =
          modalType === "create"
            ? "http://localhost:2000/ManageJobs/PostJob"
            : `http://localhost:2000/ManageJobs/UpdateJob/${selectedJob.JOB_ID}`;
        const method = modalType === "create" ? "POST" : "PUT"; // Assuming you have a PUT endpoint for updates
        const response = await fetch(url, {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
          setMessage(
            modalType === "create"
              ? "Job posted successfully!"
              : "Job updated successfully!"
          );
          setError(false);
          // Refresh the job list or update state
          if (modalType === "create") {
            SetJobs((prevJobs) => [...prevJobs, data.job]); // Assuming your API returns the created job
          } else {
            SetJobs((prevJobs) =>
              prevJobs.map((job) =>
                job.JOB_ID === selectedJob.JOB_ID ? values : job
              )
            );
          }
        } else {
          setMessage(data.message || "An error occurred.");
          setError(true);
        }
      } catch (err) {
        setMessage("An unexpected error occurred.");
        setError(true);
        console.error(err);
      }
    } else {
      setMessage("Please fix the errors and submit again.");
      setError(true);
    }
  };

  //for delete modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(null);
  const [DeletMessage, setDeletMessage] = useState(null);

  const handlDeleteClick=(jobid)=>{
    setIsModalOpen(true);// // Open the confirmation modal
    setJobIdToDelete(jobid);
    //const isConfirmed = confirm("Are you sure you want to delete this job?");

  }
  const handleCancelDelete = () => {
    setIsModalOpen(false); // Close the modal without deleting
  };







  //self closing modal logic
  const [SelfModalOpen, setSelfModalOpen] = useState(false);
  // const [SelfModalClose, setSelfModalClose] = useState(false);
 

  const handleSelfClose = () => setSelfModalOpen(false);
  //
  const handleConfirmDelete = async () => {
    setIsModalOpen(false)
    try {
      const response = await fetch(`http://localhost:2000/ManageJobs/DeleteJob/${jobIdToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setDeletMessage("Job deleted successfully:", data);
        setSelfModalOpen(true)
       
      } else {
        setDeletMessage("Failed to delete the job:", response.statusText);
       
      }
    } catch (error) {
      setDeletMessage("Error during deletion:", error);
     
    }

  
  };
  
  // // Usage example
  // deleteJob(1); // Pass the job ID you want to delete

  
  if (jobsData) {
    return (
      <div className="container-fluid pt-5" style={{ marginTop: "100px" }}>
        <div className="modal-container bg-light clearfix">
          
        <SelfClosingAlert
           show={SelfModalOpen}
           onClose={handleSelfClose}
           message={DeletMessage}
          
          
          />
          <Button
            style={{ float: "right" }}
            className="btn btn-success"
            onClick={ShowPostModal}
          >
            Add new Job
          </Button>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {modalType === "create" ? "Post a Job" : "Update Job"}
                {selectedJob.JOB_ID}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Company
                    <span
                      style={{
                        color: "red",
                        fontSize: "30px",
                        marginLeft: "1px",
                      }}
                    >
                      *
                    </span>
                    :
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="Company"
                    value={values.Company}
                    onChange={handleChange}
                  />
                  {errors.Company && (
                    <p style={{ color: "red" }}>{errors.Company}</p>
                  )}
                </div>
                <div>
                  <label>Description:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Description"
                    onChange={handleChange}
                    value={values.Description}
                  />
                  {errors.Description && (
                    <p style={{ color: "red" }}>{errors.Description}</p>
                  )}
                </div>
                <div>
                  <label>Job Title:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Jtitle"
                    onChange={handleChange}
                    value={values.Jtitle}
                  />
                  {errors.Jtitle && (
                    <p style={{ color: "red" }}>{errors.Jtitle}</p>
                  )}
                </div>
                <div>
                  <label>Location:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Location"
                    onChange={handleChange}
                    value={values.Location}
                  />
                  {errors.Location && (
                    <p style={{ color: "red" }}>{errors.Location}</p>
                  )}
                </div>
                <div>
                  <label>Salary:</label>
                  <input
                    className="form-control"
                    type="number"
                    name="Salary"
                    onChange={handleChange}
                    value={values.Salary}
                  />
                  {errors.Salary && (
                    <p style={{ color: "red" }}>{errors.Salary}</p>
                  )}
                </div>
                <div className="mt-4">
                  <input
                    className="btn btn-primary form-control btn-lg"
                    type="submit"
                    value={modalType === "create" ? "Register" : "Save Update"}
                  />
                </div>
              </form>
              {message && (
                <p style={{ color: err ? "red" : "green" }}>{message}</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="btn btn-danger btn-lg"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="table-container shadow bg-light">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Job ID</th>
                <th scope="col">Job Title</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
                <th scope="col">Salary</th>
                <th scope="col">Description</th>
                <th scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {jobsData && jobsData.length > 0 ? (
                jobsData.map((item, index) =>
                  item ? (
                    <tr key={item.JOB_ID}>
                      <td>{index + 1}</td>
                      <td>{item.JOB_ID}</td>
                      <td>{item.JOB_TITLE}</td>
                      <td>{item.COMPANY}</td>
                      <td>{item.LOCATION}</td>
                      <td>{item.SALARY}</td>
                      <td>{item.DESCRIPTION}</td>
                      <td style={{display:"Flex",columnGap:"10px"}}>
                      <Link                         
                          className="btn btn-success"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => ShowUpdateModal(item)}
                          className="btn btn-warning"
                        >
                          Update
                        </button>
                        <Link
                          onClick={() => handlDeleteClick(item.JOB_ID)}
                          className="btn btn-danger"
                        >
                          Delete
                        </Link>
                      </td>
                     
                    </tr>
                  ) : null
                )
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No jobs available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <ConfirmDeleteModal
           isOpen={isModalOpen}
           onConfirm={handleConfirmDelete}
           onCancel={handleCancelDelete}
           message={DeletMessage}
          
          />

          {/* <SelfCloseModalAlert
            showModal={SelfModalOpen}
            onClose={handleSelfClose}
          
          
          /> */}
          
        </div>
      </div>
    );
  } else {
    return (
      <section
        className="container-fluid bg-light"
        style={{ marginTop: "100px" }}
      >
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5 text-center">
            <h1 style={{ color: "red" }}>There is no jobs available</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default ManageJob;
