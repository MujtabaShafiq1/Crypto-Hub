import { Box, Divider, styled } from "@mui/material";
import { Flexbox } from "../../../../styles/global-components";

export const ModalContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "45%",
  left: "50%",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  width: "280px",
  height: "280px",
  backgroundColor: theme.palette.main.primary,
  outline: "none",
  borderRadius: "15px",
  gap: theme.spacing(2),
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    fontSize: 30,
  },
}));

export const ModalItem = styled(Flexbox)(({ theme }) => ({
  justifyContent: "space-between",
  cursor: "pointer",
}));

export const ModalDivider = styled(Flexbox)(({ theme }) => ({
  width: "100%",
  height: "1px",
  opacity: 0.2,
  backgroundColor: theme.palette.text.primary,
}));
