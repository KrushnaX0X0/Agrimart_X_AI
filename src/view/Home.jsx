import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categoery from '../components/Categoery';

const Home = () => {

 useGSAP(() => {
    gsap.from("#navbar", {       
      opacity: 0, 
      duration: 1, 
      delay:1,
      y:-100
    });
  }, []);

  return (
  <>

   <div id='navbar' className='z-[9999] relative'>
    <Navbar/>
   </div>

  <Hero/>
  <Categoery/>

  
  </>
  )
}

export default Home