import { List, ListItemIcon, Avatar, Typography } from "@mui/material";
import { StyledListItem } from "../../misc/MUIComponents";

const FriendsStatus = () => {
    const data = [
        { name: "Mujtaba", status: false },
        { name: "Ali", status: false },
        { name: "Nasir", status: false },
        { name: "Zawat", status: false },
    ];

    return data.map((user) => {
        return (
            <List>
                <StyledListItem>
                    <ListItemIcon>
                        <Avatar src={user?.photo} />
                    </ListItemIcon>
                    <Typography variant="subBody" sx={{ color: "text.primary" }}>
                        {user.name}
                    </Typography>
                </StyledListItem>
            </List>
        );
    });
};

export default FriendsStatus;
