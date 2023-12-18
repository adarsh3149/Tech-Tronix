import React from 'react'
import { Box } from '@mui/material';
import Card_comp from './Card_comp';
import Card_main from './Card_main';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import AnimatedTitle from './AnimTitle';

function Events() {
  
  return (
    <>
    <div className='heading' id='events'><AnimatedTitle name="events."/></div>
      
      <Box sx={{ display: "flex", justifyContent: "flex-start", rowGap: "4rem", columnGap: "4rem", padding: "0 4rem 4rem 4rem", flexWrap: "wrap", alignContent: "flex-start" }}>
        <Card_comp/>
      
      </Box>
      <Card_main></Card_main>
      </>
  )
}

export default Events