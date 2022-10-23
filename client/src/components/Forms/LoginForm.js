import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import axios from "axios"

import { loginSchema } from '../../utils/validationSchema';

import { Box, InputAdornment, Button } from "@mui/material"
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";
import { Flexbox, StyledField } from '../../misc/MUIComponents';


const LoginForm = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)
    const [snackbar, setSnackbar] = useState({ open: false, details: "" })

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
            const response = await axios.post(`http://localhost:8000/auth/login`, data)
            console.log(response.data)
            // dispatch(userActions.login(user))
            // navigate("/")
        } catch (e) {
            // console.clear()
            console.log(e.response.data.message);
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

                    <Button
                        type="submit"
                        sx={{
                            backgroundColor: "black",
                            opacity: "0.7",
                            width: "80%",
                            color: "white",
                            padding: "10px",
                            borderRadius: "20px",
                            "&:hover": {
                                cursor: "pointer",
                                opacity: 1
                            }
                        }}>
                        login
                    </Button>

                </Flexbox>
            </form >
        </>

    )
}

export default LoginForm