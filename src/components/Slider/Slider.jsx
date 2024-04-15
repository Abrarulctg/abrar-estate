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
import 'animate.css';


const Slider = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='z-0'>
                <Swiper className=" w-full relative"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className=''>
                        <img className='h-[250px] md:h-[350px] lg:h-auto w-full' src={slide1} alt="" />
                        <div className="animate__animated animate__bounceInLeft caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide2} alt="" />
                        <div className="animate__animated hover:animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>

                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide3} alt="" />
                        <div className="animate__animated animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide4} alt="" />
                        <div className="animate__animated animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide5} alt="" />
                        <div className="animate__animated animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide6} alt="" />
                        <div className="animate__animated animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide7} alt="" />
                        <div className="animate__animated animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>
                    <SwiperSlide><img className="h-[250px] md:h-[350px] lg:h-auto w-full" src={slide8} alt="" />
                        <div className="animate__animated animate__pulse caption absolute text-2xl md:text-4xl lg:text-6xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl top-[35%] md:top-[38%] left-[15%] md:left-[18%] right-[15%] text-center">Welcome to Abrar Estate</div>
                    </SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default Slider;