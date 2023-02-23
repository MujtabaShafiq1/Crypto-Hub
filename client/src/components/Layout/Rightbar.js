import { StickyContainer } from "../../misc/MUIComponents";
import FriendsRecentActivity from "../FriendsActivity/FriendsRecentActivity";
import FriendsStatus from "../FriendsActivity/FriendsStatus";

const Rightbar = () => {
    return (
        <StickyContainer sx={{ flexDirection: "column", display: { xs: "none", lg: "flex" }, width: { lg: "35%" } }}>
            <FriendsRecentActivity />
            <FriendsStatus />
        </StickyContainer>
    );
};

export default Rightbar;
