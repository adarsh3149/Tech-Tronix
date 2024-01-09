import './App.css';
import React, { useEffect } from 'react';
import Navbar2 from './Components/Navbar2';
// import { animateScroll as scroll } from 'react-scroll';
import { useRef } from 'react';
import Events from './Components/Events';
import Member from './Components/Member';
import {  Routes, Route } from "react-router-dom";
import Schedule from './Components/Schedule';
import Home from './Components/Home';
import {  animateScroll as scroll } from 'react-scroll';
import { Box } from '@mui/material';
import Sponser from './Components/Sponser';
import Footer from './Components/Footer';
import Table from './Components/Table';
import About from './Components/About';
import Signin from './Components/Signin';
import Signup from "./Components/Signup"
import EventsPage from './Components/EventsPage';

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
        <Route exact path="/" element={
          <>
            <div className="App" style={{ minHeight: "100vh", minWidth: "100vw" }}   onMouseMove={changePosition}>
              <Navbar2 />
              <Home />

              <Box sx={{ marginTop: "100vh" }}>

                <About></About>
                <Events />
                <Schedule></Schedule>
                <Table></Table>
                <Member></Member>

                <Sponser></Sponser>
                <Footer />
                {/* <EventsPage></EventsPage> */}
              </Box>
              <div className="cursor-style" ref={cursor} ></div>

            </div>
          </>
        } />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/signin" element={<Signin></Signin>} />
        <Route path="/events" element={<EventsPage></EventsPage>} />
      </Routes>


      {/* <div className="App" style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}> */}





      {/* <div className="cursor-style" ref={cursor} ></div> */}

      {/* </div> */}
    </>
  );
}

export default App;
