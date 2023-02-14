import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { List, ListItemIcon, Avatar, Typography } from "@mui/material";
import { StyledBadge, StyledListItem, StickyContainer } from "../../misc/MUIComponents";
import { ThemeContext } from "../../context/ThemeProvider";
import Notifications from "../Drawers/Notifications";
import DiscoverTags from "../HashTags/DiscoverTags";

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

const Leftbar = () => {

    const user = useSelector((state) => state.auth.user);
    const { mode, toggleColorMode } = useContext(ThemeContext);
    const [notifications, setNotifications] = useState(false);

    const logoutHandler = async () => {
        console.log("logging out")
        // window.open(`http://localhost:8000/auth/logout`, "_self");
    };

    return (
        <>
            {notifications && <Notifications close={() => setNotifications(false)}/>}
            <StickyContainer>
                <List component="nav">
                    <StyledListItem>
                        <ListItemIcon>
                            <Avatar src={user?.photo} />
                        </ListItemIcon>
                        <Typography variant="subBody">{user.name}</Typography>
                    </StyledListItem>

                    <StyledListItem>
                        <ListItemIcon>
                            <HomeRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Typography variant="subBody">Home</Typography>
                    </StyledListItem>

                    <StyledListItem>
                        <ListItemIcon>
                            <SearchRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Typography variant="subBody">Search</Typography>
                    </StyledListItem>

                    <StyledListItem>
                        <ListItemIcon>
                            <HistoryRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Typography variant="subBody">Your Activity</Typography>
                    </StyledListItem>

                    <StyledListItem>
                        <ListItemIcon>
                            <BookmarkBorderRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Typography variant="subBody">Saved</Typography>
                    </StyledListItem>

                    <StyledListItem onClick={() =>  setNotifications(true)}>
                        <ListItemIcon>
                            <StyledBadge color="error" badgeContent={5} max={999}>
                                <NotificationsNoneRounded sx={{ fontSize: 30 }} />
                            </StyledBadge>
                        </ListItemIcon>
                        <Typography variant="subBody">Notifications</Typography>
                    </StyledListItem>

                    <StyledListItem>
                        <ListItemIcon>
                            <StyledBadge color="error" badgeContent={5} max={999}>
                                <PeopleOutlineOutlined sx={{ fontSize: 30 }} />
                            </StyledBadge>
                        </ListItemIcon>
                        <Typography variant="subBody">Friend Requests</Typography>
                    </StyledListItem>

                    <StyledListItem onClick={toggleColorMode}>
                        <ListItemIcon>
                            {mode ? <DarkModeRounded sx={{ fontSize: 30 }} /> : <LightModeRounded sx={{ fontSize: 30 }} />}
                        </ListItemIcon>
                        <Typography variant="subBody">Switch Appearance</Typography>
                    </StyledListItem>

                    <StyledListItem onClick={logoutHandler}>
                        <ListItemIcon>
                            <LogoutRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Typography variant="subBody">Logout</Typography>
                    </StyledListItem>
                </List>
                <DiscoverTags />
            </StickyContainer>
        </>
    );
};

export default Leftbar;
