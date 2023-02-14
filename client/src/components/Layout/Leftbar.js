import { useState } from "react";
import { useSelector } from "react-redux";
import { List, ListItemButton, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import { StyledBadge } from "../../misc/MUIComponents";
import {
    SearchRounded,
    NotificationsNoneRounded,
    HomeRounded,
    BookmarkBorderRounded,
    PeopleOutlineOutlined,
    HistoryRounded,
    DarkModeRounded,
    LightModeRounded,
    LogoutRounded,
} from "@mui/icons-material";

const Lefbar = () => {

    const user = useSelector((state) => state.auth.user);
    const [mode , setMode] = useState(false)

    const logoutHandler = async () => {
        window.open(`http://localhost:8000/auth/logout`, "_self");
    };

    return (
        <List component="nav">
            <ListItemButton>
                <ListItemIcon>
                    <Avatar src={user?.photo} />
                </ListItemIcon>
                <ListItemText primary={user.name} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <HomeRounded />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SearchRounded />
                </ListItemIcon>
                <ListItemText primary="Search" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <HistoryRounded />
                </ListItemIcon>
                <ListItemText primary="Your Activity" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <BookmarkBorderRounded />
                </ListItemIcon>
                <ListItemText primary="Saved" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <StyledBadge color="error" badgeContent={5} max={999}>
                        <NotificationsNoneRounded />
                    </StyledBadge>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <StyledBadge color="error" badgeContent={5} max={999}>
                        <PeopleOutlineOutlined />
                    </StyledBadge>
                </ListItemIcon>
                <ListItemText primary="Friend Requests" />
            </ListItemButton>
            <ListItemButton onClick={() => setMode(prev => !prev)}>
                <ListItemIcon>
                    {mode ? <DarkModeRounded /> : <LightModeRounded />}
                </ListItemIcon>
                <ListItemText primary="Switch Appearance" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LogoutRounded />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </List>
    );
};

export default Lefbar;
