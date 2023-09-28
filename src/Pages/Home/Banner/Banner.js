import React from 'react';
import banner from '../../../images/banner.png';
const Banner = () => {
    return (
        <div className=" mx-auto bg-indigo-100 text-white text-center p-8 flex">
           <div className='w-50 mx-auto items-center mt-48'>
                <h1 className="text-2xl font-bold text-black">Welcome to our Website!</h1>
                <p className="mt-2 text-black">Discover amazing features and services.</p>
                <button className="mt-4 bg-white text-blue-500 py-2 px-6 rounded-full">
                    Learn More
                </button>
           </div>
           <div>
<img src={banner} alt=''/>
           </div>
        </div>
    );
};

export default Banner;