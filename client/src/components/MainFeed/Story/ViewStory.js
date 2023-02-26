import { useState } from "react";
import { friendsStatusData as data } from "../../../utils/mockData";
import {
    ImageContainer,
    ViewStoryContainer,
    StoryLeftIcon,
    StoryRightIcon,
    Flexbox,
    Progressbar,
    ProgressContainer,
    StyledModal,
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
                        <ImageContainer component="img" src={data[storyIndex].photo} />
                    </ViewStoryContainer>
                    {storyIndex < data.length - 1 && <StoryRightIcon onClick={nextStory} />}
                </>
            </StyledModal>
        </>
    );
};

export default ViewStory;
