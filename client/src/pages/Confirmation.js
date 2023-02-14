import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
import { Flexbox, MainContainer } from "../misc/MUIComponents";
import axios from "axios";

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
                        Unable to verify account , Reason:{" "}
                        <Typography variant="header" sx={{ fontWeight: 700, color: "gray" }}>
                            {error.details}
                        </Typography>
                    </Typography>
                ) : (
                    <Typography variant="header" sx={{ textAlign: "center", fontWeight: 500 }}>
                        Account Verified Successfully
                    </Typography>
                )}
                {error.status ? (
                    <CancelOutlined fontSize="large" sx={{ fill: "red" }} />
                ) : (
                    <CheckCircleOutlined fontSize="large" sx={{ fill: "green" }} />
                )}
            </Flexbox>
        </MainContainer>
    );
};

export default Confirmation;
