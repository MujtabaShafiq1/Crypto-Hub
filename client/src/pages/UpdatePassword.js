import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, InputAdornment, CircularProgress } from "@mui/material";
import { VerticalFlexbox, MainContainer, StyledButton, StyledField, FormContainer, HeaderText, SubText } from "../components/UI";
import CustomSnackbar from "../components/UI/Snackbar/CustomSnackbar";
import { updatePasswordSchema } from "../utils/validationSchema";
import { useFormik } from "formik";
import axios from "axios";

const UpdatePassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" });

    const formik = useFormik({
        initialValues: { password: "", confirmedPassword: "" },
        validationSchema: updatePasswordSchema,
        onSubmit: (values) => {
            updatePasswordHandler(values);
        },
    });

    const updatePasswordHandler = async (values) => {
        try {
            setDisableButton(true);
            await axios.post(`http://localhost:8000/user/reset/update`, { password: values.password, token: token });
            navigate("/login");
        } catch (e) {
            setDisableButton(false);
            setSnackbar({ open: true, details: e.response?.data?.message, type: "error" });
        }
    };

    const resetSnackbar = () => {
        setSnackbar({ open: false, details: "", type: "" });
    };

    return (
        <MainContainer container>
            {snackbar.open && <CustomSnackbar snackbar={snackbar} reset={resetSnackbar} />}

            <FormContainer sx={{ minHeight: "40%" }}>
                <VerticalFlexbox sx={{ gap: { xs: 2, lg: 3 } }}>
                    <HeaderText variant="header" sx={{ mt: "5%", textAlign: "center" }}>
                        Reset Password
                    </HeaderText>

                    <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }}>
                        <VerticalFlexbox sx={{ gap: 2.5, mb: "5%" }}>
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
                                            <Box
                                                sx={{ height: 25, width: 25, cursor: "pointer" }}
                                                onClick={() => setShowPassword((prev) => !prev)}>
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
                                            <Box
                                                sx={{ height: 25, width: 25, cursor: "pointer" }}
                                                onClick={() => setShowPassword((prev) => !prev)}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </Box>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <SubText
                                sx={{ color: { xs: "white", lg: "gray" }, fontWeight: 700, cursor: "pointer" }}
                                onClick={() => navigate("/login")}>
                                Go back to Login
                            </SubText>

                            <StyledButton type="submit" disabled={disableButton}>
                                {disableButton ? (
                                    <CircularProgress size="3.5vh" sx={{ color: "white" }} />
                                ) : (
                                    <SubText sx={{ color: "white" }}>Reset</SubText>
                                )}
                            </StyledButton>
                        </VerticalFlexbox>
                    </form>
                </VerticalFlexbox>
            </FormContainer>
        </MainContainer>
    );
};

export default UpdatePassword;
