
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg px-6 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 my-20 md:mx-10'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 text-center md:text-left'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight'>
                    Book Appointment <br /> With 100+ Trusted Doctors
                </h1>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                    className='mt-6 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base'
                >
                    Create Account
                </button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[400px] relative mt-6 md:mt-0'>
                <img 
                    className='w-full h-auto object-contain absolute bottom-0 right-0 max-w-[370px]' 
                    src={assets.appointment_img} 
                    alt="Doctor Appointment"
                />
            </div>
        </div>
    )
}

export default Banner
