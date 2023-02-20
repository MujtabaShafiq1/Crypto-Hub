import { Box, Avatar, Divider, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import {
    Flexbox,
    CollapseContainer,
    StyledList,
    ListHeader,
    StyledListButton,
    LongTypography,
    ConfirmationButton,
} from "../../misc/MUIComponents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";

import { FriendRequestsData as data } from "../../utils/mockData";

const FriendRequests = ({ open, close }) => {
    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
           
            <Flexbox sx={{ justifyContent: "flex-start", pl: "10px" }}>
                <ArrowBackIcon sx={{ color: "text.primary", cursor: "pointer" }} onClick={close} />
                <ListHeader variant="body">Friends Request</ListHeader>
            </Flexbox>
            <Divider variant="middle" sx={{ width: "90%", opacity: 0.2, backgroundColor: "text.primary" }} />

            <StyledList sx={{ height: "90vh" }}>
                {data.map((activity) => (
                    <Box key={Math.random()}>
                        <ListItem>
                            <StyledListButton>
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
                            </StyledListButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </CollapseContainer>
    );
};

export default FriendRequests;
