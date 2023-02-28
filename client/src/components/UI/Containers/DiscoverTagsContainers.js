import { Box, styled } from "@mui/material";

const DiscoverTagsContainer = styled(Box)(({ hide, theme }) => ({
    height: "50%",
    overflow: "hidden",
    display: hide && "none",
    borderRadius: "5px 30px 30px 5px",
    backgroundColor: theme.palette.primary.secondary,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const TagsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "left",
    gap: theme.spacing(1.5),
    padding: theme.spacing(1),
    overflow: "auto",
    height: "85%",
    "& Button": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderRadius: "50px",
        opacity: 0.8,
    },
}));

export { DiscoverTagsContainer, TagsContainer };
