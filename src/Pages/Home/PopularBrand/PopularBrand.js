import React from 'react';
import brand1 from '../../../images/popularBrand/brand1.png'
import brand2 from '../../../images/popularBrand/brand2.png'
import brand3 from '../../../images/popularBrand/brand3.jpg'
import brand4 from '../../../images/popularBrand/brand4.jpg'
import brand5 from '../../../images/popularBrand/brand5.png'
import brand6 from '../../../images/popularBrand/brand6.png'
import PopularBrandDisplay from './PopularBrandDisplay/PopularBrandDisplay';


const PopularBrand = () => {

    const allBrand = [
        {
            _id:1,
            img:brand1,
        },
        {
            _id:2,
            img:brand2,
        },
        {
            _id:3,
            img:brand3,
        },
        {
            _id:4,
            img:brand4,
        },
        {
            _id:5,
            img:brand5,
        },
        {
            _id:6,
            img:brand6,
        },
    ]

    return (
        <section>
            <div>
                <h1 className=' text-center md:text-center text-3xl'>Popular Brand</h1>
               
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-2 m-10 gap-10 items-center'>
                    {
                        allBrand.map((brand) => (
                            <PopularBrandDisplay key={brand._id} brand={brand}></PopularBrandDisplay>
                        ))
                    }
                </div>


            </div>
        </section>


    );
};

export default PopularBrand;