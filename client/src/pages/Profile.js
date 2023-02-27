import { useState, useEffect, useCallback } from "react";
import { Flexbox, PageContainer, BackgroundContainer, ImageContainer } from "../components/UI";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();

    const fetchUser = useCallback(async () => {
        const response = await axios.get(`http://localhost:8000/user/${userId}`);
        setUser(response.data);
    }, [userId]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <PageContainer>
            <Flexbox>
                <BackgroundContainer>
                    <ImageContainer
                        component="img"
                        src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/55680196_840508762982016_2843432267378851840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH8_FMqMnlFjH26uWQ_KpKv1B2QmrkU26fUHZCauRTbp_gqLG6Vp9alI0jAnQZmh8fT1hmZjxofgwRDoq3d3VTd&_nc_ohc=opieF5wlRkEAX-YJYlZ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDyzr3gi0mudzN1vwRgcoP-C4mRkC16-vBsGY8aAKWbIA&oe=6422F89F"
                    />
                </BackgroundContainer>
            </Flexbox>
        </PageContainer>
    );
};

export default Profile;
