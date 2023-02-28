import { Avatar, ListItemIcon, ListItem } from "@mui/material";
import { ListContainer, StyledListButton, StyledStatusBadge, StyledList, ListHeader, SubText } from "../UI";

import { friendsStatusData as data } from "../../utils/mockData";

const FriendsStatus = () => {
    return (
        <ListContainer>
            <ListHeader>Online Friends</ListHeader>
            <StyledList sx={{ padding: "8px", height: "40vh" }}>
                {data.map((user) => {
                    return (
                        <ListItem sx={{ padding: "0px" }} key={Math.random()}>
                            <StyledListButton>
                                <ListItemIcon>
                                    <StyledStatusBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                        variant="dot"
                                        show={+user.status}>
                                        <Avatar src={user?.photo} />
                                    </StyledStatusBadge>
                                </ListItemIcon>
                                <SubText>{user.name}</SubText>
                            </StyledListButton>
                        </ListItem>
                    );
                })}
            </StyledList>
        </ListContainer>
    );
};

export default FriendsStatus;
