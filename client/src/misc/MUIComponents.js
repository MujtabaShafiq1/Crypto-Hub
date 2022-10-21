import { Box, styled } from "@mui/material"

const Flexbox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const SocialButton = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",   // breakpoints add
    padding: "10px",
    borderRadius: "5px",
    color: "white",
    gap: 10,
    ":hover": { cursor: "pointer" }
})

export { Flexbox, SocialButton }