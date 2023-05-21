import { Box, Container, styled } from "@mui/material";
import { Flexbox } from "../global-components";

export const ImageBox = styled(Box)(({ theme }) => ({
  width: "37px",
  [theme.breakpoints.down("md")]: {
    width: "30px",
  },
}));

export const LoginTextContainer = styled(Flexbox)(({ theme }) => ({
  marginBottom: "5%",
  gap: theme.spacing(1.2),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: theme.spacing(0.05),
  },
}));

export const SignUpFormContainer = styled(Container)(({ theme }) => ({
  width: "27%",
  minHeight: "55%",
  borderRadius: "10px",
  boxShadow: "10px 0px 10px 5px rgb( 180, 180, 180, 0.4)",
  [theme.breakpoints.down("lg")]: {
    width: "35%",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
  backdropFilter: "blur(50px)",
}));
