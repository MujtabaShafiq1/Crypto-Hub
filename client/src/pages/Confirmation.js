import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { Flexbox, MainContainer } from "../misc/MUIComponents";
import axios from "axios";

import success from "../assets/ActionIcons/success.png";
import denied from "../assets/ActionIcons/denied.png";

const Confirmation = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState({ status: false, details: "" });

    useEffect(() => {
        const verifyUser = async () => {
            try {
                await axios.post(`http://localhost:8000/auth/register`, { token: token });
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } catch (e) {
                setError({ status: true, details: e.response.data.message });
            }
        };
        verifyUser();
    }, [navigate, token]);

    return (
        <MainContainer container>
            <Flexbox gap={2}>
                {error.status ? (
                    <Typography variant="header" sx={{ textAlign: "center", fontWeight: 500 }}>
                        Unable to verify account , Reason:{' '}
                        <Typography variant="header" sx={{ fontWeight: 700, color: "gray" }}>
                             { error.details}
                        </Typography>
                    </Typography>
                ) : (
                    <Typography variant="header" sx={{ textAlign: "center", fontWeight: 500 }}>
                        Account Verified Successfully
                    </Typography>
                )}
                <Box component="img" src={error.status ? denied : success} sx={{ width: { xs: "20%", sm: "10%", md: "5%" } }} />
            </Flexbox>
        </MainContainer>
    );
};

export default Confirmation;
