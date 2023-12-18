import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, OutlinedInput, InputLabel, FormControlLabel, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import img from "./poster_techtronix_just.png"
const SignUpForm = () => {
    const [values, setValues] = useState({
        
        email: '',
        password: '',
        
    });
    

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        if (e.target.name === "reg") {
            const inputValue = e.target.value.replace(/[^0-9]/g, '');
            // Limit to 10 characters
            inputValue.slice(0, 10);
        }

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', values);
    };
    console.log(values)
    return (
        <Box sx={{ display: "flex",textTransform:"capitalize" }}>
        <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: "3", heght: "100vh", background: `url(${img})`, backgroundSize: "cover", backgrondRepeat: "no-repeat", backgroundPosition: "center",}}>

</Box>
<Box sx={{ flexGrow: "1", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDrection: "column", padding: "4rem 0" }}>
            
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30rem', fontSize: "1.6rem", fontWeight: "400" }}>
            <Box sx={{fontSize:"4rem",fontWeight:"600"}}>Sign in</Box>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                    InputProps={{
                        style: {
                            fontSize: "1.6rem",
                            fontWeight: "600"
                        }
                    }}
                />

                <FormControl sx={{ marginTop: 2, width: '100%' }} variant="outlined" required>
                    <InputLabel style={{ fontSize: "1.6rem", fontWeight: "600" }} htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput sx={{ fontSize: "1.6rem", fontWeight: "600" }}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                

                <Button type="submit" variant="contained" style={{ marginTop: '1.6rem', paddig: "1rem", fontSize: "1.6rem" }}>
                    Sign in
                </Button>
                <Typography sx={{fontSize:"1.6rem",fontWeight:"600",marginTop:2}}>new to here? <Link to="/signup">register</Link></Typography>
            </form>
        </Box>
        </Box>
    );
};

export default SignUpForm;