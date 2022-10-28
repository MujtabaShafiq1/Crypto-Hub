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

    const [file, setFile] = useState(null)
    const [image, setImage] = useState(null)
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
            const user = { file, ...otherDetails };
            setDisableButton(true)
            await axios.post(`http://localhost:8000/token`, user)
            navigate("/verify", { state: { email: otherDetails.email } })

        } catch (e) {

            setDisableButton(false)
            setSnackbar({ open: true, details: (e.response?.data?.message || "Server is down , please try again later"), type: "error" })
            setTimeout(() => {
                setSnackbar({ open: false, details: "", type: "" })
            }, 2000)

        }
    }

    const imageHandler = async (value) => {

        if (value?.type === "image/jpeg" || value?.type === "image/png") {
            const data = new FormData();
            data.append("file", value);
            data.append("upload_preset", "social-media");
            data.append("cloud_name", "dkai1pma6");
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dkai1pma6/image/upload`, data)
            setFile(response.data.url.toString());
            setImage(value)
            return;
        }

        setSnackbar({ open: true, details: "Invalid Image Type", type: "error" })
        setTimeout(() => {
            setSnackbar({ open: false, details: "", type: "" })
        }, 2000)
    }

    const imageDeletHandler = () => {
        setFile(null)
        setImage(null)
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
                    <Box sx={{ display: "flex", gap: 2, width: "100%", }}>
                        <StyledButton variant="contained" component="label" sx={{ width: "100%", bgcolor: "gray", flexDirection: "column" }}>
                            <Typography>Upload Image</Typography>
                            <input type="file" hidden onChange={(e) => imageHandler(e.target.files[0])} />
                            {image?.name &&
                                <Flexbox sx={{ width: "80%", gap: 2 }}>
                                    <Typography sx={{ fontSize: "12px", wordBreak: "break-all" }}>Selected Image: {image.name}</Typography>
                                </Flexbox>
                            }
                        </StyledButton>
                        <Box>
                            {image?.name && <Typography sx={{ color: "red", cursor: "pointer" }} onClick={imageDeletHandler}>X</Typography>}
                        </Box>
                    </Box>


                    <StyledButton type="submit" disabled={disableButton}>
                        {disableButton ? <CircularProgress size="3.5vh" sx={{ color: "white" }} /> : <Typography>Sign up</Typography>}
                    </StyledButton>

                </Flexbox>
            </form >
        </>

    )
}

export default SignupForm