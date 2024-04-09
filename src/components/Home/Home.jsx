import React from 'react';
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div>
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;