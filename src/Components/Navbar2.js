import { AppBar, Box } from '@mui/material'
import React, { useState } from 'react'
// import { Outlet, Link } from "react-router-dom";
import { Link } from 'react-scroll';
import { Link as MyLink } from 'react-router-dom';

function Navbar2() {
  const handleLogout = () => {
    // Clear the userToken from local storage
    localStorage.removeItem('userToken');
    // Redirect to the login or signup page
    // You can replace '/login' with the appropriate path
    window.location.href = '/';
  };
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

    const [scrolling, setScrolling] = useState(false);
  
    React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  console.log(scrolling)
  return (
<>

    <Box sx={{width:"100vw",heigt:"10rem",backgroundColor:scrolling?"#f1f1f1":"transparent",position:"sticky",top:"0",zIndex:"2",display:"flex",justifyContent:{xs:"center",md:"space-between"},padding:"2rem 4rem",flexDirection:{xs:"column",lg:"row"},alignItems:"center"}}>
    
        <Link to="home" smooth={true} duration={1000} offset={-200}  style={{textDecoration:"none",cursor:"none"}}><a href='#home'/>
        <svg className='svg' fill={scrolling?"#0f1922":"#f1f1f1"} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792"><defs><style>.cls-1</style></defs><path class="cls-1" d="M212.2,690.3q0-165,.1-330V255.8c0-11.4,0-11.4-11.7-11.4H44.8c-10.1,0-10.1,0-10.1-10.3,0-23.7.1-47.4-.1-71-.1-6,1.9-8,8-8H293.7c7.6,0,7.8.3,7.8,9.9q0,242.3.1,484.4v40.8Z"/><path class="cls-1" d="M312.2,690.3q0-93,.1-186.1V165.7c0-10.5,0-10.5,10.4-10.5H569.3c9.8,0,9.8,0,9.8,9.8v69.1c0,10.3,0,10.3-10.1,10.3-53,0-106,.1-159.1-.1-6.1,0-8.5,1.8-8.5,8.2q.3,218.8.2,437.8Z"/></svg>
        </Link>
        
        <div style={{display:"flex",justifyContent:"center",padding:"1rem 0",alignItems:"center",flexWrap:"wrap",rowGap:"1rem",columnGap:"1rem",textDecoration:"none",}}>
          <MyLink to='/events' style={{
            textDecoration:"none"
          }}>
            
            <div className="nav-items" style={{color:scrolling?'#0f1922':"#f1f1f1"}}>events</div>
            
            </MyLink>
            <Link to="schedule" smooth={true} duration={1000} offset={getOffset()}style={{textDecoration:"none",cursor:"none"}}>
            <div className="nav-items" style={{color:scrolling?'#0f1922':"#f1f1f1"}}><a href='#schedule'/>schedule</div>
            </Link>
            <Link to="members" smooth={true} duration={1000} offset={getOffset()} style={{textDecoration:"none",cursor:"none"}}>
            <div className="nav-items" style={{color:scrolling?'#0f1922':"#f1f1f1"}}><a href='#members'/>members</div>
            </Link>
            {!userTokenExists && (
              <MyLink to='/signin' smooth={true} duration={1000} offset={getOffset()} style={{textDecoration:"none",cursor:"none"}}>
              <div className="nav-items" style={{color:scrolling?'#0f1922':"#f1f1f1"}}>
              Login
            </div>
            </MyLink>
      )}
            {userTokenExists && (
              <Link onClick={handleLogout} smooth={true} duration={1000} offset={getOffset()} style={{textDecoration:"none",cursor:"none"}}>
              <div className="nav-items" style={{color:scrolling?'#0f1922':"#f1f1f1"}}>
              Logout
            </div>
            </Link>
      )}
        </div>
    </Box>
    {/* <Outlet /> */}
    </>
  )
}

export default Navbar2


