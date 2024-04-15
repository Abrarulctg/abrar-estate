import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import sponsor1 from '../../assets/sponsor1.png';
import sponsor2 from '../../assets/sponsor2.jpg';
import sponsor3 from '../../assets/sponsor3.webp';
import sponsor4 from '../../assets/sponsor4.png';
import sponsor5 from '../../assets/sponsor5.png';
import sponsor6 from '../../assets/sponsor6.png';

const OurSponsor = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className="text-5xl text-center font-semibold my-10">Our Sponsors</h1>
            <div className="flex justify-center">
                {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4' data-aos="fade-up-right"> */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <img className='w-[180px] shadow rounded-xl' src={sponsor1} alt="" />
                    <img className='w-[180px] shadow rounded-xl' src={sponsor2} alt="" />
                    <img className='w-[180px] shadow rounded-xl' src={sponsor3} alt="" />
                    <img className='w-[180px] shadow rounded-xl' src={sponsor4} alt="" />
                    <img className='w-[180px] shadow rounded-xl' src={sponsor5} alt="" />
                    <img className='w-[180px] shadow rounded-xl' src={sponsor6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurSponsor;