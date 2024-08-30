import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Popularproduct = ({AddToCart}) => {

    const[Popularproduct, setpopularproduct] = useState([])
    useEffect(()=>{
        const topproductFetch = async()=>{
            try{
    
                const res = await axios (`https://dummyjson.com/carts/1`)
              setpopularproduct(res.data.products);
    
            }catch(error){
                toast.error(error.message)
    
            }
                               
    
        } 
        topproductFetch();
      },[])




  return (
    <div>
   <div className='mt-10  text-center'>
      <h2 className=' text-4xl md:text-5xl font-semibold'>Popular Products</h2>
   </div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
         {

            Popularproduct.filter((item,index)=>index !==1)
            .map((popularitem) =>(

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={popularitem.id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={popularitem.thumbnail}/>
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-[20px] font-medium">{popularitem.title}</h2>
                  <p className="mt-1">{popularitem.price} ₹</p>
                </div>
                <button className=" text-white bg-indigo-500 border-0 py-1 px-1 md:px-2 focus:outline-none hover:bg-indigo-600 rounded mt-2" onClick={()=>AddToCart(popularitem)}>Add to cart</button>
              </div>
            ))
         }

     
     
    </div>
  </div>
</section>


    </div>
  )
}

export default Popularproduct