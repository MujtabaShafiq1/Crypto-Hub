import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";

// MUI Components
import * as Styled from "./form-components";
import * as MStyled from "../../styles/global-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

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
    const response = await axios.post(`https://api.cloudinary.com/v1_1/dkai1pma6/image/upload`, data);
    return response.data.url.toString();
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

          <Styled.InputField
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

          <Styled.InputField
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
                  <Styled.ImageBox onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Styled.ImageBox>
                </InputAdornment>
              ),
            }}
          />

          <Styled.InputField
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
                  <Styled.ImageBox onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Styled.ImageBox>
                </InputAdornment>
              ),
            }}
          />

          <Styled.StyledButton variant="contained" component="label">
            <MStyled.ResponsiveText color="static.secondary">Upload Image</MStyled.ResponsiveText>
            <input type="file" accept="image/*" hidden onChange={(e) => setFile(e.target.files[0])} />
          </Styled.StyledButton>

          {file && (
            <MStyled.Flexbox>
              <Styled.ImagePreview src={URL.createObjectURL(file)} />
              <Styled.CancelIcon onClick={() => setFile(null)} />
            </MStyled.Flexbox>
          )}

          <Styled.StyledButton type="submit" disabled={formik.isSubmitting} error={+(snackbar.type === "error")}>
            <MStyled.ResponsiveText color="static.secondary">Sign up</MStyled.ResponsiveText>
          </Styled.StyledButton>
        </MStyled.VerticalFlexbox>
      </form>
    </>
  );
};

export default SignupForm;
