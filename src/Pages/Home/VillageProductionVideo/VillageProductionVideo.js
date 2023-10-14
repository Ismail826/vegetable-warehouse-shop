import React from 'react';

const VillageProductionVideo = () => {
    return (
        <section>
            <div className='pl-14 m-8 container items-center'>
                <div>
                    <h1 className='text-3xl text-center p-2'> Vegetable Production Video </h1>
                    <h5 className='text-center text-xl p-2'>Our Village Organic Vegetable farming. Check Out Our Video and Process Our Faraming  </h5>
                </div>

                <div className=' md:pl-10 items-center' >
                    <iframe className='w-96 h-96' style={{ width: "100%", height: "500px" }} src="https://www.youtube.com/embed/nv4zp3p3D_I" title="Vegetable Farming " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VillageProductionVideo;