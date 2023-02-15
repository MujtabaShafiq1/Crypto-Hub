import { SwipeableDrawer } from "@mui/material";

const FriendRequests = ({close}) => {
    return (
        <SwipeableDrawer
            open={true}
            onClose={close}
            anchor="left"
            disableSwipeToOpen
            PaperProps={{ sx: { zIndex: 1, width: { xs: "100%", sm: "50%", md: "30%" }, backgroundColor: "primary.light" } }}>
        </SwipeableDrawer>
    );
};

export default FriendRequests;
