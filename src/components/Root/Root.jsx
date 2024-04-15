import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Root.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import AOS from 'aos';

AOS.init();

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