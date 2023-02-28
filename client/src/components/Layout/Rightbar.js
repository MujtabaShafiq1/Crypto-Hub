import { RightbarContainer } from "../UI";
import FriendsRecentActivity from "../FriendsActivity/FriendsRecentActivity";
import FriendsStatus from "../FriendsActivity/FriendsStatus";

const Rightbar = () => {
    return (
        <RightbarContainer>
            <FriendsRecentActivity />
            <FriendsStatus />
        </RightbarContainer>
    );
};

export default Rightbar;
