import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Box, InputAdornment, CircularProgress, Typography, Grid } from "@mui/material"
import { useFormik } from "formik";
import axios from "axios"

import { Flexbox, StyledButton, StyledField, FormContainer } from '../misc/MUIComponents';
import { updatePasswordSchema } from '../utils/validationSchema';
import CustomSnackbar from '../components/UI/CustonSnackbar';
import Visibility from "../assets/visibility.png";
import VisibilityOff from "../assets/visible.png";


import background from "../assets/background.jpg"

const styles = {
    PaperStyles: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 65%',
        height: "100vh",
        width: "100vw",
    },
};

const UpdatePassword = () => {

    const { token } = useParams();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" })

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmedPassword: ""
        },
        validationSchema: updatePasswordSchema,
        onSubmit: (values) => {
            updatePasswordHandler(values)
        },
    });


    const updatePasswordHandler = async (values) => {
        try {
            setDisableButton(true)
            await axios.post(`http://localhost:8000/user/reset/update`, { password: values.password, token: token })
            navigate("/login")
        } catch (e) {
            setDisableButton(false)
            setSnackbar({ open: true, details: (e.response?.data?.message || "Server is down , please try again later"), type: "error" })
            setTimeout(() => {
                setSnackbar({ open: false, details: "", type: "" })
            }, 2000)
        }
    }

    return (

        // add navigate to login

        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={styles.PaperStyles}
        >
            {snackbar.open && <CustomSnackbar type={snackbar.type} details={snackbar.details} />}

            <FormContainer sx={{ minHeight: "20vh" }}>

                <Flexbox sx={{ flexDirection: "column", gap: { xs: 2, lg: 3 } }}>


                    <Typography sx={{ fontSize: { xs: "26px", lg: "30px" }, mt: "5%", textAlign: "center" }} fontWeight={500}>Reset Password</Typography>

                    <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }} >

                        <Flexbox sx={{ flexDirection: "column", gap: 2.5, minHeight: "25vh" }}>
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

                            <Typography sx={{ color: { xs: "white", lg: "gray" }, fontWeight: 700, cursor: "pointer" }} onClick={() => navigate("/login")}>
                                Go back to Login
                            </Typography>

                            <StyledButton type="submit" disabled={disableButton}>
                                {disableButton ? <CircularProgress size="3.5vh" sx={{ color: "white" }} /> : <Typography>Update Password</Typography>}
                            </StyledButton>
                        </Flexbox>

                    </form >

                </Flexbox >

            </FormContainer>
        </Grid >

    )
}

export default UpdatePassword
