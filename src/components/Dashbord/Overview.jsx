import React from "react";

const Overview = () => {
  const cards = [
    { title: "Total Products", value: "42", note: "Available for sale" },
    { title: "Orders Today", value: "18", note: "Active orders" },
    { title: "Revenue", value: "₹12,350", note: "This week" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-semibold text-green-700">{card.title}</h2>
          <p className="text-3xl font-bold text-gray-800">{card.value}</p>
          <p className="text-sm text-gray-500">{card.note}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
