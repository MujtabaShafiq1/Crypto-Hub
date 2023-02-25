import {  Typography, styled } from "@mui/material";

const ListHeader = styled(Typography)(({ theme }) => ({
    margin: "4%",
    color: theme.palette.text.primary,
    fontWeight: "500",
}));

export { ListHeader };
