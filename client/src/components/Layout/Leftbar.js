import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { ListItemIcon, Avatar, Typography, Collapse } from "@mui/material";
import { StickyContainer, StyledBadge, StyledList, StyledListItem } from "../../misc/MUIComponents";
import { ThemeContext } from "../../context/ThemeProvider";
import Notifications from "../Drawers/Notifications";
import FriendRequests from "../Drawers/FriendRequests";
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

    const [open, setOpen] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selection = (val) => {
        if (val === 0 || val === 4 || val === 5) {
            setSelectedIndex(val);
            setOpen(false);
            return;
        }
        if (val >= 0) {
            setSelectedIndex(val);
            setOpen(true);
        }
        if (val === 6) return toggleColorMode();
        if (val === 7) return logoutHandler();
    };

    const logoutHandler = async () => {
        console.log("logging out");
        // window.open(`http://localhost:8000/auth/logout`, "_self");
    };

    return (
        <>
            {/* {selectedIndex === 4 && <Notifications close={() => setSelectedIndex(0)}/>} */}
            {/* {selectedIndex === 5 && <FriendRequests close={() => setSelectedIndex(0)}/>} */}
            <StickyContainer>
                <StyledList component="nav">
                    <StyledListItem selected={selectedIndex === -1} onClick={() => selection(-1)}>
                        <ListItemIcon>
                            <Avatar src={user?.photo} />
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody" sx={{ color: "text.primary" }}>
                                {user.name}
                            </Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 0} onClick={() => selection(0)}>
                        <ListItemIcon>
                            <HomeRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Home</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 1} onClick={() => selection(1)}>
                        <ListItemIcon>
                            <SearchRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Search</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 2} onClick={() => selection(2)}>
                        <ListItemIcon>
                            <HistoryRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Your Activity</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 3} onClick={() => selection(3)}>
                        <ListItemIcon>
                            <BookmarkBorderRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Saved</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 4} onClick={() => selection(4)}>
                        <ListItemIcon>
                            <StyledBadge color="error" badgeContent={5} max={999}>
                                <NotificationsNoneRounded sx={{ fontSize: 30 }} />
                            </StyledBadge>
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Notifications</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 5} onClick={() => selection(5)}>
                        <ListItemIcon>
                            <StyledBadge color="error" badgeContent={5} max={999}>
                                <PeopleOutlineOutlined sx={{ fontSize: 30 }} />
                            </StyledBadge>
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Friend Requests</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 6} onClick={() => selection(6)}>
                        <ListItemIcon>
                            {mode ? <DarkModeRounded sx={{ fontSize: 30 }} /> : <LightModeRounded sx={{ fontSize: 30 }} />}
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Switch Appearance</Typography>
                        </Collapse>
                    </StyledListItem>

                    <StyledListItem selected={selectedIndex === 7} onClick={() => selection(7)}>
                        <ListItemIcon>
                            <LogoutRounded sx={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Typography variant="subBody">Logout</Typography>
                        </Collapse>
                    </StyledListItem>
                </StyledList>
                <DiscoverTags />
            </StickyContainer>
        </>
    );
};

export default Leftbar;
