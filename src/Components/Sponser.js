import React, { useRef, useEffect, useState } from 'react';
import AnimatedTitle from './AnimTitle';
import { Box,Paper } from '@mui/material';
import styled, { keyframes, css } from "styled-components";

const Sponser = () => {
  const [speed, setSpeed] = useState(2);
  const row1 = [
    "/images/MCL_prev_ui.png",
  ];

  const row2 = [
    "IEEE ITR CHANDIPUR CHAPTER",
    "/images/IEEE BBSR section_prev_ui.png",
    "/images/IEEE power electronics_prev_ui.png",
    "IEEE ITR CHANDIPUR CHAPTER",
    "/images/IEEE BBSR section_prev_ui.png",
    "/images/IEEE power electronics_prev_ui.png",
  ];
  return (
    <>
      <div className='heading' id='sponsers'><AnimatedTitle name="sponsers." /></div>

      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        PROUD SPONSER .
      </Box>

      <Paper elevation={0} sx={{ backgroundColor: "transparent", width: { xs: "24rem", md: "25rem" }, padding: "2rem",marginLeft:"2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ fontWeight: "600", fontSize: "1.6rem" }}> {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
        </Box>

      </Paper>

      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Technical SPONSER .
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>



        <Wrapper>

          <Marquee>
            <MarqueeGroup>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>

        </Wrapper>


      </Box>
    </>
  );
};

export default Sponser;

const AppContainer = styled.div`
  
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
 
`;

const Note = styled.div`
  font-size: 1.6rem;
  font-weight: 200;
  margin-bottom: 4rem;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 150rem;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 0.5rem 4rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: transparent;
`;