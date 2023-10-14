import React from 'react';
import banner from '../../../images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
    return (
        <section>
            <div className=" mx-auto bg-amber-100 text-white  p-8 md:flex justify-center items-center">
                <div className='w-96 h-96 mx-auto items-center mt-48 space-y-4'>
                    <h1 className="text-2xl font-bold text-black">Welcome to our Vegetable WareHouse!</h1>
                    <p className="mt-2 mr-14  text-black text-justify md:text-justify">Vegetables provide nutrients vital for health and maintenance of your body, such as vitamins A and C, fiber, foliate, and potassium. For a list of the health benefits associated with vegetables, see Nutrients and Health Benefits on the Vegetable page.</p>
                    <button className="mt-4 bg-white text-blue-500 py-2 px-6 rounded-full">
                        Learn More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>

                <div className=''>
                    <img className=' transition-transform transform hover:scale-110' src={banner} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Banner;