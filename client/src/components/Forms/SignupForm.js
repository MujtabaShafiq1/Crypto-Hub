import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import axios from "axios"

import { loginSchema } from '../../utils/validationSchema';

import { Box, InputAdornment, Button, styled } from "@mui/material"
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";
import { Flexbox, StyledField } from '../../misc/MUIComponents';


const SignupForm = () => {

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

        <>
            {/* {snackbar.open && < CustomSnackbar type="error" details={snackbar.details} />} */}

            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }} >

                <Flexbox sx={{ flexDirection: "column", gap: 2 }}>


                    <StyledField
                        variant="outlined"
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

                    <StyledField
                        variant="outlined"
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

                    <StyledField
                        variant="outlined"
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

                    <StyledField
                        variant="outlined"
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

                    <Button
                        type="submit"
                        sx={{
                            width: "80%",
                            backgroundColor: "rgba( 76,76,163, 1 )",
                            color: "white",
                            padding: "10px",
                            borderRadius: "20px",
                            "&:hover": {
                                backgroundColor: "blue",
                                opacity: "0.5"
                            }
                        }}>
                        Signup
                    </Button>

                </Flexbox>
            </form >
        </>

    )
}

export default SignupForm