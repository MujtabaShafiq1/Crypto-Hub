import { useState } from "react";
import { Avatar } from "@mui/material";
import { storiesData as data } from "../../../utils/mockData";
import {
    ViewStoryContainer,
    ImageContainer,
    ViewStoryDetails,
    StoryLeftIcon,
    StoryRightIcon,
    Flexbox,
    Progressbar,
    ProgressContainer,
    StyledModal,
    SubText,
} from "../../UI";

const ViewStory = ({ index, close }) => {
    const [storyIndex, setStoryIndex] = useState(index);

    const nextStory = () => setStoryIndex((prev) => ++prev);
    const previousStory = () => setStoryIndex((prev) => --prev);

    setTimeout(() => {
        if (storyIndex < data.length - 1) {
            setStoryIndex((prev) => ++prev);
            return;
        }
        close();
    }, 5000);

    return (
        <>
            <StyledModal keepMounted open={true} onClose={close}>
                <>
                    {storyIndex > 0 && <StoryLeftIcon onClick={previousStory} />}

                    <ViewStoryContainer>
                        <Flexbox>
                            <ProgressContainer>
                                <Progressbar key={storyIndex} />
                            </ProgressContainer>
                        </Flexbox>
                        <ViewStoryDetails>
                            <Avatar src={data[storyIndex].photo} />
                            <SubText sx={{ color: "white" }}>{data[storyIndex].name}</SubText>
                        </ViewStoryDetails>
                        <ImageContainer component="img" src={data[storyIndex].story} />
                    </ViewStoryContainer>
                    {storyIndex < data.length - 1 && <StoryRightIcon onClick={nextStory} />}
                </>
            </StyledModal>
        </>
    );
};

export default ViewStory;
