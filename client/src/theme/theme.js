import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = createTheme({
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
            textTransform: 'none',
        },
    },
});

export default theme;
