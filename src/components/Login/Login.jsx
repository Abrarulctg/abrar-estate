import React, { useContext, useState } from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);



    const successToast = () => toast.success('User Login Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    const errorToast = (errorMessage) => toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    //handle login
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);

        //Sign in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                successToast();

            })
            .catch(err => {
                errorToast(err.message);
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                successToast()
                console.log(res.user)
            })
            .catch(err => {
                errorToast(err.message);
                console.log(err.message);
            });
    }
    return (
        <div>
            <ToastContainer />

            <Helmet>
                <title>Abrar Estate | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero">
                <div className="w-full lg:w-2/5 md:w-3/4 my-10">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 pb-8">
                        <h1 className='text-center text-2xl font-bold text-[#002366] mt-8'>Please Login</h1>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <span className="btn bg-transparent border-none absolute top-9 right-0" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash className='text-2xl' /> : <FaRegEye className='text-2xl' />}</span>
                            </div>
                            <div className="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>New to Abrar Estate? Please <NavLink to="/register" className="font-[500] text-purple-950">Register</NavLink></p>
                        <button onClick={handleGoogleLogin} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaGoogle />
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