import { Box, Avatar, Divider, ListItemText, ListItemAvatar } from "@mui/material";
import {
    Flexbox,
    CollapseContainer,
    StyledList,
    ListHeader,
    StyledListItem,
    LongTypography,
    ConfirmationButton,
} from "../../misc/MUIComponents";
import moment from "moment";

const FriendRequests = ({ open, close }) => {
    const data = [
        {
            name: "Ali Connors",
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Judy Myers",
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali Connors",
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Judy Myers",
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali Connors",
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Judy Myers",
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali Connors",
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ];

    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Flexbox sx={{ flexDirection: "column" }}>
                <ListHeader variant="body">Friends Request</ListHeader>
                <Divider variant="middle" sx={{ width: "70%", opacity: 0.2, backgroundColor: "text.primary" }} />
            </Flexbox>
            <StyledList sx={{ height: "90vh" }}>
                {data.map((activity) => (
                    <Box key={Math.random()}>
                        <StyledListItem>
                            <ListItemAvatar>
                                <Avatar src={activity.photo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <LongTypography variant="subBody" color="text.primary">
                                        {activity.name}
                                    </LongTypography>
                                }
                                secondary={
                                    <>
                                        <LongTypography variant="info" color="text.primary">
                                            {moment().fromNow()}
                                        </LongTypography>
                                    </>
                                }
                            />
                            <Flexbox sx={{ gap: 1 }}>
                                <ConfirmationButton value="confirm">Confirm</ConfirmationButton>
                                <ConfirmationButton value="delete">Delete</ConfirmationButton>
                            </Flexbox>
                        </StyledListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </CollapseContainer>
    );
};

export default FriendRequests;
