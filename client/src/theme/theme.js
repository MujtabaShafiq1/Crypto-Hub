import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = (mode) => ({
  typography: {
    header: {
      fontSize: "2rem",
      [breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
    body: {
      fontSize: "1.125rem",
      [breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    subBody: {
      fontSize: "1rem",
      [breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
    },
    helper: {
      fontSize: "0.875rem",
      [breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
    },
    info: {
      fontSize: "0.75rem",
    },
    allVariants: {
      fontFamily: '"Open Sans", sans-serif',
      textTransform: "none",
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "rgb(255, 255, 255)",
            secondary: "rgba(236, 236, 236, 0.4)",
          },
          text: {
            primary: "rgb(0, 0, 0)",
            secondary: "rgb(255, 255, 255)",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "rgb(0, 0, 0)",
            secondary: "rgba(60, 60, 60, 0.15)",
          },
          text: {
            primary: "rgb(255, 255, 255)",
            secondary: "rgb(0, 0, 0)",
          },
        }),
  },
});

export default theme;
