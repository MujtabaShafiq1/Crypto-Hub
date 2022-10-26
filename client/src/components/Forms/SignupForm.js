import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, InputAdornment, CircularProgress, Typography } from "@mui/material"
import { useFormik } from "formik";
import axios from "axios"


import { Flexbox, StyledButton, StyledField } from '../../misc/MUIComponents';
import { signupSchema } from '../../utils/validationSchema';
import CustomSnackbar from '../UI/CustonSnackbar';
import Visibility from "../../assets/visibility.png";
import VisibilityOff from "../../assets/visible.png";

const SignupForm = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" })

    const formik = useFormik({
        initialValues: {
            name: "Mujtaba" || "",
            email: "mujtaba.shafiq213@gmail.com" || "",
            password: "123123123" || "",
            confirmedPassword: "123123123" || "",
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {
            signupHandler(values)
        },
    });

    const signupHandler = async (data) => {
        try {
            const { confirmedPassword, ...otherDetails } = data;
            setDisableButton(true)
            await axios.post(`http://localhost:8000/token`, otherDetails)
            navigate("/verify", { state: { email: otherDetails.email } })

        } catch (e) {

            setDisableButton(false)
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

                <Flexbox sx={{ flexDirection: "column", gap: 2 }}>

                    <StyledField
                        variant="outlined"
                        placeholder="Enter Name"
                        name="name"
                        type="text"
                        size="small"
                        hiddenLabel
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        helperText={formik.touched.name && formik.errors.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                    />

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
                                        style={{ width: "20px", height: "auto", cursor: "pointer" }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <StyledField
                        variant="outlined"
                        placeholder="Confirm Password"
                        name="confirmedPassword"
                        type={showPassword ? "text" : "password"}
                        size="small"
                        hiddenLabel
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                        helperText={formik.touched.confirmedPassword && formik.errors.confirmedPassword}
                        error={formik.touched.confirmedPassword && Boolean(formik.errors.confirmedPassword)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <Box
                                        component="img"
                                        src={showPassword ? VisibilityOff : Visibility}
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        style={{ width: "20px", height: "auto", cursor: "pointer" }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <StyledButton type="submit" disabled={disableButton}>
                        {disableButton ? <CircularProgress size="3.5vh" sx={{ color: "white" }} /> : <Typography>Sign up</Typography>}
                    </StyledButton>

                </Flexbox>
            </form >
        </>

    )
}

export default SignupForm