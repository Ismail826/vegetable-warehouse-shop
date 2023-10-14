import React from 'react';

const PopularBrandDisplay = ({ brand }) => {
    const { img } = brand;

    return (
        <section className="flex justify-center mt-6">
            <div className="mx-2 md:mx-0 md:ml-28">
                <img className="w-56 md:w-56 h-24" src={img} alt="Brand Logo" />
            </div>
        </section>
    );
};

export default PopularBrandDisplay;






