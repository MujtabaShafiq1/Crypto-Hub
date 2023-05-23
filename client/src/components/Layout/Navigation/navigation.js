import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";

// Components
import { selectUserState } from "../../../store/auth-slice";
import { ThemeContext } from "../../../context/theme-provider";
// import DiscoverTags from "../HashTags/DiscoverTags";
// import Notifications from "../Drawers/Notifications";
// import FriendRequests from "../Drawers/FriendRequests";
// import Search from "../Drawers/Search";

import * as Styled from "./navigation-components";
import * as MStyled from "../../../styles/global-components";

import {
  HomeRounded,
  SearchRounded,
  CurrencyBitcoin,
  BookmarkRounded,
  NotificationsRounded,
  PersonAddAlt1Rounded,
  LogoutRounded,
  DarkModeRounded,
  LightModeRounded,
} from "@mui/icons-material";

const Navigation = () => {
  const router = useRouter();
  const user = useSelector(selectUserState);
  const { mode, toggleColorMode } = useContext(ThemeContext);

  const [selectedVal, setSelectedVal] = useState("home");

  const drawerItems = ["search", "notifications", "requests"];
  const actionItems = ["theme", "logout"]

  const selection = (val) => {
    setSelectedVal(val);
    if (actionItems[0].includes(val)) return toggleColorMode();
    if (actionItems[1].includes(val)) return logoutHandler();
  };

  const logoutHandler = async () => {
    // window.open(`http://localhost:8000/auth/logout`, "_self");
  };

  const navListItems = [
    { id: "home", text: "Home", icon: <HomeRounded /> },
    { id: drawerItems[0], text: "Search", icon: <SearchRounded /> },
    { id: "crypto", text: "Crypto", icon: <CurrencyBitcoin /> },
    { id: "saved", text: "Saved", icon: <BookmarkRounded /> },
    { id: drawerItems[1], text: "Notifications", icon: <NotificationsRounded /> },
    { id: drawerItems[2], text: "Friend Requests", icon: <PersonAddAlt1Rounded /> },
    { id: actionItems[0], text: "Switch Theme", icon: mode === "light" ? <DarkModeRounded /> : <LightModeRounded /> },
    { id: actionItems[1], text: "Logout", icon: <LogoutRounded /> },
  ];

  const isShrinked = () => {
    return drawerItems.includes(selectedVal);
  };

  return (
    <Styled.Container>
      <Styled.CollapseContainer open={isShrinked()} duration={500} collapsedSize={"60px"}>
        <MStyled.LogoContainer>
          <MStyled.Logo />
          <MStyled.LogoText hide={isShrinked()}>Crypto Hub</MStyled.LogoText>
        </MStyled.LogoContainer>

        <Styled.NavList component="nav">
          {navListItems.map((item) => {
            return (
              <Styled.ListButton
                hide={isShrinked()}
                key={item.id}
                selected={selectedVal.includes(item.id)}
                onClick={() => selection(item.id)}>
                <Styled.ListIcon>{item.icon}</Styled.ListIcon>
                <Styled.ListText hide={isShrinked()}>{item.text}</Styled.ListText>
              </Styled.ListButton>
            );
          })}
        </Styled.NavList>
      </Styled.CollapseContainer>
    </Styled.Container>
  );
};

export default Navigation;
