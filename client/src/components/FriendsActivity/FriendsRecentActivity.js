import { Box, Avatar, Typography, Divider, ListItemText, ListItemAvatar, ListItem } from "@mui/material";
import { StyledList, ListHeader, StyledListButton } from "../UI";
import moment from "moment";

import { friendsActivityData as data } from "../../utils/mockData";

const FriendsRecentActivity = () => {
    return (
        <>
            <ListHeader variant="body">Friends Activity</ListHeader>
            <Divider variant="middle" sx={{ opacity: 0.3, backgroundColor: "text.primary" }} />
            <StyledList sx={{ height: "50vh" }}>
                {data.map((activity) => (
                    <Box key={activity.name}>
                        <ListItem>
                            <StyledListButton>
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
                            </StyledListButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </>
    );
};

export default FriendsRecentActivity;
