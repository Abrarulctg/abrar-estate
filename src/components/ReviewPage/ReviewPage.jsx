import { FaUser } from 'react-icons/fa';
import reviewUser1 from '../../assets/r-user1.jpg';
import reviewUser2 from '../../assets/r-user2.jpg';
import './ReviewPage.css';
// carusel utilities
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const ReviewPage = () => {

    return (
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-2 bg-gray-200 rounded-xl'>

            <div className='w-2/6 p-6 m-10 rounded text-center items-center my-auto'>
                <h1 className='text-3xl  font-bold text-[#002366] my-3'>What our Customers Says</h1>
                <Link to="/addReview" className='btn my-4  hover:bg-[#002366] text-[#002366] hover:text-white border-2 border-[#002366] bg-gray-200 font-bold'>Add Review</Link>
            </div>


            {/* React Bootstrap Carousel */}
            <div className='w-4/6'>
                <Carousel>

                    <div className='p-6 m-10 bg-white rounded'>
                        <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                            <img src={reviewUser1} className='rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                    <div className='p-6 m-10 bg-white rounded'>
                        <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                            <img src={reviewUser2} className=' rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                    <div className='p-6 m-10 bg-white rounded'>
                        <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                            <img src={reviewUser2} className=' rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                    <div className='p-6 m-10 bg-white rounded'>
                        <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                            <img src={reviewUser2} className=' rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                    <div className='p-6 m-10 bg-white rounded'>
                        <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                            <img src={reviewUser2} className=' rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                    <div className='p-6 m-10 bg-white rounded'>
                        <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                            <img src={reviewUser1} className=' rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                </Carousel>
            </div>

        </div>
    );
};

export default ReviewPage;