import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Grid, Container } from "@mui/material"
import background from "../assets/background.jpg"
import { Flexbox } from "../misc/MUIComponents";

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
            <Flexbox sx={{ minHeight: "80vh" }}>
                <Container sx={{ width: { xs: "95%", md: "40%" } }}>
                    <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
                        We have sent email to:  <span style={{ fontSize: "22px", fontWeight: 700, color: "gray", overflowWrap: "break-word" }}> {location.state?.email} </span> to confirm the validity of your email address. After receiving follow the link provided to complete the registration
                    </Typography>
                </Container>
            </Flexbox>
        </Grid >

    )
}
export default VerifyEmail