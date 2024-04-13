import React from 'react';
import { FaUser } from 'react-icons/fa';
import reviewUser1 from '../../assets/r-user1.jpg';
import reviewUser2 from '../../assets/r-user2.jpg';
const ReviewPage = () => {

    return (
        <div className='max-w-6xl mx-auto flex gap-4 items-center bg-gray-200 rounded-xl'>
            <div className='w-full md:w-full lg:w-1/3 '>
                <h1 className="text-4xl font-bold text-[#002366] text-center">What our Customers Says</h1>
            </div>
            <div className='w-full md:w-full lg:w-2/3 '>
                <div className="carousel carousel-center rounded-box gap-4">
                    <div className="carousel-item w-3/5 p-4 bg-white rounded-xl m-3 flex-col">
                        <div className='flex justify-center'>
                            <img src={reviewUser2} className='h-[150px] w-[150px] rounded-full' alt="" />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-[#002366] my-3'>Jubair Abrar</h1>
                        <h1 className="text-xl text-justify ">Abrar Estate's commitment to hospitality shines through in every detail. The accommodations are luxurious, the amenities are first-class, and the staff are incredibly friendly and accommodating. Whether for a weekend getaway or an extended stay, Abrar Estate is the perfect choice for a memorable experience.</h1>
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;