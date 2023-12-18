import React from 'react'
import { Box } from '@mui/material'
import Card_comp from './Card_comp'
import Membercard from './MemberCard'
import AnimatedTitle from './AnimTitle'
import Name from './Name'

const list=[
  {name:"prof. bansidhar majhi",
desig:"hon'ble vice chancellor, chief patron"},
{name:"shri pradeep dang",
desig:"registrar"},
{name:"prof. s.panda",
desig:"head, ses"},
{name:"shri tularam kalet",
desig:"controller of finance"},
{name:"prof. dr. harish kumar sahoo",
desig:"head of the department"},
{name:"dr. diptimayee konhar",
desig:"pic, etce society"},
]

const list2=[
  {name:"prof. a. mohapatro"},
  {name:"prof. n. bhoi"},
  {name:"prof. k. sethi"},
  {name:"prof. m. pradhan"},
  {name:"prof. d. mishra"},
  {name:"prof. s. agrawal"},

]

function Member() {

  const names=list.map((item)=>{
    return(
      <Name name={item.name} desig={item.desig} isdesig={true}></Name>
    )
  })
  const names2=list2.map((item)=>{
    return(
      <Name name={item.name} isdesig={false}></Name>
    )
  })

  return (
    <>
    <div className='heading' id='members'><AnimatedTitle name="members."></AnimatedTitle></div>
    <Box sx={{fontSize:"2rem",margin:"0 0 4rem 4rem",fontWeight:"400",letterSpacing:"0.5rem"}}>Organising committee</Box>
      <Box sx={{display:"flex",padding:"0 4rem",rowGap:"2rem",columnGap:"2rem",flexWrap:"wrap"}}>
      
      {names}
      
      </Box>
      <Box sx={{fontSize:"2rem",margin:"4rem 0 4rem 4rem",fontWeight:"400",letterSpacing:"0.5rem"}}>advisory committee</Box>
      <Box sx={{display:"flex",padding:"0 4rem",rowGap:"2rem",columnGap:"2rem",flexWrap:"wrap"}}>
      {names2}
      
      </Box>
      </>
  )
}

export default Member