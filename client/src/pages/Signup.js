import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Flexbox, MainContainer, FormContainer } from "../components/UI";
import SignupForm from "../components/Forms/SignupForm";

const Signup = () => {
    const navigate = useNavigate();

    return (
        <MainContainer container>
            <FormContainer>
                <Flexbox sx={{ flexDirection: "column", gap: { xs: 1, md: 3 } }}>
                    <Flexbox sx={{ flexDirection: "column", padding: "5px", gap: 1 }}>
                        <Typography variant="header" sx={{ fontWeight: 500 }}>
                            Sign Up
                        </Typography>
                        <Typography variant="body" sx={{ fontWeight: 500, color: "gray", display: { xs: "none", md: "block" } }}>
                            Create an account to continue
                        </Typography>
                    </Flexbox>

                    <SignupForm />

                    <Flexbox sx={{ gap: 1, mb: "5%", flexDirection: { xs: "column", md: "row" } }}>
                        <Typography variant="subBody" sx={{ color: "white", display: { xs: "none", md: "block" } }}>
                            Already a user?
                        </Typography>
                        <Typography
                            variant="subBody"
                            sx={{ color: "white", cursor: "pointer", fontWeight: 500 }}
                            onClick={() => navigate("/login")}>
                            Login now !
                        </Typography>
                    </Flexbox>
                </Flexbox>
            </FormContainer>
        </MainContainer>
    );
};

export default Signup;
