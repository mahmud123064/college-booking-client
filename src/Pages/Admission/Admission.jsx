import { useEffect, useState } from "react";
import AdmissionInfo from "../AdmissionInfo/AdmissionInfo";

const Admission = () => {

    const [admissions, setAdmissions] = useState([]);

    useEffect(()=>{
        fetch('https://college-booking-server-cyan.vercel.app/collegeinfo')
        .then(res => res.json())
        .then(data => setAdmissions(data))
    },[])
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {
                    admissions.map(admission => <AdmissionInfo
                    key={admission._id}
                    admission = {admission}
                    ></AdmissionInfo>)
                }
            </div>
        </div>
    );
};

export default Admission;