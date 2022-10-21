import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import axios from "axios"

import { loginSchema } from '../../utils/validationSchema';

import { Box, Typography, InputAdornment, TextField, Button, styled } from "@mui/material"
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";
import { Flexbox } from '../../misc/MUIComponents';

const StyledField = styled(TextField)(({ error }) => ({
    width: "80%",
    backgroundColor: "rgba( 232, 240, 254, 0.75 )",
    borderBottom: !error && "0.5px solid #4c4ca3",
    input: {
        borderBottom: error && "0.5px solid red"
    },
    textarea: { color: 'black' },
}))

const StlyedButton = styled(Button)(({ theme }) => ({
    color: "white",
    padding: "10px",
    borderRadius: "20px",
    "&:hover": {
        backgroundColor: "blue",
        opacity: "0.5"
    },
    [theme.breakpoints.down('md')]: {
        width: "35%"
    },
    [theme.breakpoints.down('sm')]: {
        width: "43%"
    },
    [theme.breakpoints.up('md')]: {
        width: "30%"
    },
}))


const LoginForm = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)
    const [snackbar, setSnackbar] = useState({ open: false, details: "" })

    const formik = useFormik({
        initialValues: {
            email: location.state?.email || "",
            password: location.state?.password || "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginHandler(values)
        },
    });

    const loginHandler = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, data)
            const user = response.data.details;
            // dispatch(userActions.login(user))
            navigate("/")
        } catch (e) {
            console.clear()
            setSnackbar({ open: true, details: e.response.data.message })
            setTimeout(() => {
                setSnackbar({ open: false, details: "" })
            }, 2000)
        }
    }

    return (

        <Flexbox sx={{ flexDirection: "column" }}>
            {/* {snackbar.open && < CustomSnackbar type="error" details={snackbar.details} />} */}

            <Box>
                <Typography sx={{ fontSize: "30px" }} fontWeight={500}>Welcome Back</Typography>
                <Typography sx={{ fontSize: "20px" }} variant="h6" color="gray" fontWeight={300}>login to continue</Typography>
            </Box>

            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <StyledField
                    variant="filled"
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    type="email"
                    size="small"
                    hiddenLabel
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    InputProps={{ disableUnderline: true }}
                />


                <StyledField
                    variant="filled"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    size="small"
                    hiddenLabel
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    helperText={formik.touched.password && formik.errors.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment position="end" >
                                <Box
                                    component="img"
                                    src={showPassword ? VisibilityOff : Visibility}
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    style={{ width: "20px", height: "auto" }}
                                />
                            </InputAdornment>
                        ),
                    }}
                />

                <StlyedButton type="submit" sx={{ width: "25%", backgroundColor: "rgba( 76,76,163, 1 )" }}>
                    login
                </StlyedButton>

                <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
                    <Typography sx={{ fontSize: "16px" }}>Dont have an account? </Typography>
                    <Typography sx={{ color: "green", cursor: "pointer", fontSize: "16px" }} onClick={() => navigate("/signup")}>
                        Signup now !
                    </Typography>
                </Box>

            </form >

        </Flexbox >
    )
}

export default LoginForm