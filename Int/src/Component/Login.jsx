import React from 'react'
import {Form,Button} from 'react-bootstrap';
import { Facebook, google, illustraion } from '../assets';
import { FaRegUserCircle } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { FaEye } from "react-icons/fa";
 import "./Login.scss"
const Login = () => {
  return (
    <div className="LoginStart">
        
        <div className="ImageDiv">
        <img src={illustraion} alt="image"/>
    </div>
    <div className="FormDiv">
    
    <Form className="LoginForm">
   <div className="header"> <h1><span className="welcome">Welcome to<br/><span className="logo"> UNSTOP</span></span> </h1></div>
        <div className="Googlediv" style={{overflow:"hidden"}}><div className="FormIcon"><img src={google} alt="google" style={{padding:"2rem"}} /></div> <p className="fonts">Login  with Google</p></div>
        <div className="Facebookdiv" style={{overflow:"hidden"}}> <div className="FormIcon"><img src={Facebook} alt="facebok" style={{padding:"2rem"}}/></div><p className="fonts">Login  with Facebook</p></div>



<div className="BisectingDiv"> 
<div className="line"></div>
    <span className="division text">OR</span>
    <div className="line"></div>
</div>
       
        
            <Form.Group className="InputGroups">
                <div className="GroupData">
                     <FaRegUserCircle     className="Icons"/> 
                
                 <Form.Label className="label">UserName
                <Form.Control type="text" placeholder="Enter your name" className="inpute inputtext"/>
                </Form.Label> 
                </div>
                </Form.Group> 
                
              
            <Form.Group className="InputGroups">
                <div  className="GroupData">
                    < MdEmail   className="Icons"/>
                
                <Form.Label className="label">Email
                <Form.Control type="email" placeholder="Enter your Email" className="inpute inputtext"/>
                </Form.Label>
                </div>
                </Form.Group> 
              
            <Form.Group className="InputGroups">

                <div className="GroupData"> <IoMdKey   className="Icons"/> 
               
                <Form.Label className="label">Password
                <Form.Control type="password" minLength={8} placeholder="Enter your Password" className="inpute inputtext"/>
                </Form.Label>
              
                </div> 
                <div className="Passwordeye">  <FaEye   className="eye"/> </div>
                </Form.Group>
               <span className="Lastspan"><span className="checkbox"><Form.Control type="checkbox"/><p>Remind Me</p></span>
                <span className="forgotPassword">Forgot Password?</span></span>
                <Button className="Loginbutton">Login</Button>
                
                <p ClassName="Register"> Do you have an account? <span><a href="">Register</a></span></p>
                </Form>
                </div></div>

  )
}

export default Login