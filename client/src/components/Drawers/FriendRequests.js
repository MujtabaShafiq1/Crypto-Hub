import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Box, Avatar, Divider, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import { Flexbox, CollapseContainer, StyledList, ListHeader, StyledListButton, LongTypography, ConfirmationButton } from "../UI";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../UI/Loader/Loader";
import useFetch from "../hooks/useFetch";
import moment from "moment";

const FriendRequests = ({ open, close }) => {

    const user = useSelector((state) => state.auth.user);
    // const { data, isLoading, isError, fetchData } = useFetch("friendRequests/received", "post", { id: user.id })
    const { data, isLoading, isError, fetchData } = useFetch()
   
    // const fetchFriendRequests = useCallback(async () => {
    //     fetchData();
    //     setFriendRequest(data);
    // }, [user.id]);

    // useEffect(() => {
    //     fetchFriendRequests();
    // }, [fetchFriendRequests]);

    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Flexbox sx={{ justifyContent: "flex-start", pl: "10px" }}>
                <ArrowBackIcon sx={{ color: "text.primary", cursor: "pointer" }} onClick={close} />
                <ListHeader>Friends Request</ListHeader>
            </Flexbox>
            <Divider variant="middle" sx={{ width: "90%", opacity: 0.2, mb: "3%", backgroundColor: "text.primary" }} />

            <StyledList sx={{ height: "90vh" }}>
            {isLoading ? <Loader />
                :
                data.map((request) => (
                    <Box key={Math.random()}>
                        <ListItem>
                            <StyledListButton>
                                <ListItemAvatar>
                                    <Avatar src={request.sender.photo} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<LongTypography variant="subBody">{request.sender.name}</LongTypography>}
                                    secondary={<LongTypography variant="info">{moment().fromNow()}</LongTypography>}
                                />
                                <Flexbox sx={{ gap: 1 }}>
                                    <ConfirmationButton value="confirm">Confirm</ConfirmationButton>
                                    <ConfirmationButton value="delete">Delete</ConfirmationButton>
                                </Flexbox>
                            </StyledListButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))
            }
            </StyledList>
        </CollapseContainer>
    );
};

export default FriendRequests;
