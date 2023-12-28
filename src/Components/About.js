import React from 'react'
import AnimatedTitle from './AnimTitle'
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import img from "./poster_techtronix.png"

function About() {
    return (
        <>
            <div className='heading' id='about' ><AnimatedTitle name="about techtronix."></AnimatedTitle></div>
            <Box sx={{ display: "flex", padding: "0 4rem", flexDrection: { xs: "column", sm: "row" } }}>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{ display: "inline-block" }}
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
                <Box sx={{ marginLeft: "2rem", fontSize: { xs: "1.6rem", md: "1.6rem" }, fontWeight: "400", textTransform: "capitalize", textAlign: "justify" }}>
                    <b>
                    "Connecting Innovations: Amplifying the Future - EL&TCFest 2023"
                    </b>
                    <br></br>

                    Techtronix, where innovation meets imagination, and the future unfolds in a tapestry of amelioration technology. As the premier branch fest of the Electronics and Telecommunication Engineering department, Techtronix promises to be a celebration of brilliance, creativity, and the limitless potential of the electronic realm.Thrilling competitions that push boundaries, from collaborative hackathons and innovative circuit design to thought-provoking poster presentations. Deepening your understanding through insightful talks delivered by industry experts and gaining invaluable insights into the latest advancements and career possibilities.
                </Box>
            </Box>
        </>
    )
}

export default About