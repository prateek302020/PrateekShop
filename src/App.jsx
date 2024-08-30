import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import AllProducts from './Components/Allproducts/AllProducts'
import LogIn from './Pages/Login/LogIn'
import SignUp from './Pages/Signup/SignUp'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import toast, {Toaster} from 'react-hot-toast'
// import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FirebaseAuth/FirebaseAuth'
import Signinpage from './Pages/Signinpage/Signinpage'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  const[userName,setuserName] = useState("")

  const [cart,setcart] = useState([]);
  const[promocode,setpromocode]= useState("")
  const[invalid,setinvalid] = useState("invalid PromoCode")
  const [discount,setdiscount]  = useState(0)

  const AddToCart = (product) =>{
   const isproductexist =   cart.find((findItem)=> findItem.id === product.id)
   if(isproductexist){
     
   const updatecart= cart.map((item)=>(
      item.id ===product.id?{...item,quantity:item.quantity+1}:item
    ))

      setcart(updatecart);
      

   }
   else{

     setcart([...cart,{...product,quantity:1}]);
     toast.success("Added to Cart")
   }
  } 

const handleinc =(id) =>{
  const incQuantity= cart.map((item)=>(
    item.id===id? {...item,quantity:item.quantity+1}:item
   ))
   setcart(incQuantity)

}

 const handledec =(id)=>{

  const decQuantity= cart.map((item)=>(
    item.id===id && item.quantity>1
    ? {...item,quantity:item.quantity-1}:item
   ))
   setcart(decQuantity)
 }


 const handleremove =(id)=>{
 
   const updatebyfilter= cart.filter((filteritem) => filteritem.id!==id)
   setcart(updatebyfilter);
 }
  const getTotalPrice =()=>{
  const finalprice=  cart.reduce((total,cartReduceitem)=>{
      return  total + cartReduceitem.price  *cartReduceitem.quantity

    },0)
    return finalprice - discount;
  }
  
//Promocode
 
   
  const applyPromocode = () =>{
  if(promocode=== "DISCOUNT10"){
     setdiscount(getTotalPrice()*0.1);
     setpromocode("");
     setinvalid("");
  }
  else{
    setinvalid("invalid Promo Code");
  }
  
  }

//user name display

   useEffect(()=>{

    auth.onAuthStateChanged((user)=>{
if(user){
  setuserName(user.displayName);
}
else{
  setuserName("")
}

    }) 
   },[])


  return ( 
    <>
    <div>
      <BrowserRouter>
      <Navbar cart={cart}  userName={userName}/>
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path="/Home" element ={ <Home AddToCart ={AddToCart}/>}/>
        <Route  path="/Cart" element ={ <Cart applyPromocode={applyPromocode} getTotalPrice={getTotalPrice} handledec={handledec} handleinc={handleinc} handleremove={handleremove}  cart={cart}
        promocode={promocode}
        setpromocode={setpromocode}                    
         invalid ={invalid}
        
        />}/>
        <Route  path="/allproducts" element = {<AllProducts AddToCart ={AddToCart} />}/>
        <Route  path="/about" element = {<About/>}/>
        <Route  path="/contact" element = {<Contact/>}/>
        <Route path="/Signinpage/:id" element = {<Signinpage AddToCart ={AddToCart}  />}/>
        <Route  path="/Login" element = {<LogIn/>}/>
        <Route  path="/signup" element = {<SignUp/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
