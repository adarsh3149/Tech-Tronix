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
  const { img, fullname, theme, description, rules, url, time, venue, istheme, isurl2,url2 } = data;
  const rule = rules?.map((e, index) => {
    return (
      <li style={{ color: "#737373", fontSize: "1.25rem", fontWeight: "600", margin: "1rem 0", textTransform: 'none' }}>{e}</li>
    )
  })
  const handleClick = (url) => {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      // Check if the userToken matches an email in the database
      const userRef = ref(getDatabase(), 'users');
      get(userRef).then(snapshot => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          const userWithEmail = Object.values(users).find(user => user.email === userToken);

          if (userWithEmail) {
            // User is authenticated, proceed with the redirect
            window.open(url, '_blank');
          } else {
            // User not found in the database, show alert and redirect to signup
            handleClickOpen();
          }
        }
      }).catch(error => {
        console.error('Error checking userToken:', error.message);
      });
    } else {
      // UserToken not found, show alert and redirect to signup
      handleClickOpen();
    }
  };

  const handleClick2 = (url2) => {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      // Check if the userToken matches an email in the database
      const userRef = ref(getDatabase(), 'users');
      get(userRef).then(snapshot => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          const userWithEmail = Object.values(users).find(user => user.email === userToken);

          if (userWithEmail) {
            // User is authenticated, proceed with the redirect
            window.open(url2, '_blank');
          } else {
            // User not found in the database, show alert and redirect to signup
            handleClickOpen();
          }
        }
      }).catch(error => {
        console.error('Error checking userToken:', error.message);
      });
    } else {
      // UserToken not found, show alert and redirect to signup
      handleClickOpen();
    }
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
          <Button href="/signin" autoFocus sx={{textTransform:"none",fontSize:"16px",fontFamily:"Montserrat",color:"#3d3d3d"}}>
            Proceed
          </Button>
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
          {istheme ? <motion.div className="modal__row" variants={modalRowVariants}>
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
            <Box sx={{ fontSize: "2rem", fontWeight: "600", }}>
              Rules
              <p className="modal__description">{rule}</p>


              <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "2rem 0" }}>
              Timing :- <span className="modal__description">{time}</span>

            </Box>
            <Box sx={{ fontSize: "2rem", fontWeight: "600", }}>
              Venue :- <span style={{ fontSize: "2rem" }} className="modal__description">{venue}</span>

            </Box>
            </Box>
            
          </motion.div>

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
            Register
          </Button>
          {isurl2 ?
            <Box sx={{
              // backgroundColor:"red",
              // height:"10rem",
              display:"flex",
              marginTop:"1.5rem",
              // justifyContent:"flex-start",
              // alignItems:"flex-start",

            }}>
              <Button onClick={() => handleClick2(url2)}
                variant="outlined"
                sx={{
                  color: "#f1f1f1",
                  borderRadius: "10px",
                  fontSize: "1.6rem",
                  
                  
                  fontWeight: "600",
                  backgroundColor: "#0f1922",
                  ":hover": { color: "#0f1922" },
                }}
              >
                Register

              </Button>  <span style={{
                // backgroundColor: "red",
                position:"relative",
                fontSize:"2rem",
                fontWeight:"600",
                display:"flex",
                // margin:"2rem ",
                padding:"1.3rem ",
                justifyContent:"flex-start",
              alignItems:"flex-start"
                
              }}>: - For School students</span>
            </Box>
              
            
            : ''}




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
