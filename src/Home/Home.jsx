import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeatuedHighLight from "./FeaturedHighLight/FeatuedHighLight";
import Trip from "./Trip/Trip";
import TripSearch from "./TripSearch/TripSearch";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <FeatuedHighLight></FeatuedHighLight>
            <Trip></Trip>
            <TripSearch></TripSearch>
        </div>
    );
};

export default Home;