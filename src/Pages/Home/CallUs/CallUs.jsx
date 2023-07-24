import { Link } from "react-router-dom";
import "./CallUs.css"
const CallUs = () => {
    return (
        <div className="callus rounded-xl grid place-content-center mb-12">
            <div>
                <h2 className="text-center text-white text-2xl mb-3">Do You Want Admission?</h2>
                {/* <h2 className="text-center text-white text-2xl">Call Us: +88 01759 733 296</h2> */}
                <Link to= '/admission'><button className="btn btn-accent"> Admission Now</button></Link>
            </div>
        </div>
    );
};

export default CallUs;