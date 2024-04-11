import React from 'react';
import { Helmet } from "react-helmet";
import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';


const Home = () => {
    const estates = useLoaderData();
    console.log(estates)


    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div>
                <h1>Home: {estates.length}</h1>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;