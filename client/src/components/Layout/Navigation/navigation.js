import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import { selectUserState } from "../../../store/auth-slice";

import Search from "../../Drawers/Search/search";
import Notifications from "../../Drawers/Notifications/notifications";
import FriendRequests from "../../Drawers/FriendRequests/friend-requests";

import NavigationModal from "./Modal/navigation-modal";

import * as Styled from "./navigation-components";
import * as MStyled from "../../../styles/global-components";

import {
  MoreVert,
  MenuRounded,
  HomeRounded,
  SearchRounded,
  CurrencyBitcoin,
  NotificationsRounded,
  PersonAddAlt1Rounded,
} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const Navigation = () => {
  const [selectedVal, setSelectedVal] = useState("home");

  const router = useRouter();
  const user = useSelector(selectUserState);

  const smRender = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const actionItems = ["more"];
  const drawerItems = ["search", "notifications", "requests"];

  const navListItems = [
    { id: "home", text: "Home", icon: <HomeRounded />, hide: true },
    { id: "crypto", text: "Crypto", icon: <CurrencyBitcoin />, hide: true },
    { id: drawerItems[0], text: "Search", icon: <SearchRounded /> },
    { id: drawerItems[1], text: "Notifications", icon: <NotificationsRounded /> },
    { id: drawerItems[2], text: "Friend Requests", icon: <PersonAddAlt1Rounded /> },
    { id: actionItems[0], text: "More", icon: smRender ? <MoreVert /> : <MenuRounded />, hide: true },
  ];

  const resetSelect = () => {
    setSelectedVal("home");
  };

  const isShrinked = () => {
    return drawerItems.includes(selectedVal);
  };

  const selection = (val) => {
    setSelectedVal(val);
  };

  return (
    <>
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
      {actionItems[0].includes(selectedVal) && <NavigationModal reset={resetSelect} />}
      {smRender && (
        <Styled.BottomContainer>
          {navListItems.map(
            (item) =>
              item.hide && (
                <Styled.BottomIcon active={+(selectedVal === item.id)} key={item.id} onClick={() => selection(item.id)}>
                  {item.icon}
                </Styled.BottomIcon>
              )
          )}
        </Styled.BottomContainer>
      )}
    </>
  );
};

export default Navigation;
