import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Flexbox, PageContainer } from "../components/UI";
import useFetch from "../components/hooks/useFetch";
import ProfileCover from "../components/Profile/ProfileCover";
import Loader from "../components/UI/Loader/Loader";

const Profile = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const uid = useSelector((state) => state.auth.user.id);
    const { data, isLoading, isError, fetchData } = useFetch();
    useEffect(() => {
        fetchData(`profile/${userId}`, "post", { id: uid });
        if (isError) navigate("/");
    }, [navigate, isError, userId, uid, fetchData]);
    return (
        <PageContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <Flexbox>
                    <Box sx={{ width: "95%" }}>
                        <ProfileCover userDetails={data} />
                    </Box>
                </Flexbox>
            )}
        </PageContainer>
    );
};

export default Profile;
