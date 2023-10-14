import React from 'react';
import { Link } from 'react-router-dom';

const VegInfoDisplay = ({ details }) => {
    const { img, name } = details;
    return (
        <div style={{ border: '2px solid #c7e1ff' }} className='container flex items-center md:flex  mx-auto drop-shadow-xl rounded-2xl gap-10 '>
            <div className='w-50 gap-5 items-center md:items-center ml-4'>
                <p style={{ color: "#D1BC92" }}>NEW ARRIVALS</p>
                <h5 className='text-2xl'>{name}</h5>
                <Link to='/home' className="text-decoration-none text-black" href="">
                    VIEW COLLECTION
                </Link>
            </div>

            <div className='items-center'>
                 <img className='transition-transform transform hover:scale-110' style={{ height: '100px' }} src={img} alt='' /> 
            </div>
        </div>
    );
};

export default VegInfoDisplay;