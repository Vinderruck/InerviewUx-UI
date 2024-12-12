import React from 'react'
import './Home.scss'
import { prof } from '../assets'
import {Button} from 'react-bootstrap'



const Home = () => {
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
    <p className="paragraph">UserName</p>
    <p className="paragraph">Email</p>
    
    <Button>Logout</Button>
  </div>
  
  </div>
  </div>
  )
}

export default Home