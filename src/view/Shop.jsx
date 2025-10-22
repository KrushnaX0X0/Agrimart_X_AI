import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import carrot from "../assets/carrot.png";
import apple from "../assets/apple.png";
import tomato from "../assets/tomato.png";
import banana from "../assets/banana.png";

gsap.registerPlugin(ScrollTrigger);

const Shop = () => {

  const [search, setSearch] = useState("");
  const [like,setlike] = useState({})

  console.log(like)
  


  const productsData = [
    { id: 1, name: "Carrot", price: 40, image: carrot },
    { id: 2, name: "Apple", price: 120, image: apple },
    { id: 3, name: "Tomato", price: 30, image: tomato },
    { id: 4, name: "Banana", price: 60, image: banana },
    { id: 5, name: "Carrot", price: 40, image: carrot },
    { id: 6, name: "Apple", price: 120, image: apple },
    { id: 7, name: "Tomato", price: 30, image: tomato },
    { id: 8, name: "Banana", price: 60, image: banana },
  ];

  

  
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );


  useEffect(() => {
    
    gsap.from("#searchBar", {
      y:0,
      opacity: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    
    gsap.utils.toArray(".product-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
        opacity: 1,
        y: 60,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });
  }, [filteredProducts]);



const  toggelike = (id)=>{
      setlike((prev)=>({
       ...prev,
       [id] : !prev[id],
      }))
}

  return (
    <>
      <Navbar />

      <div className="pt-24 px-10 bg-gradient-to-br from-green-50 via-white to-emerald-100 min-h-screen">
        
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-black mb-2 tracking-wide">
            Fresh Farm Products
          </h1>
          <p className="text-green-700 text-md">
            Buy fresh and organic vegetables directly from our farmers 
          </p>
        </div>

        
        <div className=" h-[15vh]  flex justify-center items-center gap-3">
          <div className="w-[40vw]  flex justify-center items-center">
            <input
            id="searchBar"
            type="text"
            placeholder=" Search fresh products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 b rounded-full shadow-lg bg-white  focus:outline-none focus:ring-4 focus:ring-green-300 text-start text-lg"
          />
          </div>
          <div>
            <button className="h-[6vh] w-[11vw] bg-green-600 text-amber-50 text-lg rounded-lg cursor-pointer">Search</button>
          </div>
        </div>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 pb-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card bg-amber-50 rounded-2xl shadow-2xl hover:shadow-green-300/50 hover:scale-105 transition-transform duration-500 p-6 flex flex-col items-center relative"
              >
                <div className="w-[4vw] h-[3vh] bg-green-900 text-amber-50 text-[0.7em] text-center absolute left-0 top-3 flex justify-center items-center rounded-r-full">
                  20%off
                  </div>
                      <div
                  className="absolute right-4 top-2 cursor-pointer"
                  onClick={() => toggelike(product.id)}
                >
                  {like[product.id] ? (
                    <i className="ri-heart-fill text-xl text-red-500"></i>
                  ) : (
                    <i className="ri-heart-line text-xl text-gray-500"></i>
                  )}
                </div>
                <div className="h-32 w-32 mb-4 bg-gradient-to-b from-green-100 to-white rounded-full flex items-center justify-center shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-24 object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2 text-lg font-medium">₹ {product.price} / kg</p>
                <button className="mt-4 bg-green-600  text-white px-6 py-2 rounded-md cursor-pointer font-medium ">
                   Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-600 text-lg">
              No products found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};


export default Shop;
