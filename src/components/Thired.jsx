import React from "react";

const Thired = () => {
  const data = [
    {
      id: 1,
      icon: "ri-plant-line",
      title: "Grown Today, Delivered Tomorrow",
      desc: "Our organic fruits and vegetables are grown by farmers who use only natural methods.",
    },
    {
      id: 2,
      icon: "ri-shopping-basket-2-line",
      title: "Fresh From Farm",
      desc: "We connect farmers directly with customers for the freshest produce every day.",
    },
    {
      id: 3,
      icon: "ri-seedling-line",
      title: "Sustainable & Pure",
      desc: "Our mission is to support eco-friendly farming and deliver 100% chemical-free produce.",
    },
  ];

  return (
    <div className="h-[50vh] w-screen flex items-center justify-evenly">
      {data.map((item) => (
        <div
          key={item.id}
          className="h-[38vh] w-[25vw] bg-amber-50 shadow-black/25 rounded-lg shadow-2xl  flex flex-col items-center gap-3 p-6 hover:scale-105 transition-transform duration-300"
        >
          <div className="h-[100px] w-[100px] bg-amber-200 flex items-center justify-center rounded-full shadow-inner">
            <i className={`${item.icon} text-5xl text-green-700`}></i>
          </div>
          <h1 className="text-center font-bold text-xl text-gray-800">
            {item.title}
          </h1>
          <p className="text-center text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Thired;
