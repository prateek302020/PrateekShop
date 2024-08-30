import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Service from '../../Components/Service/Service'
import Gallery from '../../Components/Gallery/Gallery'
import Popularproduct from '../../Components/Popolarproduct/Popularproduct'
import Testimonial from '../../Components/Testimonial/Testimonial'

function Home({AddToCart}) {
  return (
    <div>
        <HeroSection/>
      <Service/>
        <Popularproduct AddToCart ={AddToCart}/>
        <Gallery/>
        <Testimonial/>
    </div>
  )
}

export default Home;