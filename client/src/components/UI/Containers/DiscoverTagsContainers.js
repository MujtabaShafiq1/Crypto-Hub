import { Box, styled } from "@mui/material";

const DiscoverTagsContainer = styled(Box)(({ hide, theme }) => ({
    display: hide && "none",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const TagsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "left",
    gap: theme.spacing(2),
    padding: "10px",
    height: "37vh",
    overflow: "auto",
    "& Button": {
        // backgroundColor: theme.palette.primary.main,
        color: "black",
        borderRadius: "50px",
        backgroundColor: "lightgray",
        opacity: 0.65,
    },
}));

export { DiscoverTagsContainer, TagsContainer };
