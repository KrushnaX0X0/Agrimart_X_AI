import React from 'react'
import dalimb from '../assets/dalimb.png'
import apple from '../assets/apple.png'
import banana from '../assets/banana.png'
import tomato from '../assets/tomato.png'
import carrot from '../assets/carrot.png'

const Categoery = () => {

    const products = [
        { id: 1, name: 'Pomegranate', price: 100, image: dalimb },
        { id: 2, name: 'Apple', price: 120, image: apple },
        { id: 3, name: 'Banana', price: 60, image: banana },
        { id: 4, name: 'Tomato', price: 40, image: tomato },
        { id: 5, name: 'Carrot', price: 50, image: carrot }
    ]

    return (
        <div className='h-screen w-screen'>
            <div className='w-full flex justify-center'>
                <div className='w-[30vw] text-center flex mt-4'>
                    <span className='text-3xl font-medium'>Enjoy Our Healthy And Fresh Groccery Items
                        <img
                            src={dalimb}
                            className='h-[50px] inline-block'
                            style={{
                                animation: 'upDown 2s ease-in-out infinite',
                            }}
                            alt='dalimb'
                        />

                        <style>
                            {`
                             @keyframes upDown {
                                                 0%, 100% { transform: translateY(-5px); }
                                                      50% { transform: translateY(5px); }
                                                } 
`}
                        </style>

                    </span>
                </div>
            </div>
            <div className='h-[50vh] w-full flex gap-5 p-4 justify-evenly'>
                {products.map((item) => (
                    <div className='h-[45vh] w-[16vw] bg-amber-50 shadow-black/25 rounded-lg shadow-2xl flex justify-center items-center  '>
                        <div className='h-[150px] w-[150px] flex flex-col  justify-center items-center gap-5 '>
                            <div className='h-32'>
                                   <img src={item?.image} alt="" className='object-fill h-50px' />
                            </div>
                             <div>
                                <h1 className='font-medium text-xl'>{item?.name}</h1>
                             </div>
                             <div>
                                <p className='font-medium'>$ {item?.price} KG</p>
                             </div>
                            <div className='border-1 px-4 py-1 cursor-pointer & hover:bg-green-600 hover:text-white rounded-sm'>
                                <button className='cursor-pointer border-none'>Add To Card</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           <div className='h-40 w-full flex items-center justify-center'>    
                <div className='h-10 w-38 border-1 flex justify-center items-center cursor-pointer & hover:bg-green-600 hover:text-white rounded-sm'><button className='border-none cursor-pointer'>View All Product</button></div>
           </div>
        </div>
    )
}

export default Categoery