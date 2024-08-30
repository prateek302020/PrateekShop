import React from 'react';
import Banner from '../../assets/Banner.avif'
function HeroSection() {
  return (
    <>
    <div className='relative'>
        <div>
            <img src={Banner} className= 'w-full object-cover object-center rounded ' alt="" />
        </div>
        <div className='absolute top-[15%] left-[56%]'>
            <h1 className='text-1xl sm:text-2xl mg:text-3xl xl:text-4xl font-bold text-[#1d9292]'> Discover Your Next Adventure!</h1>
          <p className='text-center text-xl mt-5 font-bold text-[#FFF2CC]'>
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
    </div>
    </>
  )
}

export default HeroSection