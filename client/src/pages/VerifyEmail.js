import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Grid } from "@mui/material"
import { Flexbox } from "../misc/MUIComponents"
import background from "../assets/background.jpg"

const styles = {
    PaperStyles: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 65%',
        height: "100vh",
        width: "100vw",
    },
};

const VerifyEmail = () => {

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.email) navigate("/login")
    })

    return (
        <Grid style={styles.PaperStyles}>
            <Flexbox sx={{ minHeight: "80vh", gap: 2 }}>
                <Typography sx={{ fontSize: "20px" }}>Verify Email that have been sent on </Typography>
                <Typography sx={{ fontSize: "22px", fontWeight: 700, color: "gray" }} >{location.state?.email}</Typography>
            </Flexbox>
        </Grid >

    )
}
export default VerifyEmail