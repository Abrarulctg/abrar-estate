import React from 'react';
import { Helmet } from "react-helmet";
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import contactImg from '../../assets/contact-img.gif';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { IoMdSend } from "react-icons/io";


const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const position = [51.505, -0.09];

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <Helmet>
                <title>Abrar Estate | Contact Us</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-5xl text-center my-10 font-bold text-[#002366]">Get in Touch</h1>
                <div className="flex flex-col md:flex-col lg:flex-row gap-4 my-6">
                    <div className='w-full lg:w-1/2 bg-[#00246661] rounded-xl'>
                        <img src={contactImg} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 contact-form p-4' >
                        {/* React Hook Form`` */}
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                            {/* register your input into the hook by invoking the "register" function */}
                            <h1 className="text-xl">Your Name</h1>
                            <input type="text" className='form-control input w-full' placeholder="Your Name" {...register("name", { required: true })} />
                            {errors.name && <span className='error'>Name is required</span>}

                            <h1 className="text-xl">Your Email</h1>
                            <input type="email" className='form-control input w-full' placeholder="Your Email" {...register("email", { required: true })} />
                            {errors.email && <span className='error'>Email is required</span>}
                            {/* <input type="text" className='form-control input w-full h-[100px]' placeholder="Your Email" {...register("message", { required: true })} /> */}
                            <h1 className="text-xl">Your Message</h1>
                            <textarea type="text" className='form-control input w-full h-[100px]' placeholder="Your Message" {...register("message", { required: true })}></textarea>
                            {errors.message && <span className='error'>Message is required</span>}


                            {/* include validation with required or other standard HTML validation rules */}
                            {/* <input {...register("email", { required: true })} /> */}
                            {/* errors will return when field validation fails  */}
                            <br />
                            <input />
                            <button className='btn bg-white text-[#002366] font-bold border-4 px-7 border-[#002366] hover:bg-[#002366] hover:text-white' type="submit">Send <IoMdSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;