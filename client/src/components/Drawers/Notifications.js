import { Box, Avatar, Typography, Divider, ListItemAvatar, ListItem } from "@mui/material";
import { Flexbox, CollapseContainer, StyledList, ListHeader, StyledListButton } from "../UI";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

import { notificationsData as data } from "../../utils/mockData";

const Notifications = ({ open, close }) => {
    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Flexbox sx={{ justifyContent: "flex-start", paddingLeft: "10px" }}>
                <ArrowBackIcon sx={{ color: "text.primary", cursor: "pointer" }} onClick={close} />
                <ListHeader variant="body">Notifications</ListHeader>
            </Flexbox>
            <Divider variant="middle" sx={{ width: "90%", opacity: 0.2, backgroundColor: "text.primary" }} />

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
