import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeatuedHighLight from "./FeaturedHighLight/FeatuedHighLight";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <FeatuedHighLight></FeatuedHighLight>
        </div>
    );
};

export default Home;