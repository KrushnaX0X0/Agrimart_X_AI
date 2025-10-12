import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import fruteimg from "../assets/frute.png";
import 'remixicon/fonts/remixicon.css'
const Hero = () => {

  useGSAP(() => {
    gsap.from("#title", {
      opacity: 0,
      duration: 1,
      delay: 1.8,
      y: -100
    });

    gsap.from(".img-1", {
      opacity: 0,
      duration: 1.3,
      delay: 2,
      x: 200
    });


  }, []);


  return (
    <div className='h-screen w-screen  flex  items-center relative z-10 overflow-hidden'>

      <div className='h-[50vh] w-[50%] flex justify-start flex-col ml-3 gap-4 ' id='title'>

        <h1 className='text-7xl  font-bold z-10' >Make Healthy Life  With <span className='text-green-600'>Fresh Grocety</span> Products </h1>
        <p className='text-md'>Get the best quality and most delicious food in the world . you can get them our Website . Fresh Grocety</p>
        <div className='bg-green-600 w-[10vw] h-[30vh] flex justify-center items-center rounded-md text-white cursor-pointer text-md'>
          <button>  Shop Now <i className="ri-shopping-cart-2-fill"></i></button>
        </div>

        </div>
           <div className='h-full w-[50%]  overflow-hidden relative img-1'>
             <img src={fruteimg} className='rotate-270 h-full w-full object-cover absolute right-[-2%] -z-1' />
         </div>
        




    </div>
  )
}

export default Hero