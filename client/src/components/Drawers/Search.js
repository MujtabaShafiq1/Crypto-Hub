import { useState } from "react";
import { Box, Avatar, Divider, IconButton, ListItem, ListItemAvatar, InputAdornment } from "@mui/material";
import { Flexbox, CollapseContainer, StyledField, StyledList, ListHeader, StyledListButton, LongTypography } from "../UI";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
            <Flexbox sx={{ justifyContent: "flex-start", pl: "10px" }}>
                <ArrowBackIcon sx={{ color: "text.primary", cursor: "pointer" }} onClick={close} />
                <ListHeader>Search</ListHeader>
            </Flexbox>
            <Divider variant="middle" sx={{ width: "90%", opacity: 0.2, backgroundColor: "text.primary" }} />

            <Flexbox sx={{ m: "3% 0%" }}>
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
                        width: "90%",
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
            </Flexbox>

            <StyledList sx={{ height: "85vh" }}>
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
                                <LongTypography variant="subBody">
                                    {activity.name}
                                </LongTypography>
                            </StyledListButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </StyledList>
        </CollapseContainer>
    );
};

export default Search;
