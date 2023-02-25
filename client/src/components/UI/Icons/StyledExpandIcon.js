import { styled } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const StoryLeftIcon = styled(ExpandCircleDownIcon)(({ theme }) => ({
    position: "sticky",
    left: 0,
    top: "50%",
    transform: "translateY(-50%) rotate(90deg)",
    fontSize: 35,
    zIndex: 1,
    cursor: "pointer",
}));

const StoryRightIcon = styled(ExpandCircleDownIcon)(({ theme }) => ({
    position: "sticky",
    right: 10,
    top: "50%",
    transform: "translateY(-50%) rotate(-90deg)",
    fontSize: 35,
    zIndex: 1,
    cursor: "pointer",
}));

export { StoryLeftIcon, StoryRightIcon };
