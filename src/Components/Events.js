// import "./App.css";
import Talk from "./Talk";
import { Event_data } from "./Event_data";
import AnimatedTitle from './AnimTitle';
import Footer from './Footer'
import Card_main from "./Card_main";
import Card_comp from "./Card_comp";
import { Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
function Events() {
  const location = useLocation();

  const isHomePage = () => {
    return location.pathname === '/'
  }
  return (
    <>
      <div className='heading' id='talks'><AnimatedTitle name="events." /></div>

      <div className="Talks_data" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",

      }}>
        

          {Event_data.map((item,index) => (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: index / 2 * 0.2 + 0.5 }}
  
  
          >
            <Card_main data={item} key={item.id} />
            </motion.div>
          ))}

        

      </div>
      <div style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        //  alignItems:"center"
      }}>
        {isHomePage() && (
          <Link to='/events'>
            <Button
              variant="outlined"
              sx={{
                width: "30vw",
                color: "#f1f1f1",
                borderRadius: "0",
                fontSize: "1.6rem",
                mrgin: "0 1rem",
                fontWeight: "600",
                backgroundColor: "#0f1922",
                ":hover": { color: "#0f1922" },
              }}
            >
              Learn More . . .
            </Button>
          </Link>
        )}

      </div>


    </>
  );
}

export default Events;