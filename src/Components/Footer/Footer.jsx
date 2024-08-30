import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className='bg-black text-white'>
        <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md-flex-nowrap flex-wrap flex-col'>
            <div className='w-64 md:mx-0 mx-auto text-center md:text-left'>
                <h3 className='font-bold text-2xl'>
                    Prateek <span className='text-[#7f0405]'>Shop</span>
                </h3>
            </div>
            <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 my-10 md:text-left text-center'>
                <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                    <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                        Menu
                    </h2>
                    <ul className='list-none mb-10'>
                        <li>Features</li>
                        <li className='mt-1'>Info Center</li>
                        <li className='mt-1'>News Blog</li>
                        <li className='mt-1'>Login</li>
                    </ul>
                </div>
                <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                    <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                        Company
                    </h2>
                    <ul className='list-none mb-10'>
                        <li>About Us</li>
                        <li className='mt-1'>Privacy Policy</li>
                        <li className='mt-1'>Login</li>
                        <li className='mt-1'>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                    <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                        Contact
                    </h2>
                    <ul className='list-none mb-10'>
                        <li >Contact Sales</li>
                        <li className='mt-1'>+121216464</li>
                        <li className='mt-1'>News Blog</li>
                        <li className='mt-1'>+127888200</li>
                    </ul>
                </div>
                <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                    <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                     Tech Support
                    </h2>
                    <ul className='list-none mb-10'>
                        <li>Contact Support</li>
                        <li className='mt-1'>Info Center</li>
                        <li className='mt-1'>Activities</li>
            
                    </ul>
                </div>
            </div>

        </div>
         <div className='bg-gray-500 text-white'>
            <div className='container mx-auto py-4  px-5 flex flex-wrap  flex-col sm:flex-row'>
                <p className='text-sm text-center sm:text-left'>
                © 2024 PrateekShop __<span>@copyright</span>
                </p>
                <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
               <span className='mr-2 '><FaFacebookF size={20}/> </span> <span className='mr-2'> <FaInstagram size={20} /> </span> <span className='ml-2'> <FaTwitter size={20} />
               </span>     </p>
            </div>

         </div>
    </footer>
    </>
  )
}

export default Footer