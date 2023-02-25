import { Modal, styled } from "@mui/material";

const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
    width: "100%",
    border: "none",
}));

export { StyledModal };
