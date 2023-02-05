import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, InputAdornment, CircularProgress, Typography } from "@mui/material"
import { useFormik } from "formik";
import { authActions } from '../../store/authSlice';
import axios from "axios"

import { Flexbox, StyledButton, StyledField } from '../../misc/MUIComponents';
import { loginSchema } from '../../utils/validationSchema';
import CustomSnackbar from '../UI/CustonSnackbar';
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";
import { convertLength } from '@mui/material/styles/cssUtils';


const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginHandler(values)
        }
    });

    const loginHandler = async (data) => {
        try {
            setDisableButton(true)
            const response = await axios.post(`http://localhost:8000/auth/login`, data)
            const { token, ...otherDetails } = response.data
            dispatch(authActions.login(otherDetails))
            localStorage.setItem("accessToken", token)
            navigate("/")

        } catch (e) {
            setDisableButton(false)
            setSnackbar({ open: true, details: (e.response.data.message), type: "error" })
            setTimeout(() => {
                setSnackbar({ open: false, details: "", type: "" })
            }, 2000)
        }
    }

    const forgotPasswordHandler = async () => {
        try {
            if (formik.values.email.length > 0 && !Boolean(formik.errors.email)) {
                await axios.post(`http://localhost:8000/user/reset/password`, { userId: formik.values.email })
                setSnackbar({ open: true, details: `Password reset request sent`, type: "info" })
                return;
            }
            setSnackbar({ open: true, details: `Please provide email`, type: "error" })
        } catch (e) {
            console.log(e)
            setSnackbar({ open: true, details: (e.response?.data?.message || `Please try again later`), type: "error" })
        }
        setTimeout(() => {
            setSnackbar({ open: false, details: "", type: "" })
        }, 2000)
    }


    return (

        <>

            {snackbar.open && <CustomSnackbar type={snackbar.type} details={snackbar.details} />}

            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }} >

                <Flexbox sx={{ flexDirection: "column", gap: { xs: 1, md: 2.5 } }}>

                    <StyledField
                        variant="outlined"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                        size="small"
                        hiddenLabel
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />


                    <StyledField
                        variant="outlined"
                        placeholder="Enter Password"
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

                    <StyledButton type="submit" disabled={disableButton}>
                        {disableButton ? <CircularProgress size="3.5vh" sx={{ color: "white" }} /> : <Typography>Login</Typography>}
                    </StyledButton>

                </Flexbox>

            </form >

            <Typography sx={{ fontSize: "16px", textAlign: "center", color: "gray", fontWeight: 600, cursor: "pointer" }} onClick={forgotPasswordHandler}>
                Forgot Password?
            </Typography>

        </>

    )
}

export default LoginForm