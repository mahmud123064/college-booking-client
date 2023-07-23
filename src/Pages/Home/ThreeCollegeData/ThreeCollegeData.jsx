import { useLoaderData } from "react-router-dom";


const ThreeCollegeData = () => {
    const threedata = useLoaderData()

    const { admissionDates, admissionProcess, collegeName, collegeImage, collegeRating, details, events, eventsDetails, images, researchHistory, researchNumber, researchWorks, sports, sportsCategories } = threedata;
    return (
        <div className="mb-12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src= {collegeImage} className="w-[500px]" alt="Album" /></figure>
                <div className="card-body w-1/2 ">
                    <h2 className="card-title"><span>Name: </span>{collegeName}</h2>
                    <p><span className="font-semibold">Admission Process: </span>{admissionProcess}</p>
                    <p><span className="font-semibold">Events Details: </span>{eventsDetails}</p><br />
                    <p><span className="font-semibold">Description: </span>{researchWorks[0].description}</p>
                   <span className="font-semibold">Image: </span> <img className="w-36" src={researchWorks[0].image} alt="" />
                    <p><span className="font-semibold">Sports Categories: </span>{sportsCategories[0].category}</p> 
                    <p><span className="font-semibold">Categories Description: </span>{sportsCategories[0].description}</p> 
                  <span>Categories Image:</span><img className="w-36" src={sportsCategories[0].image} alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default ThreeCollegeData;