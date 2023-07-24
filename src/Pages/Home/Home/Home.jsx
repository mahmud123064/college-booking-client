import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Contact from "../Contact/Contact";
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
            <CallUs></CallUs>
            <Research></Research>
            <Contact></Contact>
        </div>
    );
};

export default Home;