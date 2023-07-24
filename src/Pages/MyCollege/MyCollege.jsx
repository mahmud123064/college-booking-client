import { useEffect, useState } from "react";
import MyCollegeDetails from "../MyCollegeDetails/MyCollegeDetails";

const MyCollege = () => {

    const [colleges, setColleges] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/admission')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">My College</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    colleges.map(college => <MyCollegeDetails
                    key={college._id}
                    college = {college}
                    ></MyCollegeDetails>)
                }
            </div>
        </div>
    );
};

export default MyCollege;