// import "./App.css";
import Talk from "./Talk";
import { Talks_data } from "./Talks_data";
import AnimatedTitle from './AnimTitle';
import Footer from './Footer'
function Talks({isimg}) {
  return (
    <>
   <div className='heading' id='talks'><AnimatedTitle name="talks."/></div>
    
      <div className="Talks_data" style={{
       display: "flex",
       flexWrap: "wrap",
       justifyContent:"center",
        
      }}>
       {!isimg ?
        Talks_data.map((item) => (
          <Talk data={item} key={item.id} />
        )):"coming soon"}
        
      </div>

    <Footer></Footer>
    </>
  );
}

export default Talks;