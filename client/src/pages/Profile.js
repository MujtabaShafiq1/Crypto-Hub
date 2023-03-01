import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Box, Avatar } from "@mui/material";
import axios from "axios";
import { Flexbox, PageContainer, BackgroundContainer, ImageContainer, UserDetails, HeaderText, ConfirmationButton } from "../components/UI";

const Profile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();

    const fetchUser = useCallback(async () => {
        const response = await axios.get(`http://localhost:8000/user/${userId}`);
        setUser(response.data);
    }, [userId]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <PageContainer>
            <Flexbox>
                <Box sx={{ width: "90%" }}>
                    <BackgroundContainer>
                        <ImageContainer
                            component="img"
                            src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/55680196_840508762982016_2843432267378851840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH8_FMqMnlFjH26uWQ_KpKv1B2QmrkU26fUHZCauRTbp_gqLG6Vp9alI0jAnQZmh8fT1hmZjxofgwRDoq3d3VTd&_nc_ohc=opieF5wlRkEAX-YJYlZ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDyzr3gi0mudzN1vwRgcoP-C4mRkC16-vBsGY8aAKWbIA&oe=6422F89F"
                        />
                        <UserDetails>
                            <Flexbox sx={{ gap: 5 }}>
                                <Avatar
                                    src="https://images.pexels.com/photos/4571251/pexels-photo-4571251.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    sx={{ height: 200, width: 200 }}
                                />
                                <HeaderText sx={{ color: "white" }}>Mujtaba Shafiq</HeaderText>
                            </Flexbox>
                            <Flexbox sx={{ gap: 2 }}>
                                <ConfirmationButton value="confirm">Confirm</ConfirmationButton>
                                <ConfirmationButton value="delete">Delete</ConfirmationButton>
                            </Flexbox>
                        </UserDetails>
                    </BackgroundContainer>
                </Box>
            </Flexbox>
        </PageContainer>
    );
};

export default Profile;
