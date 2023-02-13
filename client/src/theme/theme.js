import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = createTheme({
    typography: {
        header: {
            fontSize: 30,
            [breakpoints.down("md")]: {
                fontSize: 24,
            },
        },
        body: {
            fontSize: 18,
            [breakpoints.down("md")]: {
                fontSize: 16,
            },
        },
        subBody: {
            fontSize: 16,
            [breakpoints.down("md")]: {
                fontSize: 14,
            },
        },
        helper: {
            fontSize: 14,
            [breakpoints.down("md")]: {
                fontSize: 12,
            },
        },
    },
});

export default theme;
