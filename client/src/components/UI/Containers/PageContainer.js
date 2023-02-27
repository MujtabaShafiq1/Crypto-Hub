import { Box, styled } from "@mui/material";

const PageContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    overflow: "auto",
    flex: 5,
}));

export { PageContainer };
