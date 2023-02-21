import { useState } from "react";
import { StyledBottomNavigation, StyledBottomNavigationAction } from "../../misc/MUIComponents";
import { HomeRounded, SearchRounded, PersonAddAlt1Rounded, NotificationsRounded, MoreVert } from "@mui/icons-material";
import NavModal from "./NavModal";
import Notifications from "../Drawers/Notifications";
import FriendRequests from "../Drawers/FriendRequests";
import Search from "../Drawers/Search";

const BottomNavbar = () => {
    const [value, setValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event, newValue) => setValue(newValue);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <Search open={value === "search"} close={() => setValue(0)} />
            <FriendRequests open={value === "request"} close={() => setValue(0)} />
            <Notifications open={value === "notifications"} close={() => setValue(0)} />
            <StyledBottomNavigation value={value} onChange={handleChange}>
                <StyledBottomNavigationAction value="home" icon={<HomeRounded />} />
                <StyledBottomNavigationAction value="search" icon={<SearchRounded />} />
                <StyledBottomNavigationAction value="request" icon={<PersonAddAlt1Rounded />} />
                <StyledBottomNavigationAction value="notifications" icon={<NotificationsRounded />} />
                <StyledBottomNavigationAction value="more" icon={<MoreVert />} onClick={openModal} />
                <NavModal show={showModal} handleClose={closeModal} />
            </StyledBottomNavigation>
        </>
    );
};

export default BottomNavbar;
