import React from "react";
import { Box } from "@mui/material";
import AnimatedTitle from "./AnimTitle";
import Name from "./Name";

const list = [
  {
    name: "prof. bansidhar majhi",
    desig: "hon'ble vice chancellor, chief patron",
  },
];

const list2 = [
  { name: "shri pradeep dang", desig: "registrar" },
  { name: "shri tularam kalet", desig: "controller of finance" },
  { name: "prof. sidharth panda", desig: "head, ses" },
  { name: "prof. sanjay agarwal", desig: "dean academics" },
  { name: "prof. debasis mishra"},
  { name: "prof. manoranjan pradhan"},
  { name: "prof. kabiraj sethi" },
  { name: "prof. nilamani bhoi" },
  { name: "prof. arunanshu mahapatro" },
];
const list3 = [
  { name: "prof. dr. harish kumar sahoo", desig: "head of the department" },
];
const list4 = [
  { name: "dr. diptimayee konhar", desig: "pic, etce society" }
];
const list5 = [
  { name: "prof. h. pradhan" },
  { name: "prof. r. sahu" },
  { name: "prof. d kumar" },
  { name: "prof. b. ku. sa" },
  { name: "prof. l. ghadai" },
  { name: "prof. a. ku. behera" },
  { name: "prof. b. das" },
  { name: "prof. t. nayak" },
  { name: "prof. s. n. mishra" },
  { name: "prof. a. ku. hota" },
  { name: "prof. m. panda" },
  { name: "prof. m. r. jena" },
  { name: "prof. s. sa" },
  { name: "prof. s. ku. sethi" },  
  { name: "prof. r. patra" },
  { name: "prof. b. ku. bhoi" },
  { name: "prof. sheeja k. l." },
  { name: "prof. s. mohapatro" },
];
const list6 = [
  { name: "Rashmi Ranjan Dishri", desig: "Secretary" },
  { name: "Subhashree Bastia", desig: "Joint Secretary" },
  { name: "Chinmay Priyansu", desig: "Assistant Secretary" },
  { name: "Aadyasha Sahoo", desig: "Assistant Joint Secretary" },
];

function Member() {
  const names = list.map((item) => {
    return <Name name={item.name} desig={item.desig} isdesig={true}></Name>;
  });
  const names2 = list2.map((item) => {
    return <Name name={item.name} desig={item.desig} isdesig={true}></Name>
  });
  const names3 = list3.map((item) => {
    return <Name name={item.name} desig={false} isdesig={false}></Name>;
  });
  const names4 = list4.map((item) => {
    return <Name name={item.name} desig={false} isdesig={false}></Name>;
  });
  const names5 = list5.map((item) => {
    return <Name name={item.name} isdesig={false}></Name>;
  });
  const names6 = list6.map((item) => {
    return <Name name={item.name} desig={item.desig} isdesig={true}></Name>;
  });

  return (
    <>
      <div className="heading" id="members">
        <AnimatedTitle name="members."></AnimatedTitle>
      </div>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "0 0 4rem 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Chief Patron
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 4rem",
          rowGap: "2rem",
          columnGap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {names}
      </Box>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "4rem 0 4rem 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        advisory committee
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 4rem",
          rowGap: "2rem",
          columnGap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {names2}
      </Box>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "4rem 0 4rem 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        head of the department/ convenor
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 4rem",
          rowGap: "2rem",
          columnGap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {names3}
      </Box>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "4rem 0 4rem 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        PIC,ETCE/CO-CONVENOR
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 4rem",
          rowGap: "2rem",
          columnGap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {names4}
      </Box>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "4rem 0 4rem 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Technical committee
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 4rem",
          rowGap: "2rem",
          columnGap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {names5}
      </Box>
      <Box
        sx={{
          fontSize: "2rem",
          margin: "4rem 0 4rem 4rem",
          fontWeight: "400",
          letterSpacing: "0.5rem",
        }}
      >
        Student Coordinator
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "0 4rem",
          rowGap: "2rem",
          columnGap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {names6}
      </Box>
    </>
  );
}

export default Member;
