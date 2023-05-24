import { useEffect, useState } from "react";

import * as Styled from "./friend-requests-components";
import * as MStyled from "../../../styles/global-components";

const Notifications = ({ open, close }) => {
  useEffect(() => {
    if (open) console.log("loading friend requests");
  }, [open]);

  return (
    <MStyled.Drawer open={open} duration={open ? 1000 : 500} onClick={close}>
      <h1>Friend Requests</h1>
    </MStyled.Drawer>
  );
};

export default Notifications;
