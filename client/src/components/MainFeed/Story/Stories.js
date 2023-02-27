import { useState, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { storiesData as data } from "../../../utils/mockData";
import {
    StoriesContainer,
    StoryAvatarContainer,
    StoryContainer,
    StoryDetails,
    ImageContainer,
    StoryLeftIcon,
    StoryRightIcon,
} from "../../UI";
import ViewStory from "./ViewStory";

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
                <StoryLeftIcon onClick={handleScrollLeft} />
                {data.map((story, index) => (
                    <Box key={Math.random()} onClick={() => setViewStory(index)}>
                        <StoryContainer>
                            <ImageContainer component="img" src={story.story} />
                            <StoryDetails>
                                <Avatar src={story.photo} />
                                <Typography variant="helper" color="white">
                                    {story.name}
                                </Typography>
                            </StoryDetails>
                        </StoryContainer>
                        <StoryAvatarContainer>
                            <Avatar src={story.photo} />
                            <Typography variant="subBody" color="text.primary">
                                {story.name}
                            </Typography>
                        </StoryAvatarContainer>
                    </Box>
                ))}
                <StoryRightIcon onClick={handleScrollRight} />
            </StoriesContainer>
        </>
    );
};

export default Stories;
