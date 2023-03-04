import { Box, styled } from "@mui/material";

const ListContainer = styled(Box)(({ hide, theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: "5px",
    backgroundColor: theme.palette.primary.secondary,
    height: "100%",
}));

export { ListContainer };
