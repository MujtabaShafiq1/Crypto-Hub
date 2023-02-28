import { useContext } from "react";
import { Modal, Divider } from "@mui/material";
import { Flexbox, ModalContainer, BodyText } from "../UI";
import { ThemeContext } from "../../context/ThemeProvider";
import { HistoryRounded, BookmarkRounded, DarkModeRounded, LightModeRounded, LogoutRounded } from "@mui/icons-material";

const NavModal = ({ show, handleClose }) => {
    const { mode, toggleColorMode } = useContext(ThemeContext);

    const logoutHandler = async () => {
        // window.open(`http://localhost:8000/auth/logout`, "_self");
    };

    return (
        <Modal open={show} onClose={handleClose}>
            <ModalContainer>
                <Flexbox sx={{ justifyContent: "space-between" }} onClick={toggleColorMode}>
                    <BodyText>Your Acitivity</BodyText>
                    <HistoryRounded />
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />

                <Flexbox sx={{ justifyContent: "space-between" }} onClick={toggleColorMode}>
                    <BodyText>Saved</BodyText>
                    <BookmarkRounded />
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />

                <Flexbox sx={{ justifyContent: "space-between" }} onClick={toggleColorMode}>
                    <BodyText>Switch Theme</BodyText>
                    {mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />

                <Flexbox sx={{ justifyContent: "space-between" }} onClick={logoutHandler}>
                    <BodyText>Logout</BodyText>
                    <LogoutRounded />
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />
            </ModalContainer>
        </Modal>
    );
};

export default NavModal;
