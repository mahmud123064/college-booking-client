
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (

        <div className="carousel w-full mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-40'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Special Education is a Service,</span> <span className='text-red-500'>Not a Place</span> </h1>
                        <p className='text-white mt-5'> “Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.” <span className='text-red-400'> — Albert Einstein</span></p>
                       <Link to = '/admission'> <button className='btn btn-secondary mt-3 border-none text-white'> Admission Now</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>Special Education is a Service,</span> <span className='text-red-500'>Not a Place</span> </h1>
                        <p className='text-white mt-5'>  “Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.” <span className='text-red-400'> —Ann Meyers</span></p>
                       <Link> <button className='btn btn-secondary mt-3 border-none text-white'>Admission Now</button></Link>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>          

        </div>


    );
};

export default Banner;