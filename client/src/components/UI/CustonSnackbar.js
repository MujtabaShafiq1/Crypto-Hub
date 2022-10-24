import { Snackbar, Alert } from "@mui/material"

const CustomSnackbar = ({ type, details }) => {

    return (
        <Snackbar
            open={true}
            sx={{
                // position: "absolute",
                marginRight: "32%",
                color: "white",
                width: '100%',
                height: "40%",
                zIndex: 1,
            }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={type}>{details}</Alert>
        </Snackbar>
    )
}

export default CustomSnackbar;