import { useState } from "react";
import { Box, Avatar, Divider, IconButton, ListItem, ListItemAvatar } from "@mui/material";
import {
    Flexbox,
    StyledField,
    CollapseContainer,
    StyledList,
    ListHeader,
    StyledListButton,
    LongTypography,
} from "../../misc/MUIComponents";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { searchData as data } from "../../utils/mockData";

const Search = ({ open, close }) => {
    const [searchText, setSearchText] = useState("");

    const searchHandler = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <CollapseContainer orientation="horizontal" in={open} timeout={500}>
                <Flexbox sx={{ flexDirection: "column", gap : 1 }}>
                    <ListHeader variant="body">Search</ListHeader>
                    <StyledField
                        variant="outlined"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                        size="small"
                        hiddenLabel
                        value={searchText}
                        onChange={searchHandler}
                        InputProps={{
                            notched: false,
                            sx: { border: "none" },
                        }}
                    />
                    <Divider variant="middle" sx={{ width: "70%", opacity: 0.2, backgroundColor: "text.primary" }} />
                </Flexbox>
                <StyledList sx={{ height: "90vh" }}>
                    {data.map((activity) => (
                        <Box key={Math.random()}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <HighlightOffIcon sx={{ color: "red" }} />
                                    </IconButton>
                                }>
                                <StyledListButton>
                                    <ListItemAvatar>
                                        <Avatar src={activity.photo} />
                                    </ListItemAvatar>
                                    <LongTypography variant="subBody" color="text.primary">
                                        {activity.name}
                                    </LongTypography>
                                </StyledListButton>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Box>
                    ))}
                </StyledList>
            </CollapseContainer>
        </CollapseContainer>
    );
};

export default Search;
