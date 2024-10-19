import React, { useState } from "react";
import './register.css'

function Register() {
  const [values, setValues] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});


  // Handle form input changes
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Validate the form fields
  const validate = () => {
    let errors = {};
    if (!values.Fname.trim()) {
      errors.Fname = "First name is required.";
    }
    if (!values.Lname.trim()) {
      errors.Lname = "Last name is required.";
    }
    if (!values.Email.trim()) {
      errors.Email = "Email is required.";
    }
    if (!values.Password.trim()) {
      errors.Password = "Password is required.";
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
        const response = await fetch("http://localhost:2000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
          setMessage("User registered successfully!");
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
    <div className="container-fluid bg-light ">
      <div className="container ">
        <div className="card shadow ">
          <div className="card-header">
            <h3 className="text-center">
              <strong>Sign up here</strong>
            </h3>
          </div>
          <div className="Logincard-body py-5">
            <form onSubmit={handleSubmit} className="row col-md-6 Logincard-body  align-self-center">
              <div>
                <label>
                  First name<span style={{ color: "red" }}>*</span>:
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="Fname"
                  onChange={handleChange}
                />
                {errors.Fname && <p style={{ color: "red" }}>{errors.Fname}</p>}
              </div>

              <div>
                <label>
                  Last name<span style={{ color: "red" }}>*</span>:
                </label>
                <input
                 className="form-control form-control-lg"
                  type="text"
                  name="Lname"
                  onChange={handleChange}
                />
                {errors.Lname && <p style={{ color: "red" }}>{errors.Lname}</p>}
              </div>
              <div>
                <label>
                  Email<span style={{ color: "red" }}>*</span>:
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="Email"
                  onChange={handleChange}
                />
                {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
              </div>
              <div>
                <label>
                  Password<span style={{ color: "red" }}>*</span>:
                </label>
                <input
                 className="form-control form-control-lg"
                  type="password"
                  name="Password"
                  onChange={handleChange}
                />
                {errors.Password && (
                  <p style={{ color: "red" }}>{errors.Password}</p>
                )}
              </div>

              <div className="mt-4">
                <button
                 className=" btn-primary form-control form-control-lg"
                  type="submit"
                 
                >Register</button>
              </div>
            </form>
            {message&& <p style={{color:errors? "red":"green"}}></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;