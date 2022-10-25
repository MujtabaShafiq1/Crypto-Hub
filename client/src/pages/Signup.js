import { useNavigate } from "react-router-dom"
import { Typography, Grid } from "@mui/material"
import { Flexbox, FormContainer } from "../misc/MUIComponents"

import background from "../assets/login.jpg"
import SignupForm from "../components/Forms/SignupForm"

const styles = {
    PaperStyles: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 65%',
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
                <Flexbox sx={{ flexDirection: "column", gap: { xs: 2, lg: 4 } }}>

                    <Flexbox sx={{ flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "30px" }} fontWeight={500}>Sign Up</Typography>
                        <Typography sx={{ fontSize: "20px", textAlign: "center" }} variant="h6" color="gray" fontWeight={300}>Create an account to continue</Typography>
                    </Flexbox>

                    <SignupForm />

                    <Flexbox display="flex" gap={2} flexDirection={{ xs: "column", md: "row", marginBottom: "5%" }}>
                        <Typography sx={{ color: "white", fontSize: "16px", textAlign: "center" }}>Already a user? </Typography>
                        <Typography
                            sx={{ color: "white", cursor: "pointer", fontSize: "16px", fontWeight: 600, textAlign: "center" }}
                            onClick={() => navigate("/login")}
                        >
                            Login now !
                        </Typography>
                    </Flexbox>

                </Flexbox >

            </FormContainer>
        </Grid >

    )
}

export default Signup