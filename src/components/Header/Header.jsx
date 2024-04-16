import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from '../../assets/abrar-estate-main.png';
import './Header.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(res => console.log("Sign Out Successful", res))
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <li><NavLink className="mr-4 text-white navLink" to="/">Home</NavLink></li>
        <li><NavLink className="mr-4 text-white navLink" to="/estates">Estates</NavLink></li>
        <li><NavLink className="mr-4 text-white navLink" to="/about">About</NavLink></li>
        <li><NavLink className="mr-4 text-white navLink" to="/contactUs">Contact Us</NavLink></li>
        <li><NavLink className="mr-4 text-white navLink" to="/userProfile">User Profile</NavLink></li>
        {/* <li><NavLink className="mr-4 text-white navLink" to="/updateProfile">Updte Profile</NavLink></li> */}
    </>
    return (
        <div className='bg-[#002366] '>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-999 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">Abrar Estate</a> */}
                    <img src={mainLogo} className='w-[100px] md:w-[150px] lg:w-[200px] ' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                <img className='rounded-full w-14 h-14 mr-2 bg-white p-1' src={user?.photoURL || "https://i.ibb.co/XX4DwkF/default-user.webps"} alt="" />
                            </div>
                            <button className='btn ' onClick={handleSignOut}>Logout</button>
                        </>
                            : <NavLink to="/login" className="btn">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;