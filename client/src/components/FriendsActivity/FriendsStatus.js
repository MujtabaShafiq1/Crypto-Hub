import { Avatar, Typography, ListItemIcon, Divider, ListItem } from "@mui/material";
import { StyledListButton, StyledStatusBadge, StyledList, ListHeader } from "../UI";

import { friendsStatusData as data } from "../../utils/mockData";

const FriendsStatus = () => {
    return (
        <>
            <ListHeader variant="body">Online Friends</ListHeader>
            <Divider variant="middle" sx={{ opacity: 0.3, backgroundColor: "text.primary" }} />
            <StyledList sx={{ padding: "8px" }}>
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
                                <Typography variant="subBody" sx={{ color: "text.primary" }}>
                                    {user.name}
                                </Typography>
                            </StyledListButton>
                        </ListItem>
                    );
                })}
            </StyledList>
        </>
    );
};

export default FriendsStatus;
