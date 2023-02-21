import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, ListItemAvatar, ListItem } from "@mui/material";
import { LongTypography, LeftbarContainer, StyledBadge, StyledNavList, StyledListButton } from "../../misc/MUIComponents";
import { ThemeContext } from "../../context/ThemeProvider";
import CustomCollapseTransition from "../UI/CustomCollapseTransition";
import Notifications from "../Drawers/Notifications";
import FriendRequests from "../Drawers/FriendRequests";
import Search from "../Drawers/Search";
import DiscoverTags from "../HashTags/DiscoverTags";

import {
    HomeRounded,
    SearchRounded,
    HistoryRounded,
    BookmarkRounded,
    PersonAddAlt1Rounded,
    NotificationsRounded,
    DarkModeRounded,
    LightModeRounded,
    LogoutRounded,
} from "@mui/icons-material";

const Leftbar = () => {
    const user = useSelector((state) => state.auth.user);
    const { mode, toggleColorMode } = useContext(ThemeContext);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const selection = (val) => {
        setSelectedIndex(val);
        if (val === 6) return toggleColorMode();
        if (val === 7) return logoutHandler();
    };

    const logoutHandler = async () => {
        // window.open(`http://localhost:8000/auth/logout`, "_self");
    };

    return (
        <LeftbarContainer>
            <CustomCollapseTransition in={![1, 4, 5].includes(selectedIndex)} duration={500}>
                <StyledNavList component="nav"> 
                    <StyledListButton>
                        <ListItemAvatar>
                            <Avatar src={user?.photo} />
                        </ListItemAvatar>
                        <LongTypography variant="subBody">{user.name}</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 0} onClick={() => selection(0)}>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Home</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 1} onClick={() => selection(1)}>
                        <ListItemAvatar>
                            <Avatar>
                                <SearchRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Search</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 2} onClick={() => selection(2)}>
                        <ListItemAvatar>
                            <Avatar>
                                <HistoryRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Your Activity</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 3} onClick={() => selection(3)}>
                        <ListItemAvatar>
                            <Avatar>
                                <BookmarkRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Saved</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 4} onClick={() => selection(4)}>
                        <ListItemAvatar>
                            <Avatar>
                                <StyledBadge color="error" badgeContent={5} max={999}>
                                    <NotificationsRounded />
                                </StyledBadge>
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Notifications</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 5} onClick={() => selection(5)}>
                        <ListItemAvatar>
                            <Avatar>
                                <StyledBadge color="error" badgeContent={5} max={999}>
                                    <PersonAddAlt1Rounded />
                                </StyledBadge>
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Friend Requests</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 6} onClick={() => selection(6)}>
                        <ListItemAvatar>
                            <Avatar>{mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}</Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Switch Theme</LongTypography>
                    </StyledListButton>

                    <StyledListButton selected={selectedIndex === 7} onClick={() => selection(7)}>
                        <ListItemAvatar>
                            <Avatar>
                                <LogoutRounded />
                            </Avatar>
                        </ListItemAvatar>
                        <LongTypography variant="subBody">Logout</LongTypography>
                    </StyledListButton>
                </StyledNavList>
                <DiscoverTags hide={[1, 4, 5].includes(selectedIndex)}/>
            </CustomCollapseTransition>
            <Box sx={{ position: "relative" }}>
                <Search open={selectedIndex === 1} close={() => setSelectedIndex(0)} />
                <Notifications open={selectedIndex === 4} close={() => setSelectedIndex(0)} />
                <FriendRequests open={selectedIndex === 5} close={() => setSelectedIndex(0)} />
            </Box>
        </LeftbarContainer>
    );
};

export default Leftbar;
