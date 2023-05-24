import { useEffect, useState } from "react";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import SearchIcon from "@mui/icons-material/Search";

import { searchData as data } from "../../../utils/mock-data";

import * as Styled from "./search-components";
import * as MStyled from "../../../styles/global-components";

const Search = ({ open, close }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (open) console.log("loading search");
  }, [open]);

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <MStyled.Drawer open={open} duration={open ? 1000 : 500} onClick={close}>
      <h1>Search</h1>
    </MStyled.Drawer>
  );
};

export default Search;
