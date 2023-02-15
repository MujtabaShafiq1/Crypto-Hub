import { ListItemIcon, Avatar, Typography } from "@mui/material";
import { StyledList, StyledListItem, StyledStatusBadge } from "../../misc/MUIComponents";

const FriendsStatus = () => {
    const data = [
        { name: "Mujtaba", status: true },
        { name: "Ali", status: false },
        { name: "Nasir", status: true },
        { name: "Zawat", status: true },
        { name: "Mujtaba", status: true },
        { name: "Ali", status: false },
        { name: "Nasir", status: true },
        { name: "Zawat", status: false },
        { name: "Mujtaba", status: false },
        { name: "Ali", status: false },
        { name: "Nasir", status: false },
        { name: "Zawat", status: false },
        { name: "Mujtaba", status: true },
        { name: "Ali", status: true },
        { name: "Nasir", status: true },
        { name: "Zawat", status: true },
    ];

    return (
        <StyledList sx={{ flexGrow: 1, overflow: "auto" }}>
            {data.map((user) => {
                return (
                    <StyledListItem key={Math.random()}>
                        <ListItemIcon>
                            <StyledStatusBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                variant="dot"
                                show={+(user.status)}>
                                <Avatar src={user?.photo} />
                            </StyledStatusBadge>
                        </ListItemIcon>
                        <Typography variant="subBody" sx={{ color: "text.primary" }}>
                            {user.name}
                        </Typography>
                    </StyledListItem>
                );
            })}
        </StyledList>
    );
};

export default FriendsStatus;
