import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import { Cart } from "../Context";
import { motion, useAnimation } from "framer-motion";
function Card_comp() {
  const { setIsOpen } = useContext(Cart);

const events=[
  {
    name:"a",
    desc:"abc"
  },
  {
    name:"b",
    desc:"bsajx"
  },
  {
    name:"b",
    desc:"bsajx"
  },
  {
    name:"b",
    desc:"bsajx"
  },
  {
    name:"b",
    desc:"bsajx"
  },
]
    

const list=events.map((e,index)=>{
  return(
<motion.div
        initial={{ opacity: 0,y:50 }}
        whileInView={{opacity:1,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 0.1, type: "spring", stiffness: 80 ,delay:index/2 * 0.2+0.5}}
     

      >
        <Box
          className="card"
          sx={{
            borderRadius: '0.5rem',
            border: '0.1rem solid #0f1922',
          }}
        >
          <CardActionArea onClick={() => setIsOpen(true)} sx={{cursor: "none" }}
          >     
              <Box className='image' sx={{width: { xs: "20rem", md: "26rem" },
            height: { xs: "28rem", md: "36rem" },background:"url('https://sm.ign.com/t/ign_in/screenshot/default/feugmgtwqael2md_y1va.1280.jpg')",backgroundSize:"cover",backgrondRepeat:"no-repeat",backgroundPosition:"center"}}>               
              </Box>
              <Typography variant="h4" component="div" sx={{padding:" 1rem"}}>
                {e.name}
              </Typography>      
          </CardActionArea>
        </Box>
      </motion.div>
  )
})

console.log(list)
    return (

<>
{list}
</>   
    )
  }

  export default Card_comp