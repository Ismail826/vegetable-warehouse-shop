import React from 'react';
import VegInfoDisplay from '../vegInfoDisplay/VegInfoDisplay';

const VegInfo = () => {
    const vegInfoDetails = [
        {
            id: 1,
            img: 'https://www.pngmart.com/files/16/Fresh-Half-Cabbage-PNG-Image.png',
            name: 'Cabbage',
            price: "280",
        },
        {
            id: 2,
            img: 'https://www.pngmart.com/files/8/Cauliflower-PNG-HD-Photo.png',
            name: "Cauliflower",
            price: "280",
        },
        {
            id: 3,
            img: 'https://i.ibb.co/7J7Vk06/bean.png',
            name: "Deshi Bean",
            price: "280",
        }
    ]


    return (
        <div>
            <h1 className='text-center mt-4 text-3xl'>Winter Hot Collection</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-10 m-10 gap-10'>


                {
                    vegInfoDetails.map((details) => (
                        <VegInfoDisplay key={details.id} details={details}></VegInfoDisplay>
                    ))}

            </div>
        </div>

    );
};

export default VegInfo;


