import React from 'react'
import { MdLocalShipping, MdOutlinePayment,MdOutlineAssignmentReturned} from "react-icons/md";
import { SiGoogleauthenticator } from "react-icons/si";

function Service() {
  return (
   <>
   <div className='container mx-auto px-5 pt-18 flex py-11 gap-10 items-center justify-center flex-wrap'>
<div className='bg-[#808080] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
 <MdLocalShipping />
    <p>FREE SHIPPING</p>
</div>
<div className='bg-[#808080] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
<SiGoogleauthenticator />
    <p>AUTHENTIC PRODUCTS</p>
</div>
<div className='bg-[#808080] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
<MdOutlineAssignmentReturned />
    <p>EASY RETURN</p>
</div>
<div className='bg-[#808080] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
<MdOutlinePayment />
    <p>SECURE PAYMENT</p>
</div>

   </div>
   
   </>
  )
}

export default Service