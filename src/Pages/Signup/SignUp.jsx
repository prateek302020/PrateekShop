import React, { useState } from 'react'
import Login from '../../assets/Login.avif'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { auth } from '../../FirebaseAuth/FirebaseAuth'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'



const SignUp = () => {

 const navigateLogin = useNavigate();
  
const [usersignup,setusersignup] = useState({username:"",email:"",password:""})

const handleChange =(e)=>{
 setusersignup({...usersignup,[e.target.name]:e.target.value})
}
  
const handlesubmit = (e) => {
     e.preventDefault();
     if(!usersignup.username || !usersignup.email || !usersignup.password){
        return toast.error("All fields are required")
     }
     else{
        createUserWithEmailAndPassword(auth,usersignup.email,usersignup.password).then(async(res) =>{
          const user = res.user
         await updateProfile(user,{displayName: usersignup.username});
           
           navigateLogin("/Login")

        })
        .catch((error)=> toast.error(error.message))
        
     }
}

  return (
    <div>
           <div className='relative'>
        <img src={Login} alt="" className='object-cover w-full object-center h-[300px] mt-4' />
        <div className='w-full h-[300px] bg-black absolute top-0 left-0 opacity-[0.4]'></div>
        <h2 className='absolute top-[40%] left-[10%] text-white font-semibold  text-3xl md:text-5xl '>Sign Up</h2>
     </div>

      <div className="container px-5 py-24 mx-auto flex">
    <div className=" mx-auto bg-[#C6E5DA] rounded-lg p-8 flex flex-col  mt-8 md:mt-0  shadow-lg w-[450px] ">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign Up</h2>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600 font-semibold">Name</label>
        < input autoComplete='off' type="text"  name="username" value={usersignup.username} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={handleChange}
        />
      </div>

      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600 font-semibold">Email</label>
        < input autoComplete='off' type="email" id="email" name="email"  value={usersignup.email}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        onChange={handleChange}
        />
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600 font-semibold">Password</label>
        < input autoComplete='off' value={usersignup.password
        } type="Password" id="Password" name="password" className="w-full bg-white rounded border   border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={handleChange}
        />
     
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      onClick={handlesubmit}
      >SIgn Up</button>
      <p className="text-xs text-gray-500 mt-3 font-medium"> Do you an account? {""}
      <Link to = '/login'>
      <button className='cursor-pointer hover:text-blue-300'>LogIn</button>
      </Link>
      </p>
    </div>
  </div>
  </div>
  )
}

export default SignUp