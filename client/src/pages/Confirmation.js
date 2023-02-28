import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
import { Flexbox, MainContainer , HeaderText } from "../components/UI";
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
                    <HeaderText sx={{ textAlign: "center" }}>
                        Unable to verify account , Reason:{" "}
                        <HeaderText sx={{ fontWeight: 700, color: "gray" }}>
                            {error.details}
                        </HeaderText>
                    </HeaderText>
                ) : (
                    <HeaderText sx={{ textAlign: "center" }}>
                        Account Verified Successfully
                    </HeaderText>
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
