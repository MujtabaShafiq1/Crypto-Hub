import { Box, Container, Divider, Button, styled } from "@mui/material";
import { Flexbox, ResponsiveText, VerticalFlexbox } from "../global-components";

export const ImageBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  width: "37px",
  [theme.breakpoints.down("md")]: {
    width: "30px",
  },
}));

export const SignUpTextContainer = styled(Flexbox)(({ theme }) => ({
  gap: theme.spacing(1.2),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: theme.spacing(0.05),
  },
}));

export const DividerContainer = styled(VerticalFlexbox)(({ theme }) => ({
  gap: `${theme.spacing(1.2)} ${theme.spacing(0)}`,
  width: "70%",
}));

export const HorizontalDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.static.primary,
  opacity: 0.3,
  width: "100%",
}));

export const ImagesContainer = styled(Flexbox)(({ theme }) => ({
  margin: "10%",
  justifyContent: "space-around",
  "& > *": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: `${theme.spacing(1.2)} ${theme.spacing(0)}`,
  },
}));

export const LoginFormContainer = styled(Container)(({ theme }) => ({
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
