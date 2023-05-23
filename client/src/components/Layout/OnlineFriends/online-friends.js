import { useRouter } from "next/router";

// Components
import { friendsStatusData as data } from "../../../utils/mock-data";

import * as Styled from "./online-friends-components";
import * as MStyled from "../../../styles/global-components";

const OnlineFriends = () => {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.NavList component="nav">
        {data.map((user) => {
          return (
            <Styled.ListButton key={user.id}>
              <Styled.ListIcon>
                <MStyled.StatusBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                  show={+user.status}>
                  <Styled.UserAvatar src={user?.photo} />
                </MStyled.StatusBadge>
              </Styled.ListIcon>
              <Styled.ListText>{user.name}</Styled.ListText>
            </Styled.ListButton>
          );
        })}
      </Styled.NavList>
    </Styled.Container>
  );
};

export default OnlineFriends;
