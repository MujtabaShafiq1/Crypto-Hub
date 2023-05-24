import { useState, useContext } from "react";

// Components
import { ThemeContext } from "../../../../context/theme-provider";

import * as Styled from "./navigation-modal-components";
import * as MStyled from "../../../../styles/global-components";

import { BookmarkRounded, HistoryRounded, LogoutRounded, DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";

const NavigationModal = ({ reset }) => {
  const [show, setShow] = useState(true);
  const { mode, toggleColorMode } = useContext(ThemeContext);

  const logoutHandler = async () => {
    // window.open(`http://localhost:8000/auth/logout`, "_self");
    console.log("loggin out");
  };

  const moreItems = [
    { text: "Activity", icon: <HistoryRounded />, action: toggleColorMode },
    { text: "Saved", icon: <BookmarkRounded />, action: toggleColorMode },
    {
      text: "Switch Theme",
      icon: mode === "light" ? <DarkModeRounded /> : <LightModeRounded />,
      action: toggleColorMode,
    },
    { text: "Logout", icon: <LogoutRounded />, action: logoutHandler },
  ];

  const hide = () => {
    reset();
    setShow((prev) => !prev);
  };

  return (
    <Modal open={show} onClose={hide}>
      <Styled.ModalContainer>
        {moreItems.map((item) => {
          return (
            <>
              <Styled.ModalItem onClick={item?.action}>
                <MStyled.ResponsiveText variant="mainBody">{item.text}</MStyled.ResponsiveText>
                {item.icon}
              </Styled.ModalItem>
              <Styled.ModalDivider />
            </>
          );
        })}
      </Styled.ModalContainer>
    </Modal>
  );
};

export default NavigationModal;
