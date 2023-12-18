import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useContext } from 'react';
import {Cart} from "../Context";

const HorizontalCardSlider = ({ cards }) => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth / cards.length;

    if (direction === 'left') {
      container.scrollLeft -= cardWidth;
    } else if (direction === 'right') {
      container.scrollLeft += cardWidth;
    }
  };
  const {setIsOpen}=useContext(Cart);

  return (
    <Box sx={{display:"flex"}}>
        <IconButton onClick={() => handleScroll('left')} sx={{width:"5rem",borderRadius:"0"}}>
        <ArrowBackIosIcon sx={{fontSize:"2rem"}}></ArrowBackIosIcon>
        </IconButton>

    <div className="card-slider">
      <div ref={containerRef} className="card-container">
        {cards.map((card, index) => (
            <CardActionArea onClick={()=>setIsOpen(true)}>
          <Card className='card'>
          
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          
        </Card>
        </CardActionArea>
        ))}
      </div>
      
      
    </div>
    <IconButton aria-label="" onClick={() => handleScroll('right')} sx={{width:"5rem",borderRadius:"0"}}>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
    </Box>
  );
};

export default HorizontalCardSlider;
