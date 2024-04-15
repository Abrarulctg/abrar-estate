import React from 'react';
import { Helmet } from "react-helmet";
import Estate from '../Estate/Estate';
import { useLoaderData } from 'react-router-dom';


const Estates = () => {
    const estates = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Estates</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-3xl lg:text-7xl my-4 text-center">Estates</h1>
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4 mx-4'>
                        {/* <h1>{estates.length}</h1> */}
                        {
                            estates.map((estate, idx) => <Estate estate={estate} key={idx}></Estate>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estates;