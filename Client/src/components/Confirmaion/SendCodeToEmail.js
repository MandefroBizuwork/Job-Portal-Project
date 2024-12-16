import { data } from "jquery";
import React, { useState } from "react";

const SendCodeToEmail = () => {
  const [email, setEmail] = useState(""); // Fixed 'cost' to 'const'
  const [code, setCode] = useState("");
  const [message, setmessage] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  // Send email verification code function
  async function sendCode(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:2000/sendCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Fixed 'json.STRINGFY' to 'JSON.stringify'
      });

      const data = await res.json();
      if (res.ok) {
        setmessage(data.message);
        setIsCodeSent(true);
      } else {
        setmessage(data.message);
        setIsCodeSent(false);
      }
    } catch (err) {
      console.log(data.message);
      setIsCodeSent(false);
    }
  }
  const verifyCode = async () => {
    try {
      const res = await fetch("http://localhost:2000/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }), // Fixed 'json.STRINGFY' to 'JSON.stringify'
      });
      const data = await res.json();
      if (res.ok) {
        setmessage("Verification successfull");
        Navigator("/PostJob/")
       
      } else {
        setmessage(data.message);
       
      }
    } catch (error) {
      setmessage(error.response?.data?.message || "Error verifying code");
    }
  };
  return (
    <form onSubmit={sendCode}>
      <h1>Email Verification</h1>
      {message && <p>{message}</p>}
{!isCodeSent ?
     ( <div className="email_container shadow p-5">
      <div className="my-3">
        <input
          className="form-control"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Added onChange to handle input
          placeholder="Enter your email"
          required
        />
        </div>
            <div className="my-3">
        <button  onClick={sendCode} style={{ padding: "10px 20px" }} className="btn btn-primary">
          Send Verification Code
        </button>
      </div>
      </div>):

     ( <div className="email_container shadow p-5">
      <div className="my-3">
        <input
          className="form-control"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter verification code"
          required
        />
        </div>  <div className="my-3">
        <button onClick={verifyCode} style={{ padding: "10px 20px" }}className="btn btn-primary">
          Verify Code
        </button>
      </div>
      </div>)
}
    </form>
  );
};

export default SendCodeToEmail;
