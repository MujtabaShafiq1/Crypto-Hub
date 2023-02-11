import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Typography, Box, Toolbar, Avatar } from "@mui/material";
import { StyledButton, StyledLink, Flexbox } from "../../misc/MUIComponents";
import MenuIcon from "../../assets/menu.png";

const styles = {
    activeNav: {
        textDecoration: "none",
        backgroundColor: "#293140",
        borderRadius: "8px",
    },
    default: {
        textDecoration: "none",
    },
};

const Navigation = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const status = useSelector((state) => state.auth.status);

    const logoutHandler = async () => {
        window.open(`http://localhost:8000/auth/logout`, "_self");
    };

    return (
        <AppBar position="sticky" sx={{ flexGrow: 1 }}>
            <Toolbar sx={{ backgroundColor: "rgb(25,28,32)", display: "flex", justifyContent: "space-between", padding: "10px" }}>
                <NavLink to="/" style={styles.default}>
                    <Typography sx={{ fontSize: "24px" }}>Social Media</Typography>
                </NavLink>

                <Flexbox sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "space-between", gap: 2 }}>
                    <NavLink to="/" style={({ isActive }) => (isActive ? styles.activeNav : styles.default)}>
                        <StyledLink>Home</StyledLink>
                    </NavLink>

                    {status && (
                        <NavLink to="/profile" style={({ isActive }) => (isActive ? styles.activeNav : styles.default)}>
                            <StyledLink>Profile</StyledLink>
                        </NavLink>
                    )}

                    <NavLink to="/faq" style={({ isActive }) => (isActive ? styles.activeNav : styles.default)}>
                        <StyledLink>Friends</StyledLink>
                    </NavLink>

                    <NavLink to="/contact" style={({ isActive }) => (isActive ? styles.activeNav : styles.default)}>
                        <StyledLink>Chats</StyledLink>
                    </NavLink>
                </Flexbox>

                <Flexbox gap={2}>
                    {status ? (
                        <>
                            <Avatar
                                src={user.img}
                                onClick={() => navigate(`/user/${user.userId}`)}
                                sx={{
                                    border: "7px solid #20252e",
                                    "&:hover": {
                                        cursor: "pointer",
                                        transform: "scale(1.2,1.2)",
                                        transition: "0.5s transform",
                                    },
                                }}
                            />
                            <Flexbox flexDirection="column">
                                <Typography fontSize="18px">{user.name}</Typography>
                                <Typography
                                    fontSize="14px"
                                    onClick={logoutHandler}
                                    color="primary"
                                    sx={{ "&:hover": { cursor: "pointer" } }}>
                                    logout
                                </Typography>
                            </Flexbox>
                        </>
                    ) : (
                        <StyledButton onClick={() => navigate("/login")}>Login Now</StyledButton>
                    )}
                    <Box sx={{ display: { xs: "flex", lg: "none" }, paddingRight: "10px" }}>
                        <Box component="img" src={MenuIcon} width={50} />
                    </Box>
                </Flexbox>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
