import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";


const Carousel = () => {
    return (

        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
            </SwiperSlide>
        </Swiper>

    )
};

export default Carousel;