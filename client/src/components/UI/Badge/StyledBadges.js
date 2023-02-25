import { Badge, styled } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 4,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        fontSize: "11px",
    },
}));

const StyledStatusBadge = styled(Badge)(({ show }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: show ? "#44b700" : "gray",
        color: "#44b700",
    },
}));

export { StyledBadge, StyledStatusBadge };
