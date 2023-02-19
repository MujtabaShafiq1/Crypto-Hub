import { Box, Avatar, Typography, Divider, ListItemAvatar } from "@mui/material";
import { Flexbox, CollapseContainer, StyledList, ListHeader, StyledListItem } from "../../misc/MUIComponents";
import moment from "moment";

const Notifications = ({ open, close }) => {
    const data = [
        {
            name: "Ali Connors",
            text: "Liked your post",
            selected: false,
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            text: "Shared your post",
            selected: true,
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            text: "Commented on your post",
            selected: true,
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Judy Myers",
            text: "Mentioned you in a comment",
            selected: false,
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali Connors",
            text: "Mentioned you in a post",
            selected: false,
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            text: "Liked your comment",
            selected: true,
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            text: "Reacted to your comment",
            selected: false,
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Judy Myers",
            text: "Replied to your comment",
            selected: false,
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali Connors",
            text: "Posted new image",
            selected: true,
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            text: "Shared a post",
            selected: false,
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            text: "Updated profile picture",
            selected: true,
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ];

    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Flexbox sx={{ flexDirection: "column" }}>
                <ListHeader variant="body">Notifications</ListHeader>
                <Divider variant="middle" sx={{ width: "70%", opacity: 0.2, backgroundColor: "text.primary" }} />
            </Flexbox>
            <StyledList sx={{ height: "90vh" }}>
                {data.map((activity) => (
                    <Box key={Math.random()}>
                        <StyledListItem selected={activity.selected}>
                            <ListItemAvatar>
                                <Avatar src={activity.photo} />
                            </ListItemAvatar>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="helper" color="text.primary">
                                    {activity.name}
                                </Typography>

                                <Typography variant="helper" color="text.primary">
                                    {activity.text}
                                </Typography>

                                <Typography variant="info" color="text.primary">
                                    {moment().fromNow()}
                                </Typography>
                            </Box>
                        </StyledListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </CollapseContainer>
    );
};

export default Notifications;
