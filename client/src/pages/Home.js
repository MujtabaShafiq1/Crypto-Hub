import { HomeContainer } from "../components/UI";
import Rightbar from "../components/Layout/Rightbar";
import Stories from "../components/MainFeed/Story/Stories";

const Home = () => {
    return (
        <>
            <HomeContainer>
                <Stories />
            </HomeContainer>
            <Rightbar />
        </>
    );
};

export default Home;
