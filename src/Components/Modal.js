import React from "react";// import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Talks_data } from "./Talks_data";
import { ref, get, getDatabase } from 'firebase/database';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./Modal.css"
const Modal = ({ data, close }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {img, fullname, theme, description, rules, url, time, venue, istheme, isurl2,url2, isprob,isRule} = data;
  const rule = rules?.map((e, index) => {
    return (
      <li style={{ color: "#737373", fontSize: "1.25rem", fontWeight: "500", margin: "1rem 0", textTransform: 'none' }}>{e}</li>
    )
  })
  const handleClick = async (url) => {
    try {
        const userToken = localStorage.getItem('userToken');

        if (userToken) {
            // Check if the userToken matches an email in the database
            const userRef = ref(getDatabase(), 'users');
            const snapshot = await get(userRef);

            if (snapshot.exists()) {
                const users = snapshot.val();
                const userWithEmail = Object.values(users).find(user => user.email === userToken);

                if (userWithEmail) {
                    // User is authenticated, proceed with the redirect
                    window.open(url, '_blank');
                    return;
                }
            }

            // User not found in the database, show alert and redirect to signup
            handleClickOpen();
        } else {
            // UserToken not found, show alert and redirect to signup
            handleClickOpen();
        }
    } catch (error) {
        console.error('Error checking userToken:', error.message);
    }
};


const handleClick2 = async (url2) => {
  try {
      const userToken = localStorage.getItem('userToken');

      if (userToken) {
          // Check if the userToken matches an email in the database
          const userRef = ref(getDatabase(), 'users');
          const snapshot = await get(userRef);

          if (snapshot.exists()) {
              const users = snapshot.val();
              const userWithEmail = Object.values(users).find(user => user.email === userToken);

              if (userWithEmail) {
                  // User is authenticated, proceed with the redirect
                  window.open(url2, '_blank');
                  return;
              }
          }

          // User not found in the database, show alert and redirect to signup
          handleClickOpen();
      } else {
          // UserToken not found, show alert and redirect to signup
          handleClickOpen();
      }
  } catch (error) {
      console.error('Error checking userToken:', error.message);
  }
};

 // Function will execute on click of button
 const handleDownload = () => {
  // Assuming pdfFile is the URL or Blob of your PDF file
  const pdfFile = '/docs/HACKSPHERE problem statement.pdf';

  // Create a hidden anchor element
  const anchor = document.createElement('a');
  anchor.style.display = 'none';
  document.body.appendChild(anchor);

  // Set the href and download attributes to trigger download
  anchor.href = pdfFile;
  anchor.download = 'HackSphere Problem Statement';

  // Trigger a click event to start the download
  anchor.click();

  // Remove the anchor from the DOM
  document.body.removeChild(anchor);
};

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableScrollLock={true} 
      >
        <DialogTitle id="alert-dialog-title" sx={{textTransform:"none",fontSize:"22px",fontFamily:"Montserrat"}}>
          {"Looks like you aren't logged in"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{textTransform:"none",fontSize:"18px",fontFamily:"Montserrat"}}>
            Do you want to proceed to login ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{textTransform:"none",fontSize:"16px",fontFamily:"Montserrat",color:"#3d3d3d"}}>Close</Button>
          <Link to='/signin'>
          <Button  autoFocus sx={{textTransform:"none",fontSize:"16px",fontFamily:"Montserrat",color:"#3d3d3d"}}>
            Proceed
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
      <motion.div
        className="modal"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          className="modal__image"
          alt="real estate mansion"
          src={img}
          variants={imageVariants}
        ></motion.img>
        <motion.div className="modal__info" variants={modalInfoVariants}>
          <motion.div className="modal__row" variants={modalRowVariants}>
            <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "2rem 0" }}>
              <span className="modal__price">{fullname}</span>
            </Box>
          </motion.div>
          {istheme  ? <motion.div className="modal__row" variants={modalRowVariants}>
            <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "0" }}>
              Theme :-
              <p className="modal__description">{theme}</p>
            </Box>
          </motion.div> : ""}


          <motion.div
            className="modal__description-wrapper"
            variants={modalRowVariants}
          >
            <Box sx={{ fontSize: "2rem", fontWeight: "600" }}>
              Description
              <p className="modal__description">{truncate(description)}</p>
            </Box>
          </motion.div>
          <motion.div
            className="modal__description-wrapper"
            variants={modalRowVariants}
          >
            {isRule ? (<Box sx={{ fontSize: "2rem", fontWeight: "600", }}>
              Rules
              <p className="modal__description">{rule}</p>


              <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "2rem 0" }}>
              Timing :- <span className="modal__description">{time}</span>

            </Box>
            <Box sx={{ fontSize: "2rem", fontWeight: "600", }}>
              Venue :- <span style={{ fontSize: "2rem" }} className="modal__description">{venue}</span>

            </Box>
            </Box>):""}
            {isprob?
            <>
            <Button onClick={handleDownload}
            variant="outlined"
            sx={{
              color: "#f1f1f1",
              borderRadius: "10px",
              fontSize: "1.6rem",
              marginTop: "1.5rem 0 ",
              top: "1rem",
              fontWeight: "600",
              backgroundColor: "#0f1922",
              ":hover": { color: "#0f1922" },
            }}
          >
            DownLoad Problem Statement 
          </Button>
            </>
            
            :""}
            
          </motion.div>
          {isurl2 ?
          <>
          <Box sx={{
            display:"flex",
            flexDirection:"column"
          }}>
          <Button onClick={() => handleClick(url)}
            variant="outlined"
            sx={{
              color: "#f1f1f1",
              borderRadius: "10px",
              fontSize: "1.6rem",
              marginTop: "1.5rem 0 ",
              top: "1rem",
              fontWeight: "600",
              backgroundColor: "#0f1922",
              ":hover": { color: "#0f1922" },
            }}
          >
            Register <span style={{
                // backgroundColor: "red",
                position:"relative",
                fontSize:"1.5rem",
                fontWeight:"400",
                display:"flex",
                // margin:"2rem ",
                padding:"1.3rem ",
                justifyContent:"flex-start",
              alignItems:"flex-start"
                
              }}>: - For College students</span>
          </Button>
          
            
              <Button onClick={() => handleClick2(url2)}
                variant="outlined"
                sx={{
                  color: "#f1f1f1",
                  borderRadius: "10px",
                  fontSize: "1.6rem",
                  marginTop:"2rem",
                  
                  fontWeight: "600",
                  backgroundColor: "#0f1922",
                  ":hover": { color: "#0f1922" },
                }}
              >
                Register  <span style={{
                // backgroundColor: "red",
                position:"relative",
                fontSize:"1.5rem",
                fontWeight:"400",
                display:"flex",
                // margin:"2rem ",
                padding:"1.3rem ",
                justifyContent:"center",
              alignItems:"center"
                
              }}>: - For School students</span>

              </Button > 
            
            </Box>  
            </>
            : (<Button onClick={() => handleClick(url)}
            variant="outlined"
            sx={{
              color: "#f1f1f1",
              borderRadius: "10px",
              fontSize: "1.6rem",
              marginTop: "1.5rem 0 ",
              top: "1rem",
              fontWeight: "600",
              backgroundColor: "#0f1922",
              ":hover": { color: "#0f1922" },
            }}
          >
            Register
          </Button>)}




          <motion.button
            className="modal__close-wrapper"
            whileHover={{ scale: 1.2 }}
            onClick={close}
          >
            <IoCloseCircleOutline className="modal__close-icon" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;
