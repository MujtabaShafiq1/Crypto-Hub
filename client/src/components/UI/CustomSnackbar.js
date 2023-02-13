import { Snackbar, Alert } from "@mui/material"

const CustomSnackbar = ({ type, details }) => {

    return (
        <Snackbar
            open={true}
            sx={{
                fontSize: "18px",
                color: "white",
                zIndex: 1,
                height: "12%",
                width: "90%"
            }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert severity={type}>{details}</Alert>
        </Snackbar>
    )
}

export default CustomSnackbar;