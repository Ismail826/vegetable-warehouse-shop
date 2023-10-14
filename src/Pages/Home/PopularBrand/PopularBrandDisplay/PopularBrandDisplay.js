import React from 'react';

const PopularBrandDisplay = ({brand}) => {
    const {img}=brand;
    return (
       <section>
            <div className='ml-28 items-center'>
                <img className='w-56 h-24' src={img} alt='' />
            </div>
       </section>
    );
};

export default PopularBrandDisplay;