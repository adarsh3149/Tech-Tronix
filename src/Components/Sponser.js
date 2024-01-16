import React from 'react';
import AnimatedTitle from './AnimTitle';
import { Box } from '@mui/material';
import styled, { keyframes, css } from "styled-components";

const Sponser = () => {

  const row1 = [
    "/images/MCL_prev_ui.png",
    "/images/jsw-group-vector-logo_prev_ui.png",
  ];

  const row2 = [

    "/images/IEEE ITR (2)_prev_ui.png",
    "/images/image-removebg-preview (13).png",
    "/images/IEEE power electronics_prev_ui.png",
    "/images/IEEE ITR (2)_prev_ui.png",
    "/images/image-removebg-preview (13).png",
    "/images/IEEE power electronics_prev_ui.png",
  ];
  const row3 = [
    "/images/ESS_prev_ui.png",
    "/images/Dhaba.jpg",
    "/images/Woody Jhones Pizza.png"
  ]
  const row4 = [
    "/images/IEEE vssut_prev_ui.png",

  ];
  return (
    <>
      <div className='heading' id='sponsers'><AnimatedTitle name="sponsors." /></div>

      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        PROUD SPONSORS .
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>



        <Wrapper>

          <Marquee>

            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}



          </Marquee>

        </Wrapper>


      </Box>

      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Technical SPONSORS .
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>



        <Wrapper>

          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>

        </Wrapper>


      </Box>

      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Supported By .
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>



        <Wrapper>

          <Marquee>

            {row4.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}



          </Marquee>

        </Wrapper>


      </Box>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Sponsored By .
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>



        <Wrapper>

          <Marquee>

            {row3.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}



          </Marquee>

        </Wrapper>


      </Box>
    </>
  );
};

export default Sponser;



const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
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