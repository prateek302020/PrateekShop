import React, { useEffect, useState } from 'react'
import axios from "axios";
import Products from '../../assets/Products.avif'
import { Link } from 'react-router-dom';

const AllProducts = ({AddToCart}) => {

  const[originalproducts,setoriginalproducts] = useState([]);
  const[complproducts,setcomplproducts] = useState([])
  const[allcategory,setallcategory] = useState([])
  const[Selectproducts,setSelectproducts] = useState("")

const[searchItem,setsearchItem] = useState("");

const[minPrice,setminPrice] = useState("")
const[maxPrice,setmaxPrice] = useState("")

  useEffect(()=>{
    const complproduct = async()=>{
      const res = await axios ("https://dummyjson.com/products")
      setcomplproducts(res.data.products)
      setoriginalproducts(res.data.products)
    } 
    complproduct();
  },[])
  /*product category*/
  
  useEffect(()=> {
   const getAllProductscategory = async () =>{
    try{
      const res =  await axios("https://dummyjson.com/products/categories")
      setallcategory(res.data);
    }catch(error){
      console.log(error);
    }
   
  }
  getAllProductscategory();
},[])
const filterproduct = (allProducts) =>{
  setSelectproducts(allProducts);

 const data = Selectproducts? originalproducts.filter((filterItem) =>filterItem.category === allProducts)
 : originalproducts
   setcomplproducts(data)
 
}



/*single product */

 const handlesearchbybutton = () =>{

  const searchProduct = originalproducts.filter((searchfilteritem) =>(
    searchfilteritem.title.toLowerCase().includes(searchItem.toLowerCase())
  ))
  setcomplproducts(searchProduct);


 }


const handleprice =()=>{
let min = parseFloat(minPrice)
let max = parseFloat(maxPrice)

  const filterPrice = originalproducts.filter((priceitem)=>(
    ( !min || priceitem.price >=min) && (!max || priceitem.price<=max)
     
  ))
  setcomplproducts(filterPrice);
}

  return (
    <>
    <div>
    <div className='relative'>
        <img src={Products} alt="" className='object-cover w-full object-center h-[300px] mt-4' />
        <div className='w-full h-[300px] bg-black absolute top-0 left-0 opacity-[0.4]'></div>
        <h2 className='absolute top-[40%] left-[8%] text-white font-semibold  text-3xl md:text-5xl '>AllProducts</h2>
     </div>
     
<div className='bg-gray-300 p-5 m-2'>
<div className='text-center mt-4 '>
<select onChange={(e) => filterproduct(e.target.value)}>
  <option value="">Filter by category</option>
  {allcategory.slice(0,3).map((category, index) => (
    <option key={index} value={category.slug}> {/* Adjust according to your data structure */}
      {category.name} {/* Adjust according to your data structure */}
    </option>
  ))}
</select>


        
      </div>
<div className='text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3'>
        <input onChange={(e)=>setsearchItem(e.target.value)} placeholder='Search item' className='block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-400 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:blue-500 font-semibold' value={searchItem} />

        <button onClick={handlesearchbybutton} className='py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700'>Search Product </button>
      </div>

      <div className='text-center mt-4 mb-2 flex justify-center items-center md:flex-row flex-col gap-3'>

<input onChange={(e)=>setminPrice(e.target.value)} placeholder='min price' className='px-3 rounded-md py-2 font-semibold' value={minPrice} />
      
      <input onChange={(e)=>setmaxPrice(e.target.value)} placeholder='max price' className='border-3 px-2 py-2 ml-3 font-semibold' value={maxPrice} />

<button onClick={handleprice} className='py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700'>Filter by price </button>

</div>
</div>
     

     


      {/* {product section} */}


      
       
       <div className='flex gap-4 flex-wrap justify-center mt-3 mb-3'>
       {
         complproducts.map((allItem)=>(
           <div key={allItem.id} className='bg-[#ffff] shadow-md rounded-lg max-w-sm dark:bg-gray-7 '>
            <div>
            <Link to={`/Signinpage/${allItem.id}`}>
             <img className='rounded-t-lg p-8 object-cover object-center w-full h-full block' src={allItem.thumbnail} />
             </Link>
            </div>
             <div className="px-5 pb-5">
           <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white mb-2"> {allItem.title}</h3>
           <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5  rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Rating: {allItem.rating}</span>
           <div className='flex items-center justify-between'>
           <p className="mt-1 font-semibold">Price: {allItem.price} ₹  </p>

           <button onClick={()=>AddToCart(allItem) } className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700' >Add to cart</button>

           </div>
         </div>
           </div>
         ))
       }
     </div>
      
      

    

     
    </div>
    </>
  )
}

export default AllProducts