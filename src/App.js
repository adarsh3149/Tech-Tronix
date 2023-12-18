import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar2 from './Components/Navbar2';
// import { animateScroll as scroll } from 'react-scroll';
import { useRef } from 'react';
import Events from './Components/Events';
import Member from './Components/Member';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './Components/Schedule';
import Home from './Components/Home';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Box } from '@mui/material';
import Sponser from './Components/Sponser';
import Footer from './Components/Footer';
import Table from './Components/Table';
import About from './Components/About';
import Signin from './Components/Signin';
import Signup from "./Components/Signup"
function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }
  useEffect(() => {
    // Scroll to the top on page load
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
          <div className="App" style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}>
            <Navbar2 />
            <Home />

            <Box sx={{ marginTop: "100vh" }}>

              <About></About>
              <Events />
              <Schedule></Schedule>
              <Table></Table>
              <Member></Member>
              <Footer />
            </Box>
            <div className="cursor-style" ref={cursor} ></div>
            </div>
          </>
        } />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/signin" element={<Signin></Signin>} />

      </Routes>


      {/* <div className="App" style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}> */}



      {/* <Sponser/> */}

      {/* <div className="cursor-style" ref={cursor} ></div> */}

      {/* </div> */}
    </>
  );
}

export default App;
