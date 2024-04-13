import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Estate = ({ estate }) => {
    const { image_url, estate_title, segment_name, description, price, status, area, location, facilities, rating } = estate;
    return (
        <div className='border-2 border-[#002366] mb-4 rounded-xl p-4'>
            <img className='w-full rounded-xl' src={image_url} alt="" />
            <h1 className="text-2xl font-bold text-[#002366]">{estate_title}</h1>

        </div>
    );
};

export default Estate;