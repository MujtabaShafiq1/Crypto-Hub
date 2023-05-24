import { List, ListItemButton, ListItemIcon, styled } from "@mui/material";
import { CenterText, LongText } from "../../../styles/global-components";

export const ListHeader = styled(CenterText)(({ theme }) => ({
  margin: "auto",
  width: "100%",
  color: "orange",
}));

export const FriendsList = styled(List)(({ theme }) => ({
  overflow: "auto",
  borderRadius: "5px",
  margin: "auto",
  height: "80%",
  width: "100%",
}));

export const ListButton = styled(ListItemButton)(({ hide, theme }) => ({
  padding: "0.65rem 0.3rem",
  marginBottom: theme.spacing(1.2),
  gap: theme.spacing(1),
  justifyContent: hide && "center",
  "&:hover": {
    opacity: 1,
    cursor: "pointer",
  },
}));

export const ListIcon = styled(ListItemIcon)(({ theme }) => ({
  justifyContent: "center",
}));

export const ListText = styled(LongText)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
