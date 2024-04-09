import React from 'react';
import { Helmet } from "react-helmet";


const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Contact Us</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div>
                <h1 className="text-3xl">Contact Us</h1>
            </div>
        </div>
    );
};

export default ContactUs;