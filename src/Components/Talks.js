// import "./App.css";
import Talk from "./Talk";
import { Talks_data } from "./Talks_data";
import AnimatedTitle from './AnimTitle';
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
        
      </div>
    </>
  );
}

export default Talks;