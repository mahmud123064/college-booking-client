import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Tocken;
const AdmissionForm = () => {
    const admissiondata = useLoaderData();
    const { register, handleSubmit } = useForm();

    const { college_name, college_details} = admissiondata;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { candidate_name, subject, candidate_phone, address, date_of_birth, image,college_details, candidate_email} = data;

                    const newItem = { candidate_name, subject, candidate_phone, address, date_of_birth, image: imgURL, college_details,candidate_email, admissiondata}
                    console.log(newItem);

                    fetch('https://college-booking-server-cyan.vercel.app/admission', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                }
            })
       
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
                            <input type="number" placeholder="Phone Number"
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
                            <input type="date" placeholder="Write Your Date of birth"
                                {...register("date_of_birth", { required: true, maxLength: 80 })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Candidate Email</span>
                        </label>
                        <input type="email"  placeholder = "Write your email"
                            {...register('candidate_email', { required: false, maxLength: 80 })}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">College Details</span>
                        </label>
                        <input type="text"  placeholder = {college_details}
                            {...register('college_details', { required: false, maxLength: 80 })}
                            className="input input-bordered w-full " />

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