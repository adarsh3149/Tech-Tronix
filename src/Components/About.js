import React from 'react'
import AnimatedTitle from './AnimTitle'
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import img from "./poster_techtronix.png"

function About() {
    return (
        <>
            <div className='heading' ><AnimatedTitle name="about techtronix."></AnimatedTitle></div>
            <Box sx={{display:"flex",padding:"0 4rem",flexDrection:{xs:"column",sm:"row"}}}>

            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{display:"inline-block"}}
            >
                <Box
                    className="card"
                    sx={{
                        borderRadius: '0.5rem',
                        border: '0.1rem solid #0f1922',
                    }}
                >

                    <Box className='image' sx={{
                        width: { xs: "20rem", md: "26rem" },
                        height: { xs: "28rem", md: "36rem" }, background: `url(${img})`, backgroundSize: "cover", backgrondRepeat: "no-repeat", backgroundPosition: "center"
                    }}>
                    </Box>


                </Box>
            </motion.div>
            <Box sx={{marginLeft:"2rem",fontSize:{xs:"1.6rem",md:"1.6rem"},fontWeight:"400",textTransform:"capitalize",textAlign:"justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores suscipit numquam corrupti, impedit maxime est expedita sapiente ad nam amet non autem voluptatum vero consequatur eos dolorum, iusto asperiores commodi minima praesentium assumenda voluptatem totam at doloremque. Tempora sunt quia consectetur reiciendis pariatur provident vero libero voluptatibus fugit, expedita hic non! Impedit, repellendus sint. Quaerat deleniti, et, saepe quos vitae laboriosam illo impedit mollitia voluptatum provident soluta dicta ipsam asperiores voluptatibus excepturi odit eligendi. Commodi, vitae asperiores! Maxime expedita qui, 
            </Box>
            </Box>
        </>
    )
}

export default About