import {  ListItemButton, styled } from "@mui/material";

const StyledListButton = styled(ListItemButton)(({ theme }) => ({
    padding: "8px",
    "&:hover": {
        opacity: 1,
        borderRadius: "30px",
        cursor: "pointer",
    },
}));

export { StyledListButton };
