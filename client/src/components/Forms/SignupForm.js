import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";

import { Visibility, VisibilityOff, CancelOutlined } from "@mui/icons-material";
import { Box, InputAdornment, Avatar } from "@mui/material";
import {
  VerticalFlexbox,
  StyledButton,
  StyledField,
  ResponsiveText,
  CustomSnackbar,
} from "../../styles/global-components";

import { signupSchema } from "../../utils/validationSchema";

const SignupForm = () => {
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      signupHandler(values);
      setSubmitting(false);
    },
  });

  const signupHandler = async (data) => {
    try {
      const { confirmedPassword, ...otherDetails } = data;
      let user = { ...otherDetails };

      if (file) {
        const avatar = await uploadImage();
        user = { avatar, ...otherDetails };
      }

      await axios.post(`http://localhost:8000/auth/token`, user);
      setSnackbar({ open: true, details: `Verify email at ${data.username}`, type: "success" });
      setTimeout(() => {
        router.push({ pathname: "/login", query: { username: data.username } });
      }, 1500);
    } catch (e) {
      setSnackbar({ open: true, details: e.response?.data?.message, type: "error" });
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "social-media");
    data.append("cloud_name", "dkai1pma6");
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dkai1pma6/image/upload`,
      data
    );
    return response.data.url.toString();
  };

  const resetSnackbar = () => {
    setSnackbar({ open: false, details: "", type: "" });
  };

  return (
    <>
      {snackbar.open && <CustomSnackbar snackbar={snackbar} reset={resetSnackbar} />}

      <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "80%" }}>
        <VerticalFlexbox sx={{ gap: 2 }}>
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

          <StyledButton
            variant="contained"
            component="label"
            sx={{ width: "100%", bgcolor: "gray", flexDirection: "column" }}>
            <SubText sx={{ color: "white" }}>Upload Image</SubText>
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </StyledButton>

          {file && (
            <Box display="flex" justifyContent="center">
              <Avatar
                src={URL.createObjectURL(file)}
                sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }}
              />
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

          <StyledButton
            type="submit"
            disabled={formik.isSubmitting}
            error={+(snackbar.type === "error")}>
            <ResponsiveText color="static.secondary">Sign up</ResponsiveText>
          </StyledButton>
        </VerticalFlexbox>
      </form>
    </>
  );
};

export default SignupForm;
