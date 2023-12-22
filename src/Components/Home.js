import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "./Untitled-1.png"
import video from "./video.mp4"
function Home() {

  return (
    <>
      <div className='video-container' style={{ width:"100vw", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",position:"absolute",top:"0",left:"0",zIndex:"-2",animation:"anim 8s linear infinite",backgroundImage:`url(${img})` }}></div>
      {/* <div className="video-container" style={{ position: "absolute", top: "0", left: "0" }}>
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <Box sx={{ fontSize: {xs:"5rem",md:"10rem"}, fontWeight: "600", position: "absolute", bottom: "5vh", left: '50%', transform: "translate(-50%,-50%)", color: "#f1f1f1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center' }}>Techtronix.
      <Box >
        <Link to="/signup">
        <Button variant='outlined' sx={{ color: "#f1f1f1", borderRadius: "0", borderColor: "#f1f1f1", fontSize: '1.6rem', margin: "0 1rem", cursor: "none",fontWeight:"600" }}>Register</Button>
        </Link>
        
        <Button variant='outlined' sx={{ color: "#f1f1f1", borderRadius: "0", borderColor: "#f1f1f1", fontSize: '1.6rem', margin: "0 1rem", cursor: "none",fontWeight:"600" }}>learn more</Button>
      </Box>
      </Box>
      {/* <div class="glitch-wrapper" id='home'>
        <Box class="glitch" data-glitch="TECH" style={{ fontFmily: "anurati", letterSpacing: "1rem" }}>TECH</Box>
        <div class="glitch" data-glitch="TRONIX" style={{ fontFmily: "anurati", letterSpacing: "1rem" }}>TRONIX</div>
        <Link to="/signup">
        <div class="button-container-2">
          <span class="mas">REGISTER</span>
          <button type="button" name="Hover">REGISTER</button>
        </div>
        </Link>
        <svg className='hero-svg' fill='#0f19227' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792"><defs><style>.cls-1</style></defs><path class="cls-1" d="M212.2,690.3q0-165,.1-330V255.8c0-11.4,0-11.4-11.7-11.4H44.8c-10.1,0-10.1,0-10.1-10.3,0-23.7.1-47.4-.1-71-.1-6,1.9-8,8-8H293.7c7.6,0,7.8.3,7.8,9.9q0,242.3.1,484.4v40.8Z"/><path class="cls-1" d="M312.2,690.3q0-93,.1-186.1V165.7c0-10.5,0-10.5,10.4-10.5H569.3c9.8,0,9.8,0,9.8,9.8v69.1c0,10.3,0,10.3-10.1,10.3-53,0-106,.1-159.1-.1-6.1,0-8.5,1.8-8.5,8.2q.3,218.8.2,437.8Z"/></svg>
      </div> */}



    </>
  )
}

export default Home