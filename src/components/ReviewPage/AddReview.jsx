import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const AddReview = () => {
    return (
        <div className='max-w-6xl mx-auto'>

            <Helmet>
                <title>Abrar Estate | Add Review</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className="text-5xl font-bold text-center my-16">Add Review</h1>
            <div className='border w-4/6 mx-auto p-8 bg-[#00246618] rounded-xl mb-10'>
                <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold">Add a Review </h2>
                    <div className='flex flex-end text-2xl'>
                        <FaStar className='text-orange-400'></FaStar>
                        <FaStar className='text-orange-400'></FaStar>
                        <FaStar className='text-orange-400'></FaStar>
                        <FaStar className='text-orange-400'></FaStar>
                        <FaStar className='text-gray-300'></FaStar>
                    </div>
                </div>
                <textarea className='border w-full rounded-xl' name="text" id="" rows="10"></textarea>
                <button className='btn bg-[#002366] hover:bg-[#002366] px-8  text-white my-4 font-semibold'>Publish Review</button>
            </div>
        </div>
    );
};

export default AddReview;