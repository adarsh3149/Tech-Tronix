// import "./App.css";
import Talk from "./Talk";
import { Talks_data } from "./Talks_data";
import AnimatedTitle from './AnimTitle';
import Footer from './Footer';
import { Box } from "@mui/material";
import { motion } from "framer-motion";
function Talks({isimg}) {
  return (
    <>
   <div className='heading' id='talks' style={{
    padding:"2rem 1rem",margin:"0 2rem"
   }}><AnimatedTitle name="talks."/></div>
    
      <div className="Talks_data" style={{
       padding:"0 1rem",
       display: "flex",
       flexWrap: "wrap",
       justifyContent:"space-evenly",
       alignItems:"flex-start",
      //  backgroundColor:"red",
       margin:"0 1rem" 
      }}>
      {Talks_data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: index / 2 * 0.2 + 0.5 }}


          >
            <Talk data={item} key={item.id} />
          </motion.div>
        ))}
       {/* {isimg ?
        Talks_data.map((item) => (
          <Talk data={item} key={item.id} />
        )): */}
        {/* <div style={{
          width:'100%',
          fontSize:"3rem",
          fontWeight:"500",
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          margin:"0 1rem"
        }}>
          
        </div> */}
        {/* } */}
        
      </div>

    <Footer></Footer>
    </>
  );
}

export default Talks;