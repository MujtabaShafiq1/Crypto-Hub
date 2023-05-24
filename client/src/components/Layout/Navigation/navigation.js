import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";

// Components
import { selectUserState } from "../../../store/auth-slice";
import { ThemeContext } from "../../../context/theme-provider";

import Search from "../../Drawers/Search/search";
import Notifications from "../../Drawers/Notifications/notifications";
import FriendRequests from "../../Drawers/FriendRequests/friend-requests";

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
import { Box } from "@mui/material";

const Navigation = () => {
  const router = useRouter();
  const user = useSelector(selectUserState);
  const { mode, toggleColorMode } = useContext(ThemeContext);

  const [selectedVal, setSelectedVal] = useState("home");

  const drawerItems = ["search", "notifications", "requests"];
  const actionItems = ["theme", "logout"];

  const selection = (val) => {
    setSelectedVal(val);
    if (actionItems[0].includes(val)) return toggleColorMode();
    if (actionItems[1].includes(val)) return logoutHandler();
  };

  const resetSelect = () => {
    setSelectedVal("home");
  };

  const logoutHandler = async () => {
    // window.open(`http://localhost:8000/auth/logout`, "_self");
  };

  const navListItems = [
    { id: "home", text: "Home", icon: <HomeRounded /> },
    { id: "crypto", text: "Crypto", icon: <CurrencyBitcoin /> },
    { id: drawerItems[0], text: "Search", icon: <SearchRounded /> },
    { id: "saved", text: "Saved", icon: <BookmarkRounded />, hide: true },
    { id: drawerItems[1], text: "Notifications", icon: <NotificationsRounded /> },
    { id: drawerItems[2], text: "Friend Requests", icon: <PersonAddAlt1Rounded /> },
    {
      id: actionItems[0],
      text: "Switch Theme",
      icon: mode === "light" ? <DarkModeRounded /> : <LightModeRounded />,
      hide: true,
    },
    { id: actionItems[1], text: "Logout", icon: <LogoutRounded />, hide: true },
  ];

  const isShrinked = () => {
    return drawerItems.includes(selectedVal);
  };

  return (
    <Styled.Container>
      <Styled.CollapseContainer open={+isShrinked()} duration={500} collapsedsize="60px">
        <MStyled.LogoContainer>
          <MStyled.Logo />
          <MStyled.LogoText hide={+isShrinked()}>Crypto Hub</MStyled.LogoText>
        </MStyled.LogoContainer>

        <Styled.NavList component="nav">
          {navListItems.map((item) => {
            return (
              <Styled.ListButton
                hide={item?.hide?.toString()}
                collapse={+isShrinked()}
                key={item.id}
                selected={selectedVal.includes(item.id)}
                onClick={() => selection(item.id)}>
                <Styled.ListIcon>{item.icon}</Styled.ListIcon>
                <Styled.ListText variant="mainBody" hide={+isShrinked()}>
                  {item.text}
                </Styled.ListText>
              </Styled.ListButton>
            );
          })}
        </Styled.NavList>
      </Styled.CollapseContainer>
      <Styled.DrawerContainer>
        {<Search open={selectedVal === drawerItems[0]} close={resetSelect} />}
        {<Notifications open={selectedVal === drawerItems[1]} close={resetSelect} />}
        {<FriendRequests open={selectedVal === drawerItems[2]} close={resetSelect} />}
      </Styled.DrawerContainer>
    </Styled.Container>
  );
};

export default Navigation;
