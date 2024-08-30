import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { auth } from '../../FirebaseAuth/FirebaseAuth';
import toast from 'react-hot-toast';

function Navbar({cart,userName}) {
const[isopen, setisopen]= useState(false);
const ToggleOpen = () => {

    isopen === false? setisopen(true): setisopen(false);
   
}
const handlelogout = () =>{
auth.signOut().then(()=>{
    toast.success("logout successfully")

}).catch((error)=>{
      toast.error(error)
})
}

 
  return (
    <>
    <div>
        <header className='bg-gray-100 border-b-1 border-gray-200 relative mb-2'>
            <div className=' container mx-auto flex justify-between p-5 items-center '>
                <div>
                    <Link to='/Home'>
                    <h3 className='font-bold text-2xl'>
                        Prateek <span className='text-[#7F0405]'>Shop</span>
                    </h3></Link>
                </div>
             <div className='hidden md:block'>
                <ul className='flex items-center text-lg justify-center font-semibold  cursor-pointer'>
                <Link to ='/Home'>
                    <li className= 'mr-5 hover:text-gray-900 cursor-pointer'>Home </li></Link>
                    <Link to ='/allproducts'>
                    <li className= 'mr-5 hover:text-gray-900 cursor-pointer'> All Products</li>
                    </Link>
                    <Link to={"/about"}>
                    <li className= 'mr-5 hover:text-gray-900 cursor-pointer'>About</li>
                    </Link>
                    <Link to={"/contact"}>
                    <li className= 'mr-5 hover:text-gray-900 cursor-pointer'>Contact</li>
                    </Link>
                </ul>
                </div>
                {

                    isopen ? 
                <div className='w-full h-full'>
                <ul className='flex mt-4 flex-col absolute z-10 top-[61px]  gap- w-full h-screen  items-center text-lg justify-center font-semibold  cursor-pointer text-white bg bg-black'>
                <Link to ='/Home'>
                    <li className= 'mt-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
                    <Link to ='/allproducts'>
                    <li className= 'mt-5 hover:text-gray-900 cursor-pointer'> All Products</li>
                    </Link>

                
                    <li className= 'mt-5 hover:text-gray-900 cursor-pointer'>About</li>
        
                    
                    <li className= 'mt-5 hover:text-gray-900 cursor-pointer'>Contact us</li>
            
                
                </ul>
                <button onClick={ToggleOpen} className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer'>
                <RxCross2 size={30} />

                </button>

                </div> : " "
                  }

               <div className ='flex justify-center 
               items-center gap-3'>
               
              {
               userName ?(<><Link to ='/Login'>

               <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold ' onClick={handlelogout}>

                Logout
               </button>
               </Link> <span>{userName}</span></> ) : ( <Link to ='/Login'> <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold '>

                    Login
                 </button>
                 </Link>
                 )

              }

               
               <span>{userName}</span>
               
               <Link to='/Cart'>
        <button className='relative'>
        <span className=' absolute top-[-10px] text-white  right-1 px-1 rounded-full bg-[red] text-xs'>{cart.length}</span>
        <FaShoppingCart size={25}  /> 
            </button>
        
        </Link>
        {
            isopen?"": <button onClick={ToggleOpen} className='md:hidden'><GiHamburgerMenu size={25} /></button>
        }
       
               </div>
            </div>

        </header>

    </div>
    </>
  )
}

export default Navbar