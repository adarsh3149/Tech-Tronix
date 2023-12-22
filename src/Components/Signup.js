import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, FormControl, OutlinedInput, InputLabel, FormControlLabel, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Switch from '@mui/material/Switch';
import img from "./poster_techtronix_just.png"
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    const [values, setValues] = useState({
        Name: '',
        email: '',
        password: '',
        cpassword: "",
        reg: "",
    });
    const [checked, setChecked] = React.useState(true);
    const handleChange2 = (event) => {
        setChecked(event.target.checked);
    };

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
        <Box sx={{ display: "flex" ,textTransform:"capitalize"}}>
            <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: "3", heght: "100vh", background: `url(${img})`, backgroundSize: "cover", backgrondRepeat: "no-repeat", backgroundPosition: "center", }}>

            </Box>
            <Box sx={{ flexGrow: "1", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDrection: "column", padding: "4rem 0" }}>


                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30rem', fontSize: "1.6rem", fontWeight: "400" }}>
                    <Box sx={{ fontSize: "4rem", fontWeight: "600" }}>Sign up</Box>
                    <TextField
                        label="Name"
                        name="Name"
                        value={values.Name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required

                        InputProps={{
                            style: {
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                pading:"0px"
                            }
                        }}

                    />
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
                    <FormControl sx={{ marginTop: 2, width: '100%' }} variant="outlined" required>
                        <InputLabel style={{ fontSize: "1.6rem", fontWeight: "600" }} htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput sx={{ fontSize: "1.6rem", fontWeight: "600" }}
                            name="cpassword"
                            value={values.cpassword}
                            onChange={handleChange}
                            id="outlined-adornment-cpassword"
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
                            label="Confirm Password"
                        />
                    </FormControl>
                    {checked ?
                        <TextField
                            label="registration number"
                            name="reg"
                            type="number"
                            value={values.reg}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                            inputProps={{
                                pattern: '[0-9]*', // Only allow numeric input
                                inputMode: 'numeric', // Set the input mode to numeric for mobile devices
                                maxLength: 10, style: {
                                    fontSize: "1.6rem",
                                    fontWeight: "600"
                                }
                            }}
                        /> : ""}
                    <FormControlLabel label={
                        <Typography sx={{ fontSize: "1.6rem",fontWeight:"600",margin:"2rem 0" }}>
                            Vssutian
                        </Typography>
                    } control={<Switch
                        checked={checked}
                        onChange={handleChange2}

                    />} />


                    <Button type="submit" variant="contained" style={{ paddig: "1rem", fontSize: "1.6rem" }}>
                        Sign Up
                    </Button>
                    <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", marginTop: 2 }}>already register? <Link to="/signin">signin</Link></Typography>
                </form>
            </Box>
        </Box>
    );
};

export default SignUpForm;