import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import {Cart} from "../Context";
import { motion } from 'framer-motion';

export default function Card_main() {

  const {isOpen,setIsOpen}=useContext(Cart);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (

<motion.div
initial={{ opacity: 0, y: 50 }}
animate={
  isOpen
    ? { opacity: 1, y: 0, scale: 1.2 }
    : { opacity: 0, y: 50, scale: 1 }
}
transition={{ duration: 4 }}
>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={()=>setIsOpen(false)}
        aria-labelledby="responsive-dialog-title"

        
      >      
        <DialogActions>
          <Button onClick={()=>setIsOpen(false)}>
            Disagree
          </Button>        
        </DialogActions>
      </Dialog>
      </motion.div>

  );
}