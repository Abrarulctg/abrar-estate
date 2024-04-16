import { FaStar, FaUser } from 'react-icons/fa';
import reviewUser1 from '../../assets/r-user1.jpg';
import reviewUser2 from '../../assets/r-user2.jpg';
import './ReviewPage.css';
// carusel utilities
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const ReviewPage = () => {
    const [reviewData, setReviewData] = useState([]);

    // const { id, name, photo, riview, rating } = reviewData;
    useEffect(() => {
        fetch('/review-data.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviewData(data);
            })
    }, []);

    // let ratingStar;
    // if (reviewData.rating > 4) {
    //     ratingStar = <>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //     </>
    // }
    // else if (reviewData.rating > 3) {
    //     ratingStar = <>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-gray-400'></FaStar>
    //     </>
    // }
    // else if (reviewData.rating > 2) {
    //     ratingStar = <>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-gray-400'></FaStar>
    //         <FaStar className='text-gray-400'></FaStar>
    //     </>
    // }
    // else if (reviewData.rating <= 2) {
    //     ratingStar = <>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-orange-400'></FaStar>
    //         <FaStar className='text-gray-400'></FaStar>
    //         <FaStar className='text-gray-400'></FaStar>
    //         <FaStar className='text-gray-400'></FaStar>
    //     </>
    // }
    // console.log(reviewData.rating)


    return (
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-2 bg-gray-200 rounded-xl items-center my-8'>

            <div className='w-full lg:w-2/6 p-3 lg:p-6 m-2 lg:m-10 rounded text-center items-center my-auto mt-6'>
                <h1 className='text-3xl  font-bold text-[#002366] my-3'>What our Customers Says</h1>
                <Link to="/addReview" className='btn my-4  hover:bg-[#002366] text-[#002366] hover:text-white border-2 border-[#002366] bg-gray-200 font-bold'>Add Review</Link>
            </div>


            {/* React Bootstrap Carousel */}
            <div className='w-full lg:w-4/6'>
                <Carousel showThumbs={false}>
                    {
                        reviewData.map(review => <div key={review.id} className='p-6 m-10 bg-white rounded'>
                            <div className='flex mx-auto justify-center h-[150px] w-[150px] border-4 border-[#002366] rounded-full'>
                                <img src={review.photo} className='rounded-full' alt="" />
                            </div>
                            <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>{review.name}</h1>
                            <p className='flex items-center justify-center font-bold mb-3 text-[#0c7941]'>Rating: <span className='flex ml-2'>{review.rating} / 5</span></p>
                            <h1 className="text-xl text-justify ">{review.review}</h1>
                        </div>)
                    }


                </Carousel>
            </div>

        </div>
    );
};

export default ReviewPage;