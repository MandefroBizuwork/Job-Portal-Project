import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const[loading,setLoading]=useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setVisibility] = useState(false);
  const navigate = useNavigate();

  // Validate the form fields
  const validate = () => {
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required.";
    }
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:2000/api/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        // console.log(data.user.role==="admin")
        if (response.ok) {
          setLoading(false)          
          localStorage.setItem("token", data.token);
          setEmail("");
          setPassword("");
           if(data.user.role==="admin"){
            navigate("/dashboard");
           }
          // navigate("/dashboard");
         // console.log(data.role)
        } else {
          setLoginError(data.msg || "Login failed");
          setLoading(false)    
        }
      } catch (err) {
        setLoginError("An unexpected error occurred!");
        console.error("Fetch error:", err);
        setLoading(false)    
      }
    } else {
      setMessage("Please fix the errors and submit again.");
      setLoading(false)    
    }
  };

  return (
    <div className="container-fluid login-bg">
      <div className="container">
        <div className="card shadow" data-aos="fade-right">
          <div className="card-header">
            <h3 className="text-center">
              <strong>Login here</strong>
            </h3>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          </div>
          <div className="Logincard-body py-5">
            <form
              onSubmit={handleSubmit}
              className="row col-md-6 Logincard-body align-self-center"
            >
              <div>
                <label>
                  Email<span style={{ color: "red" }}>*</span>:
                </label>
                <input
                  className="form-control form-control-lg"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>

              <div style={{ position: "relative" }}>
                <label>
                  Password<span style={{ color: "red" }}>*</span>:
                </label>
                <input
                  className="form-control form-control-lg"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setVisibility(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "70%",
                    transform: "translateY(-60%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>

              <div className="mt-4">
                {loading?(<p>Loading...</p>)
                
                
                :(<button
                  className="btn-primary form-control form-control-lg"
                  type="submit"
                >
                  Login
                </button>)}
              </div>
              <div className="mt-3">
                <hr />
                <div className=" d-flex gap-3">
                  <span>Don't have an account?</span>
                  <Link style={{textDecoration:"underline"}} className="link-offset-2" to="/register">
                    Create acount
                  </Link>
                </div>
              </div>
            </form>
            {message && <p style={{ color: "red" }}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
