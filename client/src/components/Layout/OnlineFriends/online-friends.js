import { useRouter } from "next/router";

// Components
import { friendsStatusData as data } from "../../../utils/mock-data";

import * as Styled from "./online-friends-components";
import * as MStyled from "../../../styles/global-components";

const OnlineFriends = () => {
  const router = useRouter();

  console.log("loading");

  return (
    <Styled.FriendsList>
      <Styled.ListHeader variant="subHeader">Online Friends</Styled.ListHeader>
      {data.map((user) => {
        return (
          <Styled.ListButton key={Math.random()}>
            <Styled.ListIcon>
              <MStyled.StatusBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                show={+user.status}>
                <MStyled.UserAvatar src={user?.photo} />
              </MStyled.StatusBadge>
            </Styled.ListIcon>
            <Styled.ListText variant="mainBody">{user.name}</Styled.ListText>
          </Styled.ListButton>
        );
      })}
    </Styled.FriendsList>
  );
};

export default OnlineFriends;
