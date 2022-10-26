import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, InputAdornment } from "@mui/material"
import { useFormik } from "formik";
import { authActions } from '../../store/authSlice';
import axios from "axios"

import { Flexbox, StyledButton, StyledField } from '../../misc/MUIComponents';
import { loginSchema } from '../../utils/validationSchema';
import CustomSnackbar from '../UI/CustonSnackbar';
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";


const LoginForm = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" })

    const formik = useFormik({
        initialValues: {
            email: (location?.state?.email || ""),
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginHandler(values)
        },
    });

    const loginHandler = async (data) => {
        try {
            const response = await axios.post(`http://localhost:8000/auth/login`, data, { withCredentials: true })
            const { id, createdAt, updatedAt, ...otherDetails } = response.data
            dispatch(authActions.login(otherDetails))
            navigate("/")
        } catch (e) {
            setSnackbar({ open: true, details: (e.response?.data?.message || "Server is down , please try again later"), type: "error" })
            setTimeout(() => {
                setSnackbar({ open: false, details: "", type: "" })
            }, 2000)
        }
    }

    return (

        <>

            {snackbar.open && <CustomSnackbar type={snackbar.type} details={snackbar.details} />}

            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }} >

                <Flexbox sx={{ flexDirection: "column", gap: 2.5 }}>

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

                    <StyledButton type="submit" disabled={snackbar.open} sx={{ padding: "10px" }}>
                        Login
                    </StyledButton>

                </Flexbox>
            </form >
        </>

    )
}

export default LoginForm