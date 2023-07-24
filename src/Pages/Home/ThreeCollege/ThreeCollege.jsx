import { useEffect, useState } from "react";
import ThreeCollegeDetails from "../ThreeCollegeDetails/ThreeCollegeDetails";

const ThreeCollege = () => {

    const [threeColleges, SetThreeColleges] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://college-booking-server-cyan.vercel.app/collegeinfo');
            const jsonData = await response.json();
            const topThreeData = jsonData.slice(0, 3);
            console.log(topThreeData);
            SetThreeColleges(topThreeData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return (
        <div>
             <h1 className="text-center text-4xl text-orange-500 font-bold">3 College Informations</h1>
            <p className=""><hr className="w-72 h-1 mx-auto my-2 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" /></p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-2 mb-12">
                {
                    threeColleges.map(threecollege => <ThreeCollegeDetails
                    key={threecollege._id}
                    threecollege = {threecollege}
                    ></ThreeCollegeDetails>)
                }
            </div>
        </div>
    );
};

export default ThreeCollege;