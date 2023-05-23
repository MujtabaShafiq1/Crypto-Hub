// Components
import Navigation from "./Navigation/navigation";
import OnlineFriends from "./OnlineFriends/online-friends";

import * as Styled from "./layout-components";

const Layout = ({ children }) => {
  return (
    <Styled.LayoutContainer>
      <Navigation />
      {children}
      <OnlineFriends />
    </Styled.LayoutContainer>
  );
};

export default Layout;
