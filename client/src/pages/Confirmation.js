import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Typography, Grid, Container, Box } from "@mui/material"
import { Flexbox } from "../misc/MUIComponents"
import axios from "axios"

import background from "../assets/background.jpg"
import success from "../assets/success.png"
import denied from "../assets/denied.png"

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
    const [error, setError] = useState({ status: false, details: "" })

    useEffect(() => {
        const verifyUser = async () => {
            try {
                await axios.post(`http://localhost:8000/auth/register`, { token: token })
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            } catch (e) {
                setError({ status: true, details: e.response.data.message })
            }
        }
        verifyUser();
    }, [navigate, token])

    return (
        <Grid style={styles.PaperStyles}>
            <Flexbox sx={{ minHeight: "80vh" }}>
                <Container >
                    <Flexbox gap={2}>
                        {error.status ?
                            <Typography sx={{ fontSize: "20px", textAlign: "center", fontWeight: 500 }}>
                                Unable to verify account , Reason:
                                <span style={{ fontSize: "22px", fontWeight: 700, color: "gray" }}> {error.details} </span>
                            </Typography>
                            :
                            <Typography sx={{ fontSize: "20px", textAlign: "center", fontWeight: 500 }}>Account Verified Successfully</Typography>
                        }
                        <Box component="img" src={error.status ? denied : success} sx={{ width: { xs: "20%", sm: "10%", md: "5%" } }} />
                    </Flexbox>
                </Container>
            </Flexbox>
        </Grid >
    )
}

export default Confirmation