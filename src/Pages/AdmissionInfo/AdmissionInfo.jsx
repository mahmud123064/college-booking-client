import { Link } from "react-router-dom";

const AdmissionInfo = ({ admission }) => {
    const { college_name,_id } = admission;
    console.log(admission);
    return (
        <div>
            <div>
                <h3>{college_name}</h3>
               <Link to={`/admissionform/${admission._id}`}><button className="btn btn-secondary">Admission Now</button></Link>
            </div>
        </div>
    );
};

export default AdmissionInfo;