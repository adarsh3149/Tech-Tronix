// import "./App.css";
import Talk from "./Talk";
import { Event_data } from "./Event_data";
import AnimatedTitle from './AnimTitle';
import Footer from './Footer'
function Card_comp() {
  return (
    <>
   <div className='heading' id='talks'><AnimatedTitle name="talks."/></div>
    <div className="App">
    
      <div className="Event_data" style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {Event_data.map((item,index) => (
          
          <Talk data={item} key={item.id} />
          
        ))}
      </div>
      
    </div>
    
    </>
  );
}

export default Card_comp;



  // <motion.div
  //       initial={{ opacity: 0,y:50 }}
  //       whileInView={{opacity:1,y:0}}
  //       viewport={{ once: true }}
  //       transition={{ duration: 0.1, type: "spring", stiffness: 80 ,delay:index/2 * 0.2+0.5}}
     

  //     >