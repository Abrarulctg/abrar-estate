import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Estate from '../Estate/Estate';
import ReviewPage from '../ReviewPage/ReviewPage';
import OurSponsor from '../OurSponsor/OurSponsor';


const Home = () => {

    const estates = useLoaderData();

    console.log(estates)


    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <div className="">
                    <Slider></Slider>
                </div>
                {/* <div className='absolute top-[55%] left-[15%] z-1'>
                    <h1 className='text-2xl lg:text-7xl font-bold text-[#002366] bg-[#ffffffcc] p-4 rounded-xl'>Welcome to Abrar Estate</h1>
                </div> */}
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 mx-4'>
                    {/* <h1>{estates.length}</h1> */}
                    {
                        estates.map((estate, idx) => <Estate estate={estate} key={idx}></Estate>)
                    }
                </div>
                <OurSponsor></OurSponsor>
                <ReviewPage></ReviewPage>
            </div>
        </div>
    );
};

export default Home;