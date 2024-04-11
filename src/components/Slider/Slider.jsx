import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from '../../assets/slider1.jpeg';
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slider3.jpg';
import slide4 from '../../assets/slider4.jpg';
import slide5 from '../../assets/slider5.jpg';
import slide6 from '../../assets/slider6.jpg';
import slide7 from '../../assets/slider7.jpg';
import slide8 from '../../assets/slider8.jpg';
import './Slider.css';

const Slider = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Slider;