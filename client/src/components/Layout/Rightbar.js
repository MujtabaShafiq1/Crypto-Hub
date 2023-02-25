import { StickyContainer } from "../UI";
import FriendsRecentActivity from "../FriendsActivity/FriendsRecentActivity";
import FriendsStatus from "../FriendsActivity/FriendsStatus";

const Rightbar = () => {
    return (
        <StickyContainer sx={{ flexDirection: "column", display: { xs: "none", lg: "flex" }, flex: { lg: 1.6 } }}>
            <FriendsRecentActivity />
            <FriendsStatus />
        </StickyContainer>
    );
};

export default Rightbar;
