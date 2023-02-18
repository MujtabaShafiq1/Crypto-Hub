import { SwipeableDrawer, Box } from "@mui/material";
import { Collapse, styled } from "@mui/material";

const CollapseContainer = styled(Collapse)(({ theme }) => ({
    top: 0,
    height: "100vh",
    position: "absolute",
    "& .MuiCollapse-wrapperInner": {
        width: "400px",
        borderRight: "1.5px solid gray",
        borderRadius: "0px 10px 10px 0px",
        backgroundColor: theme.palette.primary.main,
    },
}));

const Search = ({ open, close }) => {
    return (
        <>
            <CollapseContainer orientation="horizontal" in={open} timeout="auto" onClick={close}>
                <Box color="text.primary">This is a container</Box>
            </CollapseContainer>
        </>
    );
};

export default Search;
