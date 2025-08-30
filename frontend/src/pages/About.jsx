
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 sm:px-10 md:px-14 lg:px-20">

      {/* -------- Title -------- */}
      <div className='text-center text-2xl pt-10 text-gray-700'>
        <p>ABOUT <span className='text-gray-900 font-semibold'>US</span></p>
      </div>

      {/* -------- Intro Section -------- */}
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-[400px] rounded-lg shadow-lg' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to AppointY, your trusted partner in managing your healthcare needs conveniently and efficiently. At AppointY, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>AppointY is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, AppointY is here to support you every step of the way.</p>
          <b className='text-gray-900'>Our Vision</b>
          <p>Our vision at AppointY is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* -------- Why Choose Us -------- */}
      <div className='text-xl my-8 text-center'>
        <p>WHY <span className='text-gray-900 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 mb-20'>
        {[
          { title: 'EFFICIENCY', desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
          { title: 'CONVENIENCE', desc: 'Access to a network of trusted healthcare professionals in your area.' },
          { title: 'PERSONALIZATION', desc: 'Tailored recommendations and reminders to help you stay on top of your health.' }
        ].map((item, idx) => (
          <div 
  className='flex-1 border border-gray-200 rounded-xl px-8 py-10 sm:py-16 flex flex-col gap-4 text-gray-700
             hover:bg-red-100 hover:text-red-900 transition-colors duration-300 cursor-pointer'
>
  <b className='text-lg'>{item.title}:</b>
  <p className='text-sm'>{item.desc}</p>
</div>


        ))}
      </div>

    </div>
  )
}

export default About

