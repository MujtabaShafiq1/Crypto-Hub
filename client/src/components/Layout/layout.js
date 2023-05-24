// Components
import Navigation from "./Navigation/navigation";
import OnlineFriends from "./OnlineFriends/online-friends";
import * as Styled from "./layout-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const Layout = ({ children }) => {
  const friendsRender = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Styled.LayoutContainer>
      <Navigation />
      {children}
      {friendsRender && (
        <Styled.FriendsContainer>
            <OnlineFriends />
        </Styled.FriendsContainer>
      )}
    </Styled.LayoutContainer>
  );
};

export default Layout;
