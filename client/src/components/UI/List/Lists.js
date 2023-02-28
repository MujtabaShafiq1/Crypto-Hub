import { List, styled } from "@mui/material";

const StyledList = styled(List)(({ theme }) => ({
    overflow: "auto",
    height: "100%",
    "& .MuiTypography-root": {
        fontWeight: 400,
        color: theme.palette.text.primary,
    },
    "&& .Mui-selected": {
        "& .MuiTypography-root": {
            color: "gray",
            fontWeight: 300,
        },
    },
}));

const StyledNavList = styled(List)(({ theme }) => ({
    borderRadius: "5px 30px 30px 5px",
    backgroundColor: theme.palette.primary.secondary,
    "&& .Mui-selected": {
        fontWeight: 700,
        borderLeft: "3px solid purple",
        borderRadius: 0,
        "& .MuiSvgIcon-root": {
            color: "purple",
        },
    },
    "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
        fontSize: 30,
        "&:hover": {
            animation: "bounce 500ms",
            "@keyframes bounce": {
                "0%": {
                    transform: "translateY(0)",
                },
                "25%": {
                    transform: "translateY(-3px)",
                },
                "50%": {
                    transform: "translateY(0px)",
                },
                "75%": {
                    transform: "translateY(-3px)",
                },
                "100%": {
                    transform: "translateY(0)",
                },
            },
        },
    },
    "& .MuiAvatar-root": {
        backgroundColor: "transparent",
    },
}));

export { StyledList, StyledNavList };
