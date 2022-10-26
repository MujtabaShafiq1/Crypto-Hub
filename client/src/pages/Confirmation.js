import { Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Flexbox } from "../misc/MUIComponents"

const Confirmation = () => {

    const { token } = useParams();

    const verifyUser = async () => {
        try {
            const data = await axios.post(`http://localhost:8000/auth/register`, token)
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        verifyUser();
    }, [])

    return (
        <Flexbox sx={{ minHeight: "100vh", flexDirection: "column" }}>
            <Typography>Confirmation</Typography>
            <Typography>{token}</Typography>
        </Flexbox>
    )
}

export default Confirmation