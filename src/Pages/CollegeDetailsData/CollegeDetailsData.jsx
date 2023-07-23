import { useLoaderData } from "react-router-dom";

const CollegeDetailsData = () => {

    const data = useLoaderData()
    // console.log(data);
    const { admissionDates, admissionProcess, collegeName, collegeImage, collegeRating, details, events, eventsDetails, images, researchHistory, researchNumber, researchWorks, sports, sportsCategories } = data;
    return (
        <div className="mb-12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={collegeImage} alt="Album" /></figure>
                <div className="card-body">
                    <p><span className="font-bold">Events: </span>{events}</p>
                    <p><span className="font-bold">Sports: </span>{sports}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CollegeDetailsData;