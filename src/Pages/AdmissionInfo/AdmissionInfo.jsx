import { Link } from "react-router-dom";

const AdmissionInfo = ({ admission }) => {
    const { collegeName } = admission;
    console.log(admission);
    return (
        <div>
            <div>
                <h3>{collegeName}</h3>
               <Link to={`/admissionform/${admission._id}`}><button className="btn btn-secondary">Admission Now</button></Link>
            </div>
        </div>
    );
};

export default AdmissionInfo;