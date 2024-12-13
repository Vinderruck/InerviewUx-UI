import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Facebook, google, illustraion } from '../assets';
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  // State hooks for inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setcheck] = useState(false)
  const [error, seterror] = useState(null)
  const [showPassword, setShowPassword] = useState(false);



  // Function handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Validation
    if (username !== "emilys") {
     const timer=  

      setInterval(()=>{ 
        seterror("Invalid Username"),10000
      }
 )
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      alert("Invalid Email Format.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // API call
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username,
          password,
          email,
          expiresInMins: 30,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store token in localStorage and redirect
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      alert("Login successful!");
      navigate('/home'); // Redirect to main page
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    //   alert("Login failed. Please check your credentials and try again.");
      seterror("Login failed. Please check your credentials and try again.")
      setTimeout(()=>{
        seterror("")
      },3000 )
      
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="LoginStart">
      <div className="ImageDiv">
        <img src={illustraion} alt="Illustration" />
      </div>
      <div className="FormDiv">
        <Form onSubmit={handleSubmit} className="LoginForm">
          <div className="header">
            <h1>
              <span className="welcome">
                Welcome to<br />
                <span className="logo">UNSTOP</span>
              </span>
            </h1>
          </div>

          <div className="Googlediv">
            <div className="FormIcon">
              <img src={google} alt="Google" />
            </div>
            <p className="fonts">Login with Google</p>
          </div>
          <div className="Facebookdiv">
            <div className="FormIcon">
              <img src={Facebook} alt="Facebook" />
            </div>
            <p className="fonts">Login with Facebook</p>
          </div>

          <div className="BisectingDiv">
            <div className="line"></div>
            <span className="division text">OR</span>
            <div className="line"></div>
          </div>

          {/* Username Input */}
          <Form.Group className="InputGroups">
            <div className="GroupData">
              <FaRegUserCircle className="Icons" />
              <Form.Label className="label">
                Username
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="inpute inputtext"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} required
                />
              </Form.Label>
            </div>
          </Form.Group>

          {/* Email Input */}
          <Form.Group className="InputGroups">
            <div className="GroupData">
              <MdEmail className="Icons" />
              <Form.Label className="label">
                Email
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  className="inpute inputtext"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              required  />
              </Form.Label>
            </div>
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="InputGroups">
            <div className="GroupData">
              <IoMdKey className="Icons" />
              <Form.Label className="label">
                Password
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="inpute inputtext"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} required
                />
              </Form.Label>
            </div>
            <div className="Passwordeye" onClick={togglePasswordVisibility}>
              <FaEye className="eye" />
            </div>
          </Form.Group>

          <span className="Lastspan">
            <span className="checkbox">
              <Form.Control type="checkbox" name="check" value={check} onChange={(e)=> setcheck(!check)} requred />
              <p>Remember Me</p>
            </span>
            <span className="forgotPassword">Forgot Password?</span>
          </span>
          <div><p className="paragraph">{error}</p></div>
          <Button type="submit" className="Loginbutton">
            Login
          </Button>

          <p className="Register">
            Do you have an account? <span><a href="">Register</a></span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
