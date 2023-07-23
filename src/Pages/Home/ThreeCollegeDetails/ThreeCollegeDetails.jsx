import { Link } from "react-router-dom";


const ThreeCollegeDetails = ({ threecollege }) => {

    console.log(threecollege);

    const {admissionDates, admissionProcess,collegeName,collegeImage,collegeRating,details,events,eventsDetails,images,researchHistory,researchNumber,researchWorks,sports,sportsCategories} = threecollege;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src= {collegeImage} alt="college" className="rounded-xl h-[300px] object-cover" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold"><span className="">College: </span>{collegeName}</h2>
                    <p><span className="font-semibold">Admission date: </span>{admissionDates}</p>
                    <p><span className="font-semibold">Events: </span>{events}</p>
                    <p><span className="font-semibold">Research History: </span>{researchHistory}</p>
                    <p><span className="font-semibold">Sports: </span>{sports}</p>
                    <div className="card-actions items-center mx-auto">
                       <Link to={`/threecollegedata/${threecollege}`}> <button className="btn btn-secondary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeCollegeDetails;