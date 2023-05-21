import { Avatar, Box, Button, TextField, styled } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import { Flexbox } from "../../styles/global-components";

export const ImagePreview = styled(Avatar)(({ theme }) => ({
  width: "150px",
  height: "150px",
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "80px",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  height: "25px",
  width: "25px",
  cursor: "pointer",
}));

export const CancelIcon = styled(CancelOutlined)(({ theme }) => ({
  color: "red",
  alignSelf: "baseline",
  borderRadius: "50px",
  opacity: 0.4,
  cursor: "pointer",
  height: 50,
  [theme.breakpoints.down("md")]: {
    height: 20,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  opacity: 0.7,
  color: "white",
  width: "60%",
  padding: "0.65rem 0rem",
  borderRadius: "5px",
  gap: `${theme.spacing(1.2)} ${theme.spacing(0)}`,
  ":hover": {
    backgroundColor: "black",
    cursor: "pointer",
    opacity: 1,
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

export const InputField = styled(TextField)(({ error, theme }) => ({
  width: "100%",
  input: {
    color: theme.palette.text.primary,
    fontSize: "0.85rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid black",
    background: "rgb(180, 180, 180, 0.2)",
  },
  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: error && "1px solid red",
    },
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.7rem",
  },
}));
