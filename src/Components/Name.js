import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function Name({name,desig,isdesig}) {
  return (
    <Paper elevation={0} sx={{backgroundColor:"transparent",border:"0.1rem solid black",width:{xs:"24rem",md:"25rem"},padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"c"}}>
        <Box sx={{fontWeight:"600",fontSize:"1.6rem"}}>{name}</Box>
        {isdesig?<Box variant='body'sx={{fontWeight:"400",marginTop:"1rem",fontSize:"1.2rem"}}>{desig}</Box>:""}
        </Paper>
  )
}

export default Name