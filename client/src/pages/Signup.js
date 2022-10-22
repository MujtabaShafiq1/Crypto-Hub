import { useNavigate } from "react-router-dom"
import { Box, Typography, Grid } from "@mui/material"
import { Flexbox, FormContainer } from "../misc/MUIComponents"

import background from "../assets/login.jpg"
import SignupForm from "../components/Forms/SignupForm"

const styles = {
    PaperStyles: {
        backgroundImage: `url(${background})`,
        backgroundSize: '100%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: '0% 65%',
        // backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
    },
};
const Signup = () => {

    const navigate = useNavigate()

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={styles.PaperStyles}
        >

            <FormContainer>
                <Flexbox sx={{ flexDirection: "column", gap: 5 }}>

                    <Flexbox sx={{ flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "30px" }} fontWeight={500}>Welcome Back</Typography>
                        <Typography sx={{ fontSize: "20px" }} variant="h6" color="gray" fontWeight={300}>login to continue</Typography>
                    </Flexbox>

                    <SignupForm />

                    <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
                        <Typography sx={{ fontSize: "16px" }}>Already a user? </Typography>
                        <Typography sx={{ color: "gray", cursor: "pointer", fontSize: "16px", fontWeight: 600 }} onClick={() => navigate("/login")}>
                            Login now !
                        </Typography>
                    </Box>

                </Flexbox >
            </FormContainer>
        </Grid >

    )
}

export default Signup