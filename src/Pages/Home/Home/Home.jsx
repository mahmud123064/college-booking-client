import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import Search from "../Search/Search";
import ThreeCollege from "../ThreeCollege/ThreeCollege";

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Banner></Banner>
            <ThreeCollege></ThreeCollege>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;