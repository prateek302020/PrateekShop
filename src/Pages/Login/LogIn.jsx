import React, { useState } from 'react'

import Login from '../../assets/Login.avif'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { auth } from '../../FirebaseAuth/FirebaseAuth'
import { signInWithEmailAndPassword, } from 'firebase/auth'

const LogIn = () => {

  const navigateHome = useNavigate();
  
  const [usersignup,setusersignup] = useState({email:"",password:""})
  
  const handleChange =(e)=>{
   setusersignup({...usersignup,[e.target.name]:e.target.value})
  }
    
  const handlesubmit = (e) => {
       e.preventDefault();
       if(!usersignup.email || !usersignup.password){
          return toast.error("All fields are required")
       }
       else{
          signInWithEmailAndPassword(auth,usersignup.email,usersignup.password).then((res) =>{
        
         
             navigateHome("/Home")
  
          })
          .catch((error)=> toast.error(error.message))
          
       }
      }


  return (

    <>
    <div>
<div className='relative'>
     <div>
        <img src={Login} alt="" className='object-cover w-full object-center h-[300px] mt-4' />
        <div className='w-full h-[300px] bg-black absolute top-0 left-0 opacity-[0.4]'></div>
        <h2 className='absolute top-[20%] left-[10%] text-white font-semibold  text-3xl md:text-5xl '>Login</h2>
     </div>
     {/* Login form */}
     <div className="container px-5 py-24 mx-auto flex">
    <div className=" mx-auto bg-[#C6E5DA] rounded-lg p-8 flex flex-col  mt-8 md:mt-0  shadow-lg w-[450px] ">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Welcome! Your presence brightens our digital doorstep.</p>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600 font-semibold">Email</label>
        < input autoComplete='off' type="email" id="email" name="email"  value={usersignup.email}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        onChange={handleChange}
        />
      </div>
      <div className="relative mb-4">
        <label for="Password" className="leading-7 text-sm text-gray-600 font-semibold">Password</label>
        < input autoComplete='off' value={usersignup.password
        } type="Password" id="Password" name="password" className="w-full bg-white rounded border   border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={handleChange}
        />
     
     
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handlesubmit}>Log in</button>
      <p className="text-xs text-gray-500 mt-3 font-medium"> Don't gave an account? {""}
      <Link to = '/signup'>
      <button className='cursor-pointer hover:text-blue-300'>Sign Up</button>
      </Link>
      </p>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default LogIn