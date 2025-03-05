import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Your Account Created Successfull ","success")
    } else {
    props.showAlert("Invalid credentials!","danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="conatiner mt-4 p-4 rounded border border-secondary  ">
      <form onSubmit={handleSubmit}>
        <center>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </center>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              onChange={onChange}
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              minLength={6}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <span>&#128275;</span> : <span>&#128274;</span>}
            </button>
          </div>
        </div>
          <label htmlFor="cpassword">Confirm Password</label>
          <div className="input-group">
            <input
              onChange={onChange}
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              minLength={6}
              required
            />
          <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <span>&#128275;</span> : <span>&#128274;</span>}
            </button>
        </div>
        <center>
          <button type="submit" className="btn btn-outline-success my-2">
            SignUp
          </button>
        </center>
      </form>
    </div>
  );
};

export default Signup;
