import React from 'react';
import { Helmet } from "react-helmet";

const UserProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Abrar Estate | User Profile</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div>
                <h1 className="text-3xl">User Profile</h1>
            </div>
        </div>
    );
};

export default UserProfile;