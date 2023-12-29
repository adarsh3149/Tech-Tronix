import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, OutlinedInput, InputLabel, FormControlLabel, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import img from "./poster_techtronix_just.png"
import { ref, get, getDatabase } from 'firebase/database';
import { Link,useNavigate } from 'react-router-dom';


const SignUpForm = () => {
    const navigate = useNavigate();
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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const email = values.email;
            const password = values.password;
    
            // Check if the provided email exists in the database
            const userRef = ref(getDatabase(), 'users');
            const snapshot = await get(userRef);
    
            if (snapshot.exists()) {
                const users = snapshot.val();
    
                // Find the user with the provided email
                const userWithEmail = Object.values(users).find(user => user.email === email);
    
                if (userWithEmail && userWithEmail.password === password) {
                    // Authentication successful
                    console.log('User logged in successfully:', userWithEmail);
    
                    // Set the user token in localStorage (you might want to use a more secure method for tokens)
                    localStorage.setItem('userToken', userWithEmail.email);
    
                    // Redirect to the home page
                    navigate('/');
                } else {
                    console.error('Invalid email or password');
                    // Handle invalid credentials (show an alert, set an error state, etc.)
                }
            } else {
                console.error('No users found in the database');
                // Handle no users in the database
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle login error (show an alert, set an error state, etc.)
        }
    };
    console.log(values)
    return (
        <Box sx={{ display: "flex",textTransform:"capitalize" }}>
        <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: "3", heght: "100vh", background: `url(${img})`, backgroundSize: "cover", backgrondRepeat: "no-repeat", backgroundPosition: "center",}}>

</Box>
<Box sx={{ flexGrow: "1", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDrection: "column", padding: "4rem 0" }}>
            
            
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '30rem', fontSize: "1.6rem", fontWeight: "400" }}>
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