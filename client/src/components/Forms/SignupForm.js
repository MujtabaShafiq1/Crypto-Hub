import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff, CancelOutlined } from "@mui/icons-material";
import { Box, InputAdornment, CircularProgress, Typography, Avatar } from "@mui/material";
import { Flexbox, StyledButton, StyledField } from "../../misc/MUIComponents";
import { signupSchema } from "../../utils/validationSchema";
import CustomSnackbar from "../UI/CustomSnackbar";
import { useFormik } from "formik";
import axios from "axios";

const SignupForm = () => {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" });

    const formik = useFormik({
        initialValues: {
            name: "Mujtaba" || "",
            email: "libawiy840@aosod.com" || "",
            password: "123123123" || "",
            confirmedPassword: "123123123" || "",
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {
            signupHandler(values);
        },
    });

    const signupHandler = async (data) => {
        try {
            const { confirmedPassword, ...otherDetails } = data;
            const user = { file, ...otherDetails };
            setDisableButton(true);
            await axios.post(`http://localhost:8000/token`, user);
            setSnackbar({ open: true, details: `Verify email at ${data.email}`, type: "success" });
            setTimeout(() => {
                navigate("/login", { state: { email: data.email } });
            }, 3000);
        } catch (e) {
            setDisableButton(false);
            setSnackbar({ open: true, details: e.response?.data?.message, type: "error" });
        }
    };

    const imageHandler = async (value) => {
        if (value?.type === "image/jpeg" || value?.type === "image/png") {
            const data = new FormData();
            data.append("file", value);
            data.append("upload_preset", "social-media");
            data.append("cloud_name", "dkai1pma6");
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dkai1pma6/image/upload`, data);
            setFile(response.data.url.toString());
            return;
        }
        setSnackbar({ open: true, details: "Invalid Image Type", type: "error" });
    };

    const resetSnackbar = () => {
        setSnackbar({ open: false, details: "", type: "" });
    };

    return (
        <>
            {snackbar.open && <CustomSnackbar snackbar={snackbar} reset={resetSnackbar} />}

            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }}>
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
                                <InputAdornment position="end">
                                    <Box sx={{ height: 25, width: 25, cursor: "pointer" }} onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Box>
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
                                <InputAdornment position="end">
                                    <Box sx={{ height: 25, width: 25, cursor: "pointer" }} onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Box>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <StyledButton variant="contained" component="label" sx={{ width: "100%", bgcolor: "gray", flexDirection: "column" }}>
                        <Typography variant="subBody">Upload Image</Typography>
                        <input type="file" hidden onChange={(e) => imageHandler(e.target.files[0])} />
                    </StyledButton>

                    {file && (
                        <Box display="flex" justifyContent="center">
                            <Avatar src={file} sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                            <CancelOutlined
                                onClick={() => setFile(null)}
                                sx={{
                                    color: "red",
                                    position: "absolute",
                                    left: "60%",
                                    padding: "2px",
                                    borderRadius: "50px",
                                    opacity: 0.4,
                                    cursor: "pointer",
                                }}
                            />
                        </Box>
                    )}

                    <StyledButton type="submit" disabled={disableButton}>
                        {disableButton ? (
                            <CircularProgress size="3.5vh" sx={{ color: "white" }} />
                        ) : (
                            <Typography variant="subBody">Sign up</Typography>
                        )}
                    </StyledButton>
                </Flexbox>
            </form>
        </>
    );
};

export default SignupForm;
