import { useState } from "react";
import { Box, Avatar, Divider, IconButton, ListItem, ListItemAvatar, InputAdornment } from "@mui/material";
import {
    Flexbox,
    CollapseContainer,
    StyledField,
    StyledList,
    ListHeader,
    StyledListButton,
    LongTypography,
} from "../../misc/MUIComponents";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";

import { searchData as data } from "../../utils/mockData";

const Search = ({ open, close }) => {
    const [searchText, setSearchText] = useState("");

    const searchHandler = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <CollapseContainer orientation="horizontal" in={open} timeout={500}>
            <CollapseContainer orientation="horizontal" in={open} timeout={500}>
                <Flexbox sx={{ flexDirection: "column", gap: 1 }}>
                    <ListHeader variant="body">Search</ListHeader>
                    <StyledField
                        variant="outlined"
                        placeholder="Search"
                        name="search"
                        type="text"
                        size="small"
                        hiddenLabel
                        value={searchText}
                        onChange={searchHandler}
                        sx={{
                            width: "95%",
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                        }}
                        InputProps={{
                            sx: { borderRadius: "50px" },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
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
