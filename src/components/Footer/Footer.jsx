import React from 'react';
import mainLogo from '../../assets/abrar-estate-main.png'
const Footer = () => {
    return (
        <div className='bg-[#002366] '>
            <footer className="footer mx-auto text-[#ffffff99] px-5`` max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-5 mx-auto">
                    <div className="lg:w-2/6 w-full lg:ml-10">
                        <div className="py-6 lg:py-10 space-y-3 text-center lg:text-left">
                            <div className='flex justify-center'>
                                <img src={mainLogo} className='w-3/4' alt="" />
                            </div>
                            <p>Discover Your Dream Home: A modern and intuitive real estate platform showcasing curated property listings with seamless search functionality and interactive features</p>
                        </div>
                    </div>
                    <div className="w-full lg:ml-20  lg:w-4/6">
                        <div className="py-6 lg:py-12 grid grid-cols-2 lg:grid-cols-3 mx-auto justify-between ">
                            <div className="text-center lg:text-left mb-10">
                                <h1 className="mb-3 text-white font-semibold">Company</h1>
                                <ul className="space-y-2">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Leadership</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">News & Article</a></li>
                                    <li><a href="#">Legal Notice</a></li>
                                </ul>
                            </div>
                            <div className="text-center lg:text-left mb-10">
                                <h1 className="mb-3 text-white font-semibold">Support</h1>
                                <ul className="space-y-2">
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Ticket Support</a></li>
                                    <li><a href="#">Ticket Support</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="hidden lg:block text-center lg:text-left">
                                <h1 className="mb-3 text-white font-semibold">Services</h1>
                                <ul className="space-y-2">
                                    <li><a href="#">Academy</a></li>
                                    <li><a href="#">Group Lesson</a></li>
                                    <li><a href="#">Private Lesson</a></li>
                                    <li><a href="#">Hockeys for kids</a></li>
                                    <li> <a href="#">Hockeys for Adult</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:hidden mb-6">
                            <div className="text-center lg:text-left">
                                <h1 className="mb-3 text-white font-semibold">Services</h1>
                                <ul className="space-y-2">
                                    <li><a href="#">Academy</a></li>
                                    <li><a href="#">Group Lesson</a></li>
                                    <li><a href="#">Private Lesson</a></li>
                                    <li><a href="#">Hockeys for kids</a></li>
                                    <li> <a href="#">Hockeys for Adult</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;