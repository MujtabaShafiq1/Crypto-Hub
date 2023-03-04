import { Box, Avatar, Divider, ListItemAvatar, ListItem, ListItemText } from "@mui/material";
import { SubText, HelperText, InfoText, ListContainer, StyledList, ListHeader, StyledListButton } from "../UI";
import moment from "moment";
import { friendsActivityData as data } from "../../utils/mockData";

const FriendsRecentActivity = () => {
    return (
        <ListContainer>
            <ListHeader>Friends Activity</ListHeader>
            <StyledList sx={{ height: "40vh", padding: 0 }}>
                {data.map((activity) => (
                    <Box key={activity.name}>
                        <ListItem>
                            <StyledListButton>
                                <ListItemAvatar>
                                    <Avatar src={activity.photo} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<SubText>{activity.name}</SubText>}
                                    // secondary={
                                    //     <>
                                    //         <InfoText>{moment().fromNow()}</InfoText>
                                    //         <HelperText>{activity.text}</HelperText>
                                    //     </>
                                    // }
                                />
                            </StyledListButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </ListContainer>
    );
};

export default FriendsRecentActivity;
