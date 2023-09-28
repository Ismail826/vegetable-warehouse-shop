import React from 'react';
import banner from '../../../images/banner.png';
const Banner = () => {
    return (
        <div className="container mx-auto bg-blue-500 text-white text-center p-8 flex">
           <div className='w-50 mx-auto items-center'>
                <h1 className="text-2xl font-bold">Welcome to our Website!</h1>
                <p className="mt-2">Discover amazing features and services.</p>
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