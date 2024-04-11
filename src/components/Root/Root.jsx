import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet className="Outelet"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;