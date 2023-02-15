import { StickyContainer } from "../../misc/MUIComponents";
import FriendsActivity from "../FriendsActivity/FriendsActivity";
import FriendsStatus from "../FriendsActivity/FriendsStatus";


const Rightbar = () => {
    return (
        <StickyContainer sx={{ display: "flex", flexDirection: "column" }}>
            <FriendsActivity />
            <FriendsStatus />
        </StickyContainer>
    );
};

export default Rightbar;
