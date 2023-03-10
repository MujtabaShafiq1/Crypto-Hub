import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Avatar } from "@mui/material";
import { Flexbox, BackgroundContainer, ImageContainer, UserDetails, HeaderText, ProfileButton } from "../UI";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const ProfileCover = ({ userDetails }) => {

    const user = useSelector((state) => state.auth.user);
    const [friendRequest, setFriendRequest] = useState(userDetails.request);
    const { data, fetchData } = useFetch();

    const addFriendHandler = async () => {
        const body = { sender: user.id, receiver: userDetails.id };
        fetchData("friendRequests/add", "post", body);
        setFriendRequest(data);
    };

    const confirmRequestHandler = () => {
        console.log("confirmed");
    };

    const deleteRequestHandler = async () => {
        fetchData("friendRequests/delete", "delete", { id: friendRequest.id });
    };

    return (
        <BackgroundContainer>
            <ImageContainer
                component="img"
                src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/55680196_840508762982016_2843432267378851840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH8_FMqMnlFjH26uWQ_KpKv1B2QmrkU26fUHZCauRTbp_gqLG6Vp9alI0jAnQZmh8fT1hmZjxofgwRDoq3d3VTd&_nc_ohc=opieF5wlRkEAX-YJYlZ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDyzr3gi0mudzN1vwRgcoP-C4mRkC16-vBsGY8aAKWbIA&oe=6422F89F"
            />
            <UserDetails>
                <Box sx={{ display: "flex", gap: 5 }}>
                    <Avatar src={userDetails?.photo} sx={{ height: 175, width: 175 }} />
                    <HeaderText sx={{ color: "white", alignSelf: "flex-end" }}>{userDetails?.name}</HeaderText>
                </Box>
                <Flexbox sx={{ gap: 2 }}>
                    {user.userId === userDetails?.userId ? (
                        <>
                            <ProfileButton value="confirm">Acitivty log</ProfileButton>
                            <ProfileButton value="delete">Edit Profile</ProfileButton>
                        </>
                    ) : (
                        <>
                            {friendRequest ? (
                                <>
                                    {friendRequest.sender && (
                                        <ProfileButton value="delete" onClick={deleteRequestHandler}>
                                            Requested
                                        </ProfileButton>
                                    )}
                                    {friendRequest.receiver && (
                                        <>
                                            <ProfileButton value="confirm" onClick={confirmRequestHandler}>
                                                Confirm
                                            </ProfileButton>
                                            <ProfileButton value="delete" onClick={deleteRequestHandler}>
                                                Delete
                                            </ProfileButton>
                                        </>
                                    )}
                                </>
                            ) : (
                                <ProfileButton value="confirm" onClick={addFriendHandler}>
                                    Add Friend
                                </ProfileButton>
                            )}
                            <ProfileButton value="delete">Follow</ProfileButton>
                        </>
                    )}
                </Flexbox>
            </UserDetails>
        </BackgroundContainer>
    );
};

export default ProfileCover;
