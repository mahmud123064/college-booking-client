
const MyCollegeDetails = ({ college }) => {
    console.log(college.admissiondata);
    const { candidate_name, subject, candidate_phone, address, date_of_birth, image, college_details, candidate_email,admissiondata} = college;
    
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} className="w-48" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title "><span className="font-semibold"> Name:</span>{candidate_name}</h2>
                    <p><span className="font-semibold">Email:</span>{candidate_email}</p>
                    <p><span className="font-semibold">Phone Number:</span>{candidate_phone}</p>
                    <p><span className="font-semibold">Date Of Birth:</span>{date_of_birth}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollegeDetails;