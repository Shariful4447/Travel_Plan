import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Destinations from "./Destinations/Destinations";
import Featured from "./Featured/Featured";
import FeatuedHighLight from "./FeaturedHighLight/FeatuedHighLight";
import PromotionalText from "./PromotionalText/PromotionalText";
import ReviewSection from "./ReviewSection/ReviewSection";
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
            <Destinations></Destinations>
            <PromotionalText></PromotionalText>
            <Brand></Brand>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;