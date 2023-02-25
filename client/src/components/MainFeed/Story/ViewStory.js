import { useState } from "react";
import { StoryImageContainer, StoryLeftIcon, StoryRightIcon, Progressbar, StyledModal } from "../../UI";
import { friendsStatusData as data } from "../../../utils/mockData";

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
    }, 1000);

    return (
        <>
            <StyledModal keepMounted open={true} onClose={close}>
                <>
                    {storyIndex > 0 && <StoryLeftIcon onClick={previousStory} />}
                    <Progressbar />
                    <StoryImageContainer component="img" src={data[storyIndex].photo} />
                    {storyIndex < data.length - 1 && <StoryRightIcon onClick={nextStory} />}
                </>
            </StyledModal>
        </>
    );
};

export default ViewStory;
