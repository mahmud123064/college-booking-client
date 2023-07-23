import { Link } from "react-router-dom";

const CollegeDetails = ({ college }) => {
    // console.log(college);

    const {admissionDates, admissionProcess,collegeName,collegeImage,collegeRating,details,events,eventsDetails,images,researchHistory,researchNumber,researchWorks,sports,sportsCategories,_id} = college;
    return (
        <div className="mb-12">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={collegeImage} className="h-[300px] object-cover" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <p>College Rating: {collegeRating}</p>
                    <p>Admission Date: {admissionDates}</p>
                    <p>Number of the research: {researchNumber}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/collegedetailsdata/${college._id}`}><button className="btn btn-primary">Details</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;