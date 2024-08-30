import React from 'react'
import G1 from '../../assets/Galleryimg/G1.avif'
import G2 from '../../assets/Galleryimg/G2.avif'
import G3 from '../../assets/Galleryimg/G3.avif'
import G4 from '../../assets/Galleryimg/G4.avif'
import G5 from '../../assets/Galleryimg/G5.avif'
import G6 from '../../assets/Galleryimg/G6.avif'

const Gallery = () => {
  return (
    <>
    <section className="text-gray-600 body-font mb-3">
  <div className="container px-5 py-21 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={G3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={G4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={G6}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>


  )
}

export default Gallery