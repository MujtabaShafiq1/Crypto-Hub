import { Button } from "@mui/material";
import { Flexbox, ListHeader, TagsContainer, DiscoverTagsContainer } from "../../misc/MUIComponents";
import { formatNumber } from "../../utils/formatNumber";
import { tagsData as data } from "../../utils/mockData";

const DiscoverTags = ({ hide }) => {
    return (
        <DiscoverTagsContainer hide={+(hide)}>
            <Flexbox sx={{ justifyContent: "flex-start", pl: "10px" }}>
                <ListHeader variant="body">Discover Tags</ListHeader>
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
