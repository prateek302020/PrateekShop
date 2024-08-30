import React from 'react'
import Aboutus  from '../../assets/Galleryimg/Aboutus.avif'
import About1  from '../../assets/Galleryimg/About1.avif'
import About2  from '../../assets/Galleryimg/About2.avif'

const About = () => {
  return (
<div>
         <div className='relative'>
        <img src={Aboutus} alt="" className='object-cover w-full object-center h-[300px] mt-4' />
        <div className='w-full h-[300px] bg-black absolute top-0 left-0 opacity-[0.4]'></div>
        <h2 className='absolute top-[50%] left-[50%] text-[#B6D8B6] font-semibold  text-3xl md:text-4xl '>About Us</h2>
     </div>
     <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={About1}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover Our Story
        <br class="hidden lg:inline-block"/>Crafted with Passion, Defined by Purpose
      </h1>
      <p class="mb-8 leading-relaxed">Welcome to   <span className='font-semibold'>Prateek</span> <span className='font-semibold text-red-800'>Shop</span>, where passion meets purpose in every click. We believe in more than just transactions; we're here to create connections. With a commitment to quality, innovation, and customer satisfaction, we strive to transform your shopping experience into a journey of delight and discovery. Join us on this adventure as we redefine the art of online shopping, one satisfied customer at a time.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Celebrating Uniqueness <br /> One Click at a Time
      
        <br class="hidden lg:inline-block mt-1"/>Exploring Boundless Possibilities
      </h1>
      <p class="mb-8 leading-relaxed"><span className='font-semibold'>Prateek</span> <span className='font-semibold text-red-800'>Shop</span> means embark on a Journey of Inspiration and Innovation as We Redefine the Art of Shopping. Experience the Exceptional, Discover the Extraordinary, and Join Us in Building a World Where Every Purchase Tells a Story..</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-4">
      <img class="object-cover object-center rounded" alt="hero" src={About2}/>
    </div>
  </div>
</section>

     </div>
  )
}

export default About