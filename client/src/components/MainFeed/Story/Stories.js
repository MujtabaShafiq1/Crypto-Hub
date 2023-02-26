import { useState, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { storiesData as data } from "../../../utils/mockData";
import { StoriesContainer, StoryContainer, StoryLeftIcon, StoryRightIcon } from "../../UI";
import ViewStory from "./ViewStory";

// CSS styles
const styles = {
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
    const [viewStory, setViewStory] = useState(-1);

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
            {viewStory >= 0 && <ViewStory index={viewStory} close={() => setViewStory(-1)} />}
            <StoriesContainer ref={scrollRef}>
                {/* <Box sx={{ height: "100%", width: "100%", backgroundColor: "gray" }}/> */}
                <StoryLeftIcon onClick={handleScrollLeft} sx={styles.leftIcon} />
                {data.map((story, index) => (
                    <StoryContainer key={Math.random()} onClick={() => setViewStory(index)}>
                        <Box
                            component="img"
                            src={story.story}
                            sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
                        />
                        <Box sx={styles.details}>
                            <Avatar src={story.photo} />
                            <Typography variant="helper">{story.name}</Typography>
                        </Box>
                    </StoryContainer>
                ))}
                <StoryRightIcon onClick={handleScrollRight} sx={styles.rightIcon} />
            </StoriesContainer>
        </>
    );
};

export default Stories;
