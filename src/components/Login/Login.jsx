import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero">
                <div className="w-full lg:w-2/5 md:w-3/4 my-10">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <h1 className='text-center text-2xl font-bold text-[#002366] mt-8'>Please Login</h1>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>New to Abrar Estate? Please <NavLink to="/register" className="font-[500] text-purple-950">Register</NavLink></p>
                        <button className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaGoogle />
                            Signin with Google</button>
                        <button className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaFacebook />
                            Signin with Facebook</button>
                        <button className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaGithub />
                            Signin with GitHub</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;