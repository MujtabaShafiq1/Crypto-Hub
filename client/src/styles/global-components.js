import {
  Box,
  Container,
  Typography,
  Alert,
  Snackbar,
  Collapse,
  Badge,
  Grid,
  List,
  ListItemButton,
  Button,
  TextField,
  Modal,
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from "@mui/material";

import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const baseFontSizes = {
  header: {
    default: "2rem",
    small: "1.5rem",
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

export const LongTypography = styled(ResponsiveText)({
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

export const ListHeader = styled(ResponsiveText)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

// Navigation

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  left: 0,
  bottom: 0,
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.main.primary,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  backgroundColor: theme.palette.main.primary,
  color: theme.palette.text.primary,
  width: "10%",
  "&.Mui-selected": {
    color: "purple",
    borderBottom: "3px solid purple",
  },
}));

// Container

const BaseFlexbox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const MainContainer = styled(Grid)({
  ...BaseFlexbox,
  flexDirection: "column",
  backgroundImage: `url(/assets/background.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "0% 65%",
  height: "100vh",
  width: "100vw",
});

export const Flexbox = styled(Box)(BaseFlexbox);

export const VerticalFlexbox = styled(Flexbox)({
  flexDirection: "column",
});

export const LayoutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main.primary,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const CollapseContainer = styled(Collapse)(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 2,
  height: "100%",
  position: "absolute",
  "& .MuiCollapse-wrapperInner": {
    width: "20vw",
    borderRadius: "0px 10px 10px 0px",
    borderRight: "1px solid rgba(191, 191, 191, 0.5)",
    backgroundColor: theme.palette.main.primary,
    [theme.breakpoints.down("lg")]: {
      width: "30vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      borderRadius: 0,
      border: "none",
    },
  },
}));

export const DiscoverTagsContainer = styled(Box)(({ hide, theme }) => ({
  height: "44%",
  overflow: "hidden",
  display: hide && "none",
  borderRadius: "5px",
  backgroundColor: theme.palette.main.secondary,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const TagsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "left",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1),
  overflow: "auto",
  height: "100%",
  "& Button": {
    backgroundColor: theme.palette.main.primary,
    color: theme.palette.text.primary,
    borderRadius: "50px",
    opacity: 0.8,
  },
}));

export const ListContainer = styled(Box)(({ hide, theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: "5px",
  backgroundColor: theme.palette.main.secondary,
  height: "100%",
}));

export const ModalContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "45%",
  left: "50%",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  width: 180,
  height: 220,
  backgroundColor: theme.palette.main.primary,
  boxShadow: 24,
  border: "none",
  borderRadius: "20px",
  gap: theme.spacing(2),
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    fontSize: 25,
  },
}));

export const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main.primary,
  height: "100vh",
  overflow: "auto",
  flex: 5,
}));

export const UserDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  position: "absolute",
  padding: `${theme.spacing(0)} ${theme.spacing(3)}`,
  top: "55%",
  width: "95%",
}));

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "450px",
  borderRadius: "3px",
  backgroundColor: theme.palette.main.secondary,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "350px",
  },
}));

export const FriendsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "450px",
  borderRadius: "3px",
  backgroundColor: theme.palette.main.secondary,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "350px",
  },
}));

export const LeftbarContainer = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 2,
  width: "15vw",
  display: "flex",
  height: "100vh",
  position: "sticky",
  backgroundColor: theme.palette.main.primary,
  [theme.breakpoints.down("lg")]: {
    width: "200px",
  },
  [theme.breakpoints.down("md")]: {
    width: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const RightbarContainer = styled(Box)(({ theme }) => ({
  top: 0,
  flex: 1.6,
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  position: "sticky",
  backgroundColor: theme.palette.main.primary,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StoriesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  gap: theme.spacing(1),
  display: "flex",
  overflow: "hidden",
  scrollBehavior: "smooth",
  position: "relative",
}));

export const StoryContainer = styled(Box)(({ theme }) => ({
  zIndex: 0,
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: "10px",
  cursor: "pointer",
  position: "relative",
  height: "230px",
  width: "180px",
  [theme.breakpoints.down("lg")]: {
    height: "200px",
    width: "150px",
  },
  [theme.breakpoints.down("md")]: {
    height: "160px",
    width: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StoryAvatarContainer = styled(VerticalFlexbox)(({ theme }) => ({
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  cursor: "pointer",
  position: "relative",
  fontWeight: 500,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StoryDetails = styled(Flexbox)(({ theme }) => ({
  gap: theme.spacing(1),
  position: "absolute",
  top: "75%",
  left: "5%",
  color: "white",
  fontWeight: 500,
  "& .MuiAvatar-root": {
    height: 35,
    width: 35,
  },
}));

export const ViewStoryContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "90%",
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const ViewStoryDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "3%",
  left: "2%",
  color: "white",
  fontWeight: 500,
  gap: theme.spacing(1),
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

// Badge

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 4,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: "11px",
    backgroundColor: "purple",
  },
}));

export const StyledStatusBadge = styled(Badge)(({ show }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: show ? "#44b700" : "gray",
    color: "#44b700",
  },
}));

// Buttons

export const ConfirmationButton = styled(Button)(({ value }) => ({
  backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
  color: value === "confirm" ? "white" : "black",
  borderRadius: "50px",
  fontSize: "12px",
  ":hover": {
    backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 700,
    opacity: 0.7,
  },
}));

export const StyledListButton = styled(ListItemButton)(({ theme }) => ({
  padding: "8px",
  "&:hover": {
    opacity: 1,
    borderRadius: "30px",
    cursor: "pointer",
  },
}));

export const ProfileButton = styled(Button)(({ value, theme }) => ({
  backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
  color: value === "confirm" ? "white" : "black",
  borderRadius: "25px",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  ":hover": {
    backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
    cursor: "pointer",
    fontWeight: 700,
    opacity: 0.7,
  },
}));

export const StyledButton = styled(Button)(({ error, theme }) => ({
  ...BaseFlexbox,
  backgroundColor: "black",
  opacity: 0.7,
  color: "white",
  width: "60%",
  padding: "8px",
  borderRadius: "5px",
  gap: 10,
  ":hover": {
    backgroundColor: "black",
    cursor: "pointer",
    opacity: 1,
  },
  ":disabled": {
    cursor: "disable",
  },
  animation: error && "shake 500ms ease-in-out",
  "@keyframes shake": {
    "0%": {
      transform: "translateX(0)",
    },
    "25%": {
      transform: "translateX(-15px)",
    },
    "50%": {
      transform: "translateX(15px)",
    },
    "75%": {
      transform: "translateX(-15px)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
}));

// Icons

export const StoryLeftIcon = styled(ExpandCircleDownIcon)(({ theme }) => ({
  position: "sticky",
  left: 0,
  top: "50%",
  transform: "translateY(-50%) rotate(90deg)",
  fontSize: 35,
  zIndex: 1,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StoryRightIcon = styled(ExpandCircleDownIcon)(({ theme }) => ({
  position: "sticky",
  right: 10,
  top: "50%",
  transform: "translateY(-50%) rotate(-90deg)",
  fontSize: 35,
  zIndex: 1,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// Fields

export const StyledField = styled(TextField)(({ error, theme }) => ({
  width: "100%",
  input: { color: theme.palette.text.primary },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0.5px solid black",
    background: "rgb(180, 180, 180, 0.2)",
    animation: error && "shake 500ms ease-in-out",
    "@keyframes shake": {
      "0%": {
        transform: "translateX(0)",
      },
      "25%": {
        transform: "translateX(-5px)",
      },
      "50%": {
        transform: "translateX(5px)",
      },
      "75%": {
        transform: "translateX(-5px)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  },
  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: error && "0.5px solid #red",
    },
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
  },
}));

// List

export const StyledList = styled(List)(({ theme }) => ({
  overflow: "auto",
  "& .MuiTypography-root": {
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  "&& .Mui-selected": {
    "& .MuiTypography-root": {
      color: "gray",
      fontWeight: 300,
    },
  },
}));

export const StyledNavList = styled(List)(({ theme }) => ({
  borderRadius: "5px",
  backgroundColor: theme.palette.main.secondary,
  "&& .Mui-selected": {
    fontWeight: 700,
    borderLeft: "3px solid purple",
    borderRadius: 0,
    "& .MuiSvgIcon-root": {
      color: "purple",
    },
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    fontSize: 30,
    "&:hover": {
      animation: "bounce 500ms",
      "@keyframes bounce": {
        "0%": {
          transform: "translateY(0)",
        },
        "25%": {
          transform: "translateY(-3px)",
        },
        "50%": {
          transform: "translateY(0px)",
        },
        "75%": {
          transform: "translateY(-3px)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
    },
  },
  "& .MuiAvatar-root": {
    backgroundColor: "transparent",
  },
}));

// Modal

export const StyledModal = styled(Modal)(({ theme }) => ({
  ...BaseFlexbox,
  backgroundColor: "rgba(0,0,0,0.5)",
  height: "100%",
  width: "100%",
  border: "none",
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

// Loader

export const ProgressContainer = styled(Box)(({ theme }) => ({
  display: "block",
  position: "absolute",
  backgroundColor: "lightgray",
  top: "1%",
  width: "98%",
  height: "3px",
  borderRadius: "50px",
}));

export const Progressbar = styled(Box)(({ theme }) => ({
  width: "0%",
  height: "100%",
  borderRadius: "50px",
  backgroundColor: "gray",
  animation: "fill-bar 5s linear forwards",
  "@keyframes fill-bar": {
    from: { width: "0%" },
    to: { width: "100%" },
  },
}));
