import React from 'react';
import {  Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../../../images/newArrival/beans.png'
import banner2 from '../../../images/newArrival/cabbage.png'
import banner3 from '../../../images/newArrival/cauliflower.png'
import banner4 from '../../../images/newArrival/green-pepper.png'
import banner5 from '../../../images/newArrival/tomato.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewArrivalVegetable = () => {
    const newArrivalVg = [
        {
            _id: 1,
            img: banner1,
            name: "Deshi Beans 1kg",
            price: "150",
        },
        {
            _id: 2,
            img: banner2,
            name: "Cabbage 1Pice",
            price: "50",
        },
        {
            _id: 3,
            img: banner3,
            name: "Cauliflower 1Pice",
            price: "80",
        },
        {
            _id: 4,
            img: banner4,
            name: "Green Chilli",
            price: "300",
        },
        {
            _id: 5,
            img: banner5,
            name: "Tomato",
            price: "120",
        },

    ]

    return (
        <section>
            <div>
                <h1 className='text-2xl text-center p-8 font-semibold'>New Arrival Vegetable</h1>
                <Swiper
                    // install Swiper modules
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"

                >
                    {
                        newArrivalVg.map((newVg) => (

                            <SwiperSlide key={newVg._id}>
                                <div className='container p-10 m-10 w-auto h-auto'>

                                    <div className='flex justify-center'>
                                        <img className='items-center' src={newVg.img} style={{ height: "150px" }} alt="" />
                                    </div>

                                    <div className="text-center">
                                        <h5>{newVg.name}</h5>
                                        <p style={{ color: "#EB7700", paddingBottom: "40px" }}>
                                            ${newVg.price}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}


                </Swiper>
            </div>
        </section>
    );
};

export default NewArrivalVegetable;