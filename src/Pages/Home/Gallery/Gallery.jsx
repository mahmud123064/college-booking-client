import { useEffect, useState } from "react";
import GalleryDetails from "../GalleryDetails/GalleryDetails";

const Gallery = () => {

    const [gallerys, setGallerys] = useState([]);

    useEffect(()=>{
        fetch('https://college-booking-server-cyan.vercel.app/gallery')
        .then(res => res.json())
        .then(data => setGallerys(data))
    },[])
    return (
        <div className="mb-8">
             <h1 className="text-center text-4xl text-orange-500 font-bold">Graduation Image Gallery</h1>
            <p className=""><hr className="w-72 h-1 mx-auto my-2 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" /></p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                gallerys.map(gallery => <GalleryDetails
                key = {gallery._id}
                gallery = {gallery}
                >
                </GalleryDetails>)
            }
        </div>
        </div>
    );
};

export default Gallery;