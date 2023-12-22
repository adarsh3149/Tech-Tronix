import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { Cart } from "../Context";
import { motion } from 'framer-motion';
import { Box, Card, Typography,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import img from "./poster_techtronix.png"

export default function Card_main() {

  const { isOpen, setIsOpen, click } = useContext(Cart);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const rule = click.rules?.map((e, index) => {
    return (
      <li style={{ fontSize: "1.6rem", fontWeight: "500", marin: "1rem 0", textTransform: 'none' }}>{e}</li>
    )
  })
  console.log(click)
  return (


    <Dialog
      fullScreen={true}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="responsive-dialog-title"


    >
      <DialogActions>
        <IconButton onClick={() => setIsOpen(false)}>
          <CloseIcon sx={{fontSize:'4rem',color:'#0f1922'}}></CloseIcon>
        </IconButton>
      </DialogActions>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: 'row', padding: '4rem' } }}>
        <Box
          className="card"
          sx={{
            borderRadius: '0.5rem',
            border: '0.1rem solid #0f1922', width: { xs: "20rem", md: "26rem" },
            height: { xs: "28rem", md: "36rem" }, background: `url(${img})`, backgroundSize: "cover", backgrondRepeat: "no-repeat", backgroundPosition: "center"
          }}
        >
        </Box>
        <Box sx={{padding:{md:"0 4rem"},width:{md:"70vw"}}}>
          <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "2rem 0" }}>{click.fullname}</Box>
          <Box sx={{ fontSize: "1.6rem", fontWeight: "400", margin: "2rem 0", textTransform: "none" }}>{click.description}</Box>

          {click.theme ? <Box sx={{ fontSize: "2rem", fontWeight: "500", margin: "2rem 0" }}> theme : {click.theme}</Box> : ""}
          <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "2rem 0" }}>Rules</Box>
          <Box sx={{ fontSize: "2rem", fontWeight: "600", margin: "2rem 0" }}>
            {rule}
          </Box>
          <Link to="/">
            <Button variant='outlined' sx={{ color: "#f1f1f1", borderRadius: "0", fontSize: '1.6rem', mrgin: "0 1rem", fontWeight: "600", backgroundColor: "#0f1922", ":hover": { color: "#0f1922" } }}>Register</Button>
          </Link>
        </Box>
      </Box>
    </Dialog>


  );
}