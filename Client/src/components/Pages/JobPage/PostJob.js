import React, { useState } from "react";


function PostJob() {
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

  // Handle form input changes
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Validate the form fields
  const validate = () => {
    let errors = {};
    if (!values.Company.trim()) {
      errors.Company = "Company name is required.";
    }
    if (!values.Description.trim()) {
      errors.Description = "Description is required.";
    }
    if (!values.Jtitle.trim()) {
      errors.Jtitle = "Job title is required.";
    }
    if (!values.Location.trim()) {
      errors.Location = "Location is required.";
    }
    if (!values.Salary || isNaN(values.Salary) || values.Salary <= 0) {
      errors.Salary = "Salary must be a positive number.";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed to submit the form
      try {
        const response = await fetch("http://localhost:2000/PostJob", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
          setMessage("Job posted successfully!");
          setError(false);
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
      // There are validation errors
      setMessage("Please fix the errors and submit again.");
      setError(true);
    }
  };

  return (
    <div className="container bg-light shadow">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit} className="row col-md-5">
        <div>
          <label>Company<span style={{color:"red",fontSize:"30px",marginLeft:"1px"}}>*</span>:</label>
          <input
            className="form-control"
            type="text"
            name="Company"
            onChange={handleChange}
     
          />
          {errors.Company && <p style={{ color: "red" }}>{errors.Company}</p>}
        </div>

        <div>
          <label>Description:</label>
          <input
            className="form-control"
            type="text"
            name="Description"
            onChange={handleChange}
        
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
          
          />
          {errors.Jtitle && <p style={{ color: "red" }}>{errors.Jtitle}</p>}
        </div>

        <div>
          <label>Location:</label>
          <input
            className="form-control"
            type="text"
            name="Location"
            onChange={handleChange}
          
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
            
          />
          {errors.Salary && <p style={{ color: "red" }}>{errors.Salary}</p>}
        </div>

        <div className="mt-4">
          <input className="btn btn-primary form-control" type="submit" value="Register" />
        </div>
      </form>

      {/* Display success or error message */}
      {message && <p style={{ color: err ? "red" : "green" }}>{message}</p>}
    </div>
  );
}

export default PostJob;
