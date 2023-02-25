import { Box, styled } from "@mui/material";

const HomeContainer = styled(Box)(({ theme }) => ({
    overflow: "auto",
    height: "300vh",
    backgroundColor: "lightblue",
    flex: 5,
    width: "100%",
}));

export { HomeContainer };
