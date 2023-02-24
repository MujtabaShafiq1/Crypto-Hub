import { useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { friendsStatusData as data } from "../../../utils/mockData";
import { StoriesContainer, StoryContainer } from "../../../misc/MUIComponents";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

// CSS styles
const styles = {
    leftIcon: {
        position: "sticky",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: 30,
        zIndex: 1,
    },
    rightIcon: {
        position: "sticky",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: 30,
        zIndex: 1,
    },
    details: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        position: "absolute",
        top: "75%",
        left: "5%",
        color: "text.secondary",
        fontWeight: 400,
    },
};

const Stories = () => {
    const scrollRef = useRef();

    const handleScrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -500,
            behavior: "smooth",
        });
    };

    const handleScrollRight = () => {
        scrollRef.current.scrollBy({
            left: 500,
            behavior: "smooth",
        });
    };

    return (
        <>
            <StoriesContainer ref={scrollRef}>
                <ExpandCircleDownIcon onClick={handleScrollLeft} sx={styles.leftIcon} />
                {data.map((story) => (
                    <StoryContainer key={Math.random()} sx={{ background: `url(${story.photo})` }}>
                        <Box sx={styles.details}>
                            <Avatar src={story.photo} />
                            <Typography variant="helper">{story.name}</Typography>
                        </Box>
                    </StoryContainer>
                ))}
                <ExpandCircleDownIcon onClick={handleScrollRight} sx={styles.rightIcon} />
            </StoriesContainer>
        </>
    );
};

export default Stories;
