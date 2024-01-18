import React from 'react'
import AnimatedTitle from './AnimTitle';
// import Footer from './Footer';
import { motion } from "framer-motion";
import Conclaves from './Conclaves';
import { Conclave_data } from './Conclave_data';
const Conclave = () => {
  return (
    <>
      <div className='heading' id='talks' style={{
        padding: "2rem 1rem", margin: "0 2rem"
      }}><AnimatedTitle name="Indusrial Conclave." /></div>

      <div className="Talks_data" style={{
        padding: "0 1rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        //  backgroundColor:"red",
        margin: "0 1rem"
      }}>
        {Conclave_data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: index / 2 * 0.2 + 0.5 }}
          >
            <Conclaves data={item} key={item.id} />
          </motion.div>
        ))}

      </div>

    </>
  )
}

export default Conclave