import { Box } from "@mui/material";
import { CollapseContainer } from "../../misc/MUIComponents";

const Notifications = ({ open, close }) => {
    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <Box color="text.primary">This is a container</Box>
        </CollapseContainer>
    );
};

export default Notifications;
