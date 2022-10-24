import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, InputAdornment, Typography } from "@mui/material"
import { useFormik } from "formik";
import { authActions } from '../../store/authSlice';
import axios from "axios"

import { Flexbox, StyledButton, StyledField } from '../../misc/MUIComponents';
import { loginSchema } from '../../utils/validationSchema';
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";


const LoginForm = ({ snackbarHandler }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
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
            snackbarHandler(true, e.response.data.message, "error")
        }
    }

    return (

        <>

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

                    <StyledButton type="submit" sx={{ padding: "10px" }}>
                        <Typography>Login</Typography>
                    </StyledButton>

                </Flexbox>
            </form >
        </>

    )
}

export default LoginForm