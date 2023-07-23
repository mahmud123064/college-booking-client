import { useEffect, useState } from "react";
import ResearchDetails from "../ResearchDetails/ResearchDetails";

const Research = () => {

    const  [researches, setResearches]  = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/research')
            .then(res => res.json())
            .then(data => setResearches(data))
    }, [])

    return (
        <div>
            <h1 className="text-center text-4xl text-orange-500 font-bold">Research Papers</h1>
            <p className=""><hr className="w-48 h-1 mx-auto my-2 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" /></p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 m-5">
                {
                    researches.map(research => <ResearchDetails
                        key={research._id}
                        research={research}
                    ></ResearchDetails>)
                }
            </div>
        </div>
    );
};

export default Research;