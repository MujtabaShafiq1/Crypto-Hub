import { useState, useEffect } from "react";
import { Modal, LinearProgress, Box, Typography, Avatar } from "@mui/material";
import { friendsStatusData as data } from "../../../utils/mockData";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const styles = {
    modalContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100%",
        width: "100%",
        border: "none",
    },
    image: {
        width: "30%",
        height: "90%",
        objectFit: "cover",
        borderRadius: "10px",
    },
    leftIcon: {
        left: 0,
        top: "50%",
        transform: "rotate(90deg)",
        fontSize: 50,
        cursor: "pointer",
    },
    rightIcon: {
        right: 0,
        top: "50%",
        transform: "rotate(-90deg)",
        fontSize: 50,
        cursor: "pointer",
    },
};

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
            <Modal keepMounted open={true} onClose={close} sx={styles.modalContainer}>
                <>
                    {storyIndex > 0 && <ExpandCircleDownIcon onClick={previousStory} sx={styles.leftIcon} />}
                    <Box component="img" src={data[storyIndex].photo} sx={styles.image} />
                    {storyIndex < data.length - 1 && <ExpandCircleDownIcon onClick={nextStory} sx={styles.rightIcon} />}
                </>
            </Modal>
        </>
    );
};

export default ViewStory;
