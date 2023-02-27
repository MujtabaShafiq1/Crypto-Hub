import { PageContainer } from "../components/UI";
import Rightbar from "../components/Layout/Rightbar";
import Stories from "../components/MainFeed/Story/Stories";

const Home = () => {
    return (
        <>
            <PageContainer>
                <Stories />
            </PageContainer>
            <Rightbar />
        </>
    );
};

export default Home;
