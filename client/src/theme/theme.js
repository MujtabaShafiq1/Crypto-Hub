import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = (mode) => ({
    typography: {
        header: {
            fontSize: 30,
            [breakpoints.down("sm")]: {
                fontSize: 24,
            },
        },
        body: {
            fontSize: 18,
            [breakpoints.down("sm")]: {
                fontSize: 16,
            },
        },
        subBody: {
            fontSize: 16,
            [breakpoints.down("sm")]: {
                fontSize: 14,
            },
        },
        helper: {
            fontSize: 14,
            [breakpoints.down("sm")]: {
                fontSize: 12,
            },
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
                  },
                  text: {
                      primary: "rgb(0, 0, 0)",
                      secondary:  "rgb(255, 255, 255)",
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: "rgb(0, 0, 0)",
                  },
                  text: {
                      primary:  "rgb(255, 255, 255)",
                      secondary: "rgb(0, 0, 0)",
                  },
              }),
    },
});

export default theme;
