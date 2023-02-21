import { useContext } from "react";
import { Modal, Typography, Divider } from "@mui/material";
import { Flexbox, ModalContainer } from "../../misc/MUIComponents";
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
                    <Typography variant="body">Your Acitivity</Typography>
                    <HistoryRounded />
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />

                <Flexbox sx={{ justifyContent: "space-between" }} onClick={toggleColorMode}>
                    <Typography variant="body">Saved</Typography>
                    <BookmarkRounded />
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />

                <Flexbox sx={{ justifyContent: "space-between" }} onClick={toggleColorMode}>
                    <Typography variant="body">Switch Theme</Typography>
                    {mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />

                <Flexbox sx={{ justifyContent: "space-between" }} onClick={logoutHandler}>
                    <Typography variant="body">Logout</Typography>
                    <LogoutRounded />
                </Flexbox>
                <Divider variant="fullWidth" sx={{ opacity: 0.2, backgroundColor: "text.primary" }} />
            </ModalContainer>
        </Modal>
    );
};

export default NavModal;
