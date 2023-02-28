import background from "../../../assets/background.jpg";
import { Grid, styled } from "@mui/material";

const MainContainer = styled(Grid)({
    display: "flex",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "0% 65%",
    height: "100vh",
    width: "100vw",
});

export { MainContainer };
