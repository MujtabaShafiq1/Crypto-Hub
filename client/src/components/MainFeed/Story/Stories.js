import { useState, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { friendsStatusData as data } from "../../../utils/mockData";
import { StoriesContainer, StoryContainer } from "../../../misc/MUIComponents";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ViewStory from "./ViewStory";

// CSS styles
const styles = {
    leftIcon: {
        position: "sticky",
        left: 0,
        top: "50%",
        transform: "translateY(-50%) rotate(90deg)",
        fontSize: 35,
        zIndex: 1,
        cursor: "pointer",
    },
    rightIcon: {
        position: "sticky",
        right: 10,
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        fontSize: 35,
        zIndex: 1,
        cursor: "pointer",
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
    const [viewStory, setViewStory] = useState(null);

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
            {viewStory && <ViewStory index={viewStory} close={() => setViewStory(null)} />}
            <StoriesContainer ref={scrollRef}>
                {/* <Box sx={{ height: "100%", width: "100%", backgroundColor: "gray" }}/> */}
                <ExpandCircleDownIcon onClick={handleScrollLeft} sx={styles.leftIcon} />
                {data.map((story, index) => (
                    <StoryContainer
                        key={Math.random()}
                        sx={{ background: `url(${story.photo}) no-repeat center fixed` }}
                        onClick={() => setViewStory(index)}>
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
