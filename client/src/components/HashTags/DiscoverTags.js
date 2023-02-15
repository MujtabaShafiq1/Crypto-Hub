import { Typography } from "@mui/material";
import { Flexbox } from "../../misc/MUIComponents";

const DiscoverTags = () => {
    const data = [
        { name: "Youtube", number: 1000000000 },
        { name: "CSS", number: 500000 },
        { name: "React", number: 10000 },
        { name: "Trending", number: 8000 },
        { name: "Pewdiepie", number: 2000 },
        { name: "Javascript", number: 1000 },
        { name: "Gaming", number: 500 },
        { name: "Chess", number: 350 },
        { name: "Party", number: 10 },
        { name: "Youtube", number: 1000000000 },
        { name: "CSS", number: 500000 },
        { name: "React", number: 10000 },
        { name: "Trending", number: 8000 },
        { name: "Pewdiepie", number: 2000 },
        { name: "Javascript", number: 1000 },
        { name: "Gaming", number: 500 },
        { name: "Chess", number: 350 },
        { name: "Party", number: 10 },
    ];

    return (
        <>
            <Flexbox sx={{ flexDirection: "column" }}>
                <Typography variant="body" sx={{ textAlign: "center" }}>
                    Discover Tags
                </Typography>
            </Flexbox>
            {/* {data.map((item) => console.log(item))} */}
        </>
    );
};

export default DiscoverTags;
