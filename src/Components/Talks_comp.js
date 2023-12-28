import React from 'react'
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import { Cart } from "../Context";
import { motion, useAnimation } from "framer-motion";
import { Talks_data } from './Talks_data';
function Talks_comp() {
  const { setIsOpen,setclick,click } = useContext(Cart);
  console.log(click)
const list=Talks_data.map((e,index)=>{
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
          }} onClick={()=>setclick(e)}
        >
          <CardActionArea onClick={() => setIsOpen(true)} sx={{cursor: "none" }}
          >     
              <Box className='image' sx={{width: { xs: "20rem", md: "26rem" },
            height: { xs: "28rem", md: "36rem" },background:e.img,backgroundSize:"cover",backgrondRepeat:"no-repeat",backgroundPosition:"center"}}>               
              </Box>
              <Box component="div" sx={{padding:" 1rem",textTransform:"uppercase",fontSize:"1.6rem"}}>
                {e.name}
              </Box>      
          </CardActionArea>
        </Box>
      </motion.div>
  )
})

    return (

<>
{list}
</>   
    )
  }

  export default Talks_comp