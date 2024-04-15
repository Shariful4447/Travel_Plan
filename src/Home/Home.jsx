import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeatuedHighLight from "./FeaturedHighLight/FeatuedHighLight";
import Trip from "./Trip/Trip";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <FeatuedHighLight></FeatuedHighLight>
            <Trip></Trip>
        </div>
    );
};

export default Home;