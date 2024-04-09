import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';

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
                        <h1 className='text-2xl font-bold text-[#002366] mt-4'>Please Login</h1>

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to Abrar Estate? Please <NavLink to="/register" className="font-[500] text-purple-950">Register</NavLink></p>
                        <button className='btn btn-ghost'>Signin with Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;