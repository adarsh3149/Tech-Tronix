import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import {Cart} from "../Context";
import { motion, useAnimation } from "framer-motion";
function Membercard() {
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
          transition={{ duration: 0.1, type: "spring", stiffness: 80 ,delay:index/10 * 0.2+0.5}}
       
  
        >
          <Box
            className="card"
            sx={{
              width: { xs: "20rem", md: "32rem" },
              height: { xs: "28rem", md: "40rem" },
              borderRadius: '0.5rem',
              border: '0.1rem solid #0f1922',
            }}
  
          >
            <CardActionArea onClick={() => setIsOpen(true)} sx={{ width: "100%", height: "100%", cursor: "none" }}
            >
  
              <CardContent>
                <Typography variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {e.desc}
                </Typography>
              </CardContent>
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

export default Membercard