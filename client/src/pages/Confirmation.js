import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Typography, Grid } from "@mui/material"
import { Flexbox } from "../misc/MUIComponents"
import axios from "axios"

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

const Confirmation = () => {

    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                await axios.post(`http://localhost:8000/auth/register`, { token: token })
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            } catch (e) {
                console.log(e);     // add snackbar here
            }
        }
        verifyUser();
    })

    return (
        <Grid style={styles.PaperStyles}>
            <Flexbox sx={{ minHeight: "100vh", flexDirection: "column" }}>
                <Typography>Confirmation</Typography>
                <Typography>{token}</Typography>
            </Flexbox>
        </Grid >
    )
}

export default Confirmation