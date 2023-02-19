import { StickyContainer } from "../../misc/MUIComponents";
import FriendsActivity from "../FriendsActivity/FriendsActivity";
import FriendsStatus from "../FriendsActivity/FriendsStatus";

const Rightbar = () => {
    return (
        <StickyContainer sx={{ flexDirection: "column", display: { xs: "none", lg: "flex" }, width: { lg: "35%" }  }}>
            <FriendsActivity />
            <FriendsStatus />
        </StickyContainer>
    );
};

export default Rightbar;
