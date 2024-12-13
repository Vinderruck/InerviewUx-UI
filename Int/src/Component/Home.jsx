import React,{useState} from 'react'
import './Home.scss'
import { prof } from '../assets'
import {Button} from 'react-bootstrap'
import { jwtDecode } from "jwt-decode";

import { useNavigate } from 'react-router-dom'



const Home = () => {
const navigate =useNavigate()


    const [UserName, setUserName] = useState("User")
    const [email, setEmail] = useState("Email")

    const token = ()=>{
        const token=localStorage.getItem("authToken");

        if(!token){
            alert("no token available")
            return
        }
        try {
          //code todecode the toke

          const DecodedToken=jwtDecode(token)


          const { username,  email } =   DecodedToken;

          // Update state with user details
          setUserName(username );
          setEmail(email  );
        } catch (error) {
          alert("Issue found when decoding the token")
        }
        
    }

    //Log out function 
    const handleLogOut =()=>{
        localStorage.removeItem("authToken")
        navigate("/")
    }
  return (
    <div className="Homedisplay">
       
       
       <div className="Profile_welcome"> 
        
        <div className="dash">
    <h1>
      <span className="welcome">
        Welcome to<br />
        <span className="logo">UNSTOP</span>
      </span>
    </h1>
  </div>
  <div className="profile">
    <img src={prof}  alt="prof"/>
    <p className="paragraph">{UserName}</p>
    <p className="paragraph">{email}</p>
    
    <Button onClick={handleLogOut}> Logout</Button>
  </div>
  
  </div>
  </div>
  )
}

export default Home