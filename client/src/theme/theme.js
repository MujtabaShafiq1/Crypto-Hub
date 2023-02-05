import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: '"Open Sans", sans-serif',
            textTransform: 'none',
        },
    },
    subBody: {
        fontSize: 18,
    },
})

export default theme;