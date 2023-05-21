import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import axios from "axios";

// MUI Components
import * as Styled from "./form-components";
import * as MStyled from "../../styles/global-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

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
      dispatch(getUser(response.data)).then(() => {
        router.push("/", null, { shallow: true });
      });
    } catch (e) {
      setSnackbar({ open: true, details: e?.response?.data?.message, type: "error" });
    }
  };

  const forgotPasswordHandler = async () => {
    console.log("reset password");
  };

  const resetSnackbar = () => {
    setSnackbar({ open: false, details: "", type: "" });
  };

  return (
    <>
      {snackbar.open && <MStyled.CustomSnackbar snackbar={snackbar} reset={resetSnackbar} />}

      <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "90%" }}>
        <MStyled.VerticalFlexbox sx={{ gap: 2 }}>
          <Styled.InputField
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

          <Styled.InputField
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
                  <Styled.ImageBox onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Styled.ImageBox>
                </InputAdornment>
              ),
            }}
          />

          <Styled.StyledButton disabled={formik.isSubmitting} type="submit">
            <MStyled.ResponsiveText color="static.secondary">Login</MStyled.ResponsiveText>
          </Styled.StyledButton>
        </MStyled.VerticalFlexbox>
      </form>

      <MStyled.CenterText
        variant="body"
        color="static.other"
        sx={{ cursor: "pointer" }}
        onClick={forgotPasswordHandler}>
        Forgot Password?
      </MStyled.CenterText>
    </>
  );
};

export default LoginForm;
