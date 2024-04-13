import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const estateId = useParams();

    const estates = useLoaderData();
    console.log(estateId.id)
    console.log(estates)
    const selectedEstate = estates.find(est => est.unique_id === estateId.id)
    console.log(selectedEstate)

    const { unique_id, image_url, estate_title, segment_name, description, price, status, area, location, facilities, rating } = selectedEstate;

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
        <div className='max-w-6xl mx-auto space-y-4 p-4'>
            <img className='rounded-xl my-6 w-full h-[400px]' src={image_url} alt="" />
            <div className='flex justify-between items-center'>
                <h1 className="text-5xl font-bold text-[#002366]">{estate_title}</h1>
                <p className='flex items-center'>Rating: <span className='flex ml-2 items-center'>{ratingStar} ({rating}/5)</span></p>
            </div>

            <p>{description}</p>
            <div className="flex justify-between">
                <p>Estate Category: <span className='font-bold'>{segment_name}</span></p>
                <p className='flex items-center'>Price : <span className='flex items-center font-semibold'><FaDollarSign />{price}</span></p>
                <p>Status: <span className='font-bold'>for {status}</span></p>
                <p>Area: <span className='font-bold'> {area} sq ft</span></p>
                <p > <span className='flex items-center font-bold'> <FaLocationDot className='mr-2'></FaLocationDot> {location} </span></p>
            </div>
            <div>
                <p className='font-semibold underline mb-2'>Facilities: </p>
                {facilities.map(facility => <li className='ml-6 mb-2'>{facility}</li>)}
            </div>




        </div>
    );
};

export default EstateDetails;