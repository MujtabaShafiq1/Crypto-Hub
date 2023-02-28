import { Button } from "@mui/material";
import { Flexbox, ListHeader, TagsContainer, DiscoverTagsContainer } from "../UI";
import { formatNumber } from "../../utils/formatNumber";
import { tagsData as data } from "../../utils/mockData";

const DiscoverTags = ({ hide }) => {
    return (
        <DiscoverTagsContainer hide={+hide}>
            <Flexbox sx={{ justifyContent: "flex-start", pl: "10px" }}>
                <ListHeader>Discover Tags</ListHeader>
            </Flexbox>
            <TagsContainer>
                {data.map((item) => (
                    <Button key={Math.random()}>
                        #{item.name} {formatNumber(item.number)}
                    </Button>
                ))}
            </TagsContainer>
        </DiscoverTagsContainer>
    );
};

export default DiscoverTags;
