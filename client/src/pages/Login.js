import { Box, Divider, Typography } from "@mui/material"
import { Flexbox } from "../misc/MUIComponents"

import GithubIcon from "../assets/github.png"
import GoogleIcon from "../assets/google.png"
import LinkedinIcon from "../assets/linkedin.png"

const Login = () => {

    const github = () => {
        window.open("http://localhost:8000/auth/github", "_self");
    };

    const google = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    };

    const linkedin = () => {
        console.log("open linked in ");
        // window.open("http://localhost:8000/auth/linkedin", "_self");
    };


    return (
        <Flexbox sx={{ minHeight: "100vh" }}>
            <Flexbox sx={{ minWidth: "50%", minHeight: "50vh", bgcolor: "gray" }}>
                <Box>
                    Hello
                </Box>
                <Divider orientation='vertical' sx={{ height: "35vh", marginRight: "6%", bgcolor: "black", opacity: "0.1" }} />
                <Box>
                    <Flexbox onClick={github} >
                        <Box component="img" src={GithubIcon} sx={{ width: "3%" }} />
                        <Typography>Github</Typography>
                    </Flexbox>
                    <Flexbox onClick={google} >
                        <Box component="img" src={GoogleIcon} sx={{ width: "3%" }} />
                        <Typography>Google</Typography>
                    </Flexbox>
                    <Flexbox onClick={linkedin} >
                        <Box component="img" src={LinkedinIcon} sx={{ width: "3%" }} />
                        <Typography>Linkedin</Typography>
                    </Flexbox>
                </Box>
            </Flexbox>
        </Flexbox >
    )
}

export default Login