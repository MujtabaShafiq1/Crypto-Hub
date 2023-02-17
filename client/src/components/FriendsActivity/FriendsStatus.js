import { Avatar, Typography, List, ListItemIcon } from "@mui/material";
import { StyledListItem, StyledStatusBadge, ListHeader } from "../../misc/MUIComponents";

const FriendsStatus = () => {
    const data = [
        {
            name: "Mujtaba",
            status: true,
            photo: "https://images.pexels.com/photos/2528318/pexels-photo-2528318.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali",
            status: false,
            photo: "https://images.pexels.com/photos/2528408/pexels-photo-2528408.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Nasir",
            status: true,
            photo: "https://images.pexels.com/photos/2528252/pexels-photo-2528252.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Zawat",
            status: true,
            photo: "https://images.pexels.com/photos/2541879/pexels-photo-2541879.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Mujtaba",
            status: true,
            photo: "https://images.pexels.com/photos/2524369/pexels-photo-2524369.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali",
            status: false,
            photo: "https://images.pexels.com/photos/2524371/pexels-photo-2524371.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Nasir",
            status: true,
            photo: "https://images.pexels.com/photos/2524366/pexels-photo-2524366.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Zawat",
            status: false,
            photo: "https://images.pexels.com/photos/4571251/pexels-photo-4571251.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Mujtaba",
            status: false,
            photo: "https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            name: "Ali",
            status: false,
            photo: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <>
            <ListHeader variant="body">Online Friends</ListHeader>
            <List sx={{ overflow: "auto" }}>
                {data.map((user) => {
                    return (
                        <StyledListItem key={Math.random()}>
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
                        </StyledListItem>
                    );
                })}
            </List>
        </>
    );
};

export default FriendsStatus;
