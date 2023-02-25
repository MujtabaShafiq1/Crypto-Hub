import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, InputAdornment, CircularProgress, Typography } from "@mui/material";
import { Flexbox, StyledButton, StyledField } from "../UI";
import CustomSnackbar from "../UI/CustomSnackbar";
import { loginSchema } from "../../utils/validationSchema";
import { authActions } from "../../store/authSlice";
import { useFormik } from "formik";
import axios from "axios";

const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" });

    const formik = useFormik({
        initialValues: {
            email: location.state?.email || "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginHandler(values);
        },
    });

    const loginHandler = async (data) => {
        try {
            setDisableButton(true);
            const response = await axios.post(`http://localhost:8000/auth/login`, data, { withCredentials: true });
            dispatch(authActions.login(response.data));
            navigate("/");
        } catch (e) {
            setDisableButton(false);
            setSnackbar({ open: true, details: e.response.data.message, type: "error" });
        }
    };

    const forgotPasswordHandler = async () => {
        try {
            if (formik.values.email.length > 0 && !Boolean(formik.errors.email)) {
                await axios.post(`http://localhost:8000/user/reset/password`, { userId: formik.values.email });
                setSnackbar({ open: true, details: `Password reset request sent`, type: "info" });
                return;
            }
            setSnackbar({ open: true, details: `Please provide email`, type: "error" });
        } catch (e) {
            setSnackbar({ open: true, details: e.response?.data?.message, type: "error" });
        }
    };

    const resetSnackbar = () => {
        setSnackbar({ open: false, details: "", type: "" });
    };

    return (
        <>
            {snackbar.open && <CustomSnackbar snackbar={snackbar} reset={resetSnackbar} />}

            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "90%" }}>
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
                                <InputAdornment position="end">
                                    <Box sx={{ height: 25, width: 25, cursor: "pointer" }} onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Box>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <StyledButton type="submit" disabled={disableButton} error={+(snackbar.type === "error")}>
                        {disableButton ? (
                            <CircularProgress size="3.5vh" sx={{ color: "white" }} />
                        ) : (
                            <Typography variant="subBody">Login</Typography>
                        )}
                    </StyledButton>
                </Flexbox>
            </form>

            <Typography
                variant="subBody"
                sx={{ textAlign: "center", color: "gray", fontWeight: 600, cursor: "pointer" }}
                onClick={forgotPasswordHandler}>
                Forgot Password?
            </Typography>
        </>
    );
};

export default LoginForm;
