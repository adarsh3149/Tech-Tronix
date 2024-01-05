// import "./App.css";
import Talk from "./Talk";
import { Talks_data } from "./Talks_data";
import AnimatedTitle from './AnimTitle';
import Footer from './Footer'
import { Box } from "@mui/material";
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
       {isimg ?
        Talks_data.map((item) => (
          <Talk data={item} key={item.id} />
        )):
        <div style={{
          width:'100%',
          fontSize:"3rem",
          fontWeight:"500",
          display:"flex",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          margin:"0 1rem"
        }}>
          coming soon . . .
        </div>
        }
        
      </div>

    <Footer></Footer>
    </>
  );
}

export default Talks;