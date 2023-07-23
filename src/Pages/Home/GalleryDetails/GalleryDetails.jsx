

const GalleryDetails = ({ gallery }) => {
    console.log(gallery);
    const { image_url } = gallery;
    return (
        <div className="mb-12">
            {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} className="w-[500px] rounded-xl" alt="Graduation_image" /></figure>
            </div> */}
            <div className="">
                <img src={image_url} className="h-[300px] object-cover rounded-xl gap-5" alt="" />
            </div>
        </div>
    );
};

export default GalleryDetails;