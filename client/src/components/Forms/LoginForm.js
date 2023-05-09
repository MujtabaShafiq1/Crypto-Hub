import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import axios from "axios";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, InputAdornment } from "@mui/material";
import { VerticalFlexbox, SubText, StyledButton, StyledField } from "../../styles/MUI-components";
import CustomSnackbar from "../UI/CustomSnackbar";

import { loginSchema } from "../../utils/validationSchema";
import { getUser } from "../../store/authActions";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" });

  const formik = useFormik({
    initialValues: {
      username: router.query?.username || "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      loginHandler(values);
      setSubmitting(false);
    },
  });

  const loginHandler = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8000/auth/login`, data, {
        withCredentials: true,
      });
      dispatch(getUser(response.data));
      router.push("/");
    } catch (e) {
      setSnackbar({ open: true, details: e?.response?.data?.message, type: "error" });
    }
  };

  const forgotPasswordHandler = async () => {
    console.log("reset password");
    // try {
    //   if (formik.values.username.length > 0 && !Boolean(formik.errors.username)) {
    //     await axios.post(`http://localhost:8000/user/reset/password`, {
    //       userId: formik.values.username,
    //     });
    //     setSnackbar({ open: true, details: `Password reset request sent`, type: "info" });
    //     return;
    //   }
    //   setSnackbar({ open: true, details: `Please provide username`, type: "error" });
    // } catch (e) {
    //   setSnackbar({ open: true, details: e.response?.data?.message, type: "error" });
    // }
  };

  const resetSnackbar = () => {
    setSnackbar({ open: false, details: "", type: "" });
  };

  return (
    <>
      {snackbar.open && <CustomSnackbar snackbar={snackbar} reset={resetSnackbar} />}

      <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "90%" }}>
        <VerticalFlexbox sx={{ gap: 2.5 }}>
          <StyledField
            variant="outlined"
            placeholder="Enter Username"
            name="username"
            type="text"
            size="small"
            hiddenLabel
            value={formik.values.username}
            onChange={formik.handleChange}
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
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
                  <Box
                    sx={{ height: 25, width: 25, cursor: "pointer" }}
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Box>
                </InputAdornment>
              ),
            }}
          />

          <StyledButton
            disabled={formik.isSubmitting}
            type="submit"
            error={+(snackbar.type === "error")}>
            <SubText sx={{ color: "white" }}>Login</SubText>
          </StyledButton>
        </VerticalFlexbox>
      </form>

      <SubText
        sx={{ textAlign: "center", color: "gray", fontWeight: 600, cursor: "pointer" }}
        onClick={forgotPasswordHandler}>
        Forgot Password?
      </SubText>
    </>
  );
};

export default LoginForm;
