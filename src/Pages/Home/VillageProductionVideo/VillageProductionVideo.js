

import React from 'react';

const VillageProductionVideo = () => {
    return (
        <section className="p-4 md:p-8">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl text-center mb-4">Vegetable Production Video</h1>
                <h5 className="text-center text-lg mb-6">Our Village Organic Vegetable farming. Check Out Our Video and Process Our Farming</h5>
                <div className="w-full md:w-2/3">
                    <iframe className="w-full h-48 md:h-96" src="https://www.youtube.com/embed/nv4zp3p3D_I" title="Vegetable Farming" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </section>
    );
};

export default VillageProductionVideo;
