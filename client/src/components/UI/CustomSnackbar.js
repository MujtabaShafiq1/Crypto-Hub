import { Snackbar, Alert } from "@mui/material";

const CustomSnackbar = ({snackbar, reset}) => {

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
            <Alert severity={snackbar.type}>
                {snackbar.details || "Server is down , please try again later"}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
