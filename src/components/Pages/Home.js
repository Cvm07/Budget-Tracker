import React from 'react'
import { Button } from "@material-ui/core";
import './Home.css'
import { Link } from "react-router-dom";
 export const Home = () => {
  return (
    <div className="content">
      <h1>TRACK YOUR BUDGET!!</h1>
      <p>BDGTracker helps you to pull information from each of your different accounts and aggregate that information on one dashboard.<br/>Bring you income and expenses notedown at a digital space with our website!</p>
      <Link to="/budgetracker" style={{textDecoration:'none'}}><Button variant="contained" disableElevation style={{borderRadius:'25px',backgroundColor:'#b08d80',color:'#050505',marginTop:'20px'}}>Get Started</Button></Link>
      
    </div> 
  )
}

