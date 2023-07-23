import { useEffect, useState } from "react";
import CollegeDetails from "../CollegeDetails/CollegeDetails";

const CollegeInfo = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/collegeinfo')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])

    return (
        <div>
            <h1 className="text-center text-4xl text-orange-500 font-bold">college info</h1>
            <p className=""><hr className="w-48 h-1 mx-auto my-2 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" /></p>

            <div className="grid md:grid-cols-3 gap-5">
                {
                    colleges.map(college => <CollegeDetails
                    key={college._id}
                    college={college}
                    ></CollegeDetails>)
                }
            </div>
        </div>
    );
};

export default CollegeInfo;