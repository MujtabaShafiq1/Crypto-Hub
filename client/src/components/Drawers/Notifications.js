import { Box, Avatar, Divider, ListItemAvatar, ListItem } from "@mui/material";
import { Flexbox, VerticalFlexbox, CollapseContainer, StyledList, ListHeader, StyledListButton, HelperText, InfoText } from "../UI";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

import { notificationsData as data } from "../../utils/mockData";

const Notifications = ({ open, close }) => {
    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Flexbox sx={{ justifyContent: "flex-start", paddingLeft: "10px" }}>
                <ArrowBackIcon sx={{ color: "text.primary", cursor: "pointer" }} onClick={close} />
                <ListHeader>Notifications</ListHeader>
            </Flexbox>
            <Divider variant="middle" sx={{ width: "90%", opacity: 0.2, mb: "3%", backgroundColor: "text.primary" }} />

            <StyledList sx={{ height: "90vh" }}>
                {data.map((activity) => (
                    <Box key={Math.random()}>
                        <ListItem>
                            <StyledListButton selected={activity.selected}>
                                <ListItemAvatar>
                                    <Avatar src={activity.photo} />
                                </ListItemAvatar>
                                <VerticalFlexbox sx={{ alignItems: "flex-start" }}>
                                    <HelperText>{activity.name}</HelperText>
                                    <HelperText>{activity.text}</HelperText>
                                    <InfoText>{moment().fromNow()}</InfoText>
                                </VerticalFlexbox>
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
