import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "./helo.png"
import { Link as MyLink} from 'react-scroll';
import './Home.css'
function Home() {
  const userTokenExists = localStorage.getItem('userToken');
  const getOffset = () => {
    // Adjust offset based on screen size using media queries
    if (window.innerWidth < 600) {
      return -100; // Adjust for smaller screens
    } 
    else if (window.innerWidth > 600 &window.innerWidth < 800)  {
      return -90; // Adjust for smaller screens
    }
    
    else {
      return -60; // Default offset for larger screens
    }
  };
  // 0f19227
  return (
    <>
      <div className='video-container' id='home' style={{ width:"100vw", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",position:"absolute",top:"0",left:"0",zIndex:"1",backgroundImage:`url(${img})` }}>
      
      
      <Box sx={{ fontSize: {xs:"5rem",md:"10rem"}, fontWeight: "700", position: "absolute", bottom: "50vh", left: '50%',top:"50%", transform: "translate(-50%,-50%)", color: "#f1f1f1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center' }}>Techtronix.
      <Box >
        {!userTokenExists &&(
        <Link to="/signup">
        <Button variant='outlined' sx={{ color: "#f1f1f1", borderRadius: "0", borderColor: "#f1f1f1", fontSize: '1.6rem', margin: "0 1rem", cursor: "none",fontWeight:"600" }}>Register</Button>
        </Link>
)}
        <MyLink to="about" smooth={true} duration={1000} offset={getOffset()}style={{textDecoration:"none",cursor:"none"}}>
        <Button variant='outlined' sx={{ color: "#f1f1f1", borderRadius: "0", borderColor: "#f1f1f1", fontSize: '1.6rem', margin: "0 1rem", cursor: "none",fontWeight:"600" }}>learn more</Button>
        </MyLink>
      </Box>
      </Box> 
    </div>

    
      
      



    </>
  )
}

export default Home


