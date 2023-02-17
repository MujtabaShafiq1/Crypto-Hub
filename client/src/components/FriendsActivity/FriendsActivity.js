import { Box, Avatar, Typography, Divider, List, ListItemText, ListItemAvatar } from "@mui/material";
import { ListHeader, StyledListItem } from "../../misc/MUIComponents";
import moment from "moment";

const FriendsActivity = () => {
    const data = [
        {
            name: "Ali Connors",
            text: " — I'll be in your neighborhood doing errands this…",
            photo: "https://images.pexels.com/photos/14968378/pexels-photo-14968378.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Sandra Adams",
            text: " — Do you have Paris recommendations? Have you ever…",
            photo: "https://images.pexels.com/photos/13131586/pexels-photo-13131586.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Alex Collins",
            text: " — Wish I could come, but I'm out of town this…",
            photo: "https://images.pexels.com/photos/4823473/pexels-photo-4823473.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            name: "Judy Myers",
            text: " — Wish I could come, but I'm out of town this…",
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <>
            <ListHeader variant="body">Friends Activity</ListHeader>
            <List sx={{ overflow: "auto", height: "50vh" }}>
                {data.map((activity) => (
                    <Box key={activity.name}>
                        <StyledListItem>
                            <ListItemAvatar>
                                <Avatar src={activity.photo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography variant="subBody" color="text.primary">
                                        {activity.name}
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography variant="helper" color="text.primary">
                                            {moment().fromNow()}
                                            {activity.text}
                                        </Typography>
                                    </>
                                }
                            />
                        </StyledListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </List>
        </>
    );
};

export default FriendsActivity;
