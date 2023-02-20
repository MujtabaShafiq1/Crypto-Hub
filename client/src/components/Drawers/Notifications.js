import { Box, Avatar, Typography, Divider, ListItemAvatar, ListItem } from "@mui/material";
import { Flexbox, CollapseContainer, StyledList, ListHeader, StyledListButton } from "../../misc/MUIComponents";
import moment from "moment";

import { notificationsData as data } from "../../utils/mockData";

const Notifications = ({ open, close }) => {
    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Flexbox sx={{ flexDirection: "column" }}>
                <ListHeader variant="body">Notifications</ListHeader>
                <Divider variant="middle" sx={{ width: "70%", opacity: 0.2, backgroundColor: "text.primary" }} />
            </Flexbox>
            <StyledList sx={{ height: "90vh" }}>
                {data.map((activity) => (
                    <Box key={Math.random()}>
                        <ListItem>
                            <StyledListButton selected={activity.selected}>
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
                            </StyledListButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </CollapseContainer>
    );
};

export default Notifications;
