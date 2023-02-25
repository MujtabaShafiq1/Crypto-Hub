import { Typography, styled } from "@mui/material";

const LongTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}));

export { LongTypography };
