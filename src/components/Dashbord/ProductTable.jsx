import React from "react";

const ProductTable = () => {
  const data = [
    ["Organic Tomatoes", "Vegetables", "₹60/kg", "120", "Active"],
    ["Fresh Mangoes", "Fruits", "₹90/kg", "80", "Active"],
    ["Carrots", "Vegetables", "₹50/kg", "150", "Active"],
    ["Potatoes", "Vegetables", "₹40/kg", "200", "Active"],
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4">My Products</h2>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-green-100">
          <tr className="text-left text-gray-700">
            <th className="p-3">Product</th>
            <th className="p-3">Category</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([p, c, pr, s, st]) => (
            <tr key={p} className="border-t hover:bg-green-50">
              <td className="p-3">{p}</td>
              <td className="p-3">{c}</td>
              <td className="p-3">{pr}</td>
              <td className="p-3">{s}</td>
              <td className="p-3 text-green-600 font-semibold">{st}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
