import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";


const AdmissionForm = () => {
    const admissiondata = useLoaderData();
    const { register, handleSubmit} = useForm();

    const {college_name} = admissiondata;

    const onSubmit = data => {
        
        console.log(data);
    }
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-12">Selected College: {college_name}</h1>

            <div className="w-full px-10 ">
            <Helmet>
                <title> MUZ-IT | Admission</title>
            </Helmet>
            <h3 className=" font-semibold text-center text-orange-500">Please fill up your information</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Candidate Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register('candidate_name', { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Subject</span>
                        </label>
                        <input type="text" placeholder="Please Write Subject"
                            {...register("subject", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("candidate_phone", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full " />

                    </div>
                </div>
               
               <div className="flex gap-5" >
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Address</span>
                    </label>
                    <input type="text" placeholder="Write Your Address"
                        {...register("address", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Date Of Birth</span>
                    </label>
                    <input type="date" placeholder= "Write Your Date of birth"
                     {...register("date_of_birth", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />

                </div>
               </div>

                <div className="form-control w-full max-w-xs mb-12">
                    <label className="label">
                        <span className="label-text-alt font-bold">Image</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true, maxLength: 80 })}
                        className="file-input file-input-bordered file-input-primary w-full " />
                </div>
                <div className=" flex flex-col items-center justify-center">
                <input className="btn btn-secondary  " type="submit" value="Submit" />
                </div>
            </form>
        </div>
        </div>
    );
};

export default AdmissionForm;