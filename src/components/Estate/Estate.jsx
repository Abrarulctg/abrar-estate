import React from 'react';
import { FaDollarSign, FaLandmark, FaLocationArrow, FaSearchLocation, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Estate = ({ estate }) => {
    const { unique_id, image_url, estate_title, segment_name, description, price, status, area, location, facilities, rating } = estate;

    let conditionalBg = "";
    if (status === "Rent") {
        conditionalBg = "bg-red-600";
    }
    else if (status === "Sale") {
        conditionalBg = "bg-green-600";
    }

    let ratingStar;
    if (rating > 4) {
        ratingStar = <>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
        </>
    }
    else if (rating > 3) {
        ratingStar = <>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-gray-400'></FaStar>
        </>
    }
    else if (rating > 2) {
        ratingStar = <>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-gray-400'></FaStar>
            <FaStar className='text-gray-400'></FaStar>
        </>
    }
    else if (rating <= 2) {
        ratingStar = <>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-orange-400'></FaStar>
            <FaStar className='text-gray-400'></FaStar>
            <FaStar className='text-gray-400'></FaStar>
            <FaStar className='text-gray-400'></FaStar>
        </>
    }
    return (
        <div className=' border-2 border-[#002366] mb-4 rounded-xl p-4 relative space-y-2 card-compact'>
            <img className='w-full rounded-xl' src={image_url} alt="" />
            <h1 className="text-2xl font-bold text-[#002366]">{estate_title}</h1>
            <p>{description.slice(0, 100)}</p>
            <span className={`absolute top-10 right-4 px-3 py-1 rounded-l-xl  text-white font-semibold ${conditionalBg}`}>{status}</span>
            <div className='flex justify-between'>
                <p>Category: <span className='font-semibold'> {segment_name}</span></p>
                <p className='flex items-center'>Rating: <span className='flex ml-2'>{ratingStar}</span></p>
            </div>
            <div className='flex justify-between'>
                <p className='flex items-center text-gray-700 font-semibold'><FaDollarSign></FaDollarSign> {price}</p>
                <p>Area: {area} Sq Ft</p>
            </div>

            <p className='flex items-center'><FaLocationDot /> {location}</p>
            <div>
                <p className='font-bold'>Facilities:</p>
                {facilities.map((facility, idx) => <li className='ml-6' key={idx}>{facility}</li>)}
            </div>
            <div className='text-center'>
                <Link to={`/estate/${unique_id}`} className='btn btn-success mt-6 text-white font-bold'>View Property</Link>
            </div>
        </div>
    );
};

export default Estate;