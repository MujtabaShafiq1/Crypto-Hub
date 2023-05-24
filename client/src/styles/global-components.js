import { Box, Typography, Alert, Avatar, Snackbar, Badge, Grid, Button, Modal, styled } from "@mui/material";
import { AcUnit } from "@mui/icons-material";

const baseFontSizes = {
  header: {
    default: "2rem",
    small: "1.5rem",
  },
  subHeader: {
    default: "1.5rem",
    small: "1.25rem",
  },
  mainBody: {
    default: "1.125rem",
    small: "1rem",
  },
  body: {
    default: "1rem",
    small: "0.875rem",
  },
  helper: {
    default: "0.875rem",
    small: "0.75rem",
  },
};

// Text

export const ResponsiveText = styled(Typography)(({ variant = "body", hide, color, theme }) => ({
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small || baseFontSizes[variant].default,
    display: hide && "none",
  },
  color: !color && theme.palette.text.primary,
}));

export const LongText = styled(ResponsiveText)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const CenterText = styled(ResponsiveText)({
  textAlign: "center",
});

export const BoldText = styled(ResponsiveText)({
  fontWeight: 500,
});

export const CenterTextBold = styled(BoldText)({
  textAlign: "center",
});

export const HeaderText = styled(ResponsiveText)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

// Badge

export const StatusBadge = styled(Badge)(({ show }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: show ? "#44b700" : "#808080",
    color: "#44b700",
  },
}));

// Avatar

export const UserAvatar = styled(Avatar)({
  height: 40,
  width: 40,
  cursor: "pointer",
});

// Containers

const BaseFlexbox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Flexbox = styled(Box)(BaseFlexbox);

export const VerticalFlexbox = styled(Flexbox)({
  flexDirection: "column",
});

export const MainContainer = styled(Box)(({ theme }) => ({
  height: "300vh",
  backgroundColor: theme.palette.main.primary,
  [theme.breakpoints.up("sm")]: {
    flex: 5,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: `50px`,
  },
}));

export const ImageContainer = styled(Grid)({
  ...BaseFlexbox,
  flexDirection: "column",
  backgroundImage: `url(/assets/background.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "0% 65%",
  height: "100vh",
  width: "100vw",
});

export const Drawer = styled(Box)(({ open, duration, theme }) => ({
  position: "absolute",
  height: "100%",
  backgroundColor: "orange",
  overflow: "hidden",
  width: open ? "25vw" : "0vw",
  zIndex: 2,
  transition: `width ${duration}ms ease-in-out`,
  [theme.breakpoints.up("lg")]: {
    top: 0,
    left: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: open ? "30vw" : "0vw",
  },
  [theme.breakpoints.down("md")]: {
    width: open ? "45vw" : "0vw",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    bottom: 0,
    right: 0,
    width: open ? "100vw" : "0vw",
  },
}));

// LOGO

export const Logo = styled(AcUnit)(({ theme }) => ({
  height: 40,
  width: 40,
  cursor: "pointer",
  fill: theme.palette.text.primary,
}));

// Snackbar

export const CustomSnackbar = ({ snackbar, reset }) => {
  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={2000}
      sx={{
        fontSize: "17px",
        color: "white",
        zIndex: 1,
        height: "12%",
        width: "90%",
      }}
      onClose={reset}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert severity={snackbar.type}>{snackbar.details || "Server is down , please try again later"}</Alert>
    </Snackbar>
  );
};
