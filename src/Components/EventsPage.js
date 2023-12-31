import React, { useEffect } from "react";
import Talks from "./Talks";
import Events from "./Events";
import Navbar from "./Navbar";


const EventsPage = () => {
  useEffect(() => {
    // Scroll to the top when ComponentB mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'smooth' for smooth scrolling
    });
  }, []);

  return (
    <>
      <Navbar/>    
      <Events />
      <Talks />
    </>
  );
};

export default EventsPage;
