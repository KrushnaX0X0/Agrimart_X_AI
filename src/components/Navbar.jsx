import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/bg.png"


const Navbar = () => {

       

    return (
        <div className='h-15 w-screen  '>
            <div className='flex items-center justify-between mt-2'>
                <div className='flex items-center gap-2 ml-14'>
                    <div className='h-10'><img src={bg} className='h-full object-fill'/></div>
                   <h1 className='font-bold text-xl'>Agrimart</h1>
                </div>
                <div className=''>
                    <ul className='flex w-[40vw] justify-evenly font-medium '>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li ><Link to="/login">Login</Link></li>
                        <li className='bg-green-600 h-8 w-20 flex justify-center items-center rounded-sm text-white '><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar