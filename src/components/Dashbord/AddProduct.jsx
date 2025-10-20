import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4"> Add New Product</h2>
      <form className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Product Name" className="border p-2 rounded" />
        <input type="text" placeholder="Category" className="border p-2 rounded" />
        <input type="number" placeholder="Price" className="border p-2 rounded" />
        <input type="number" placeholder="Stock Quantity" className="border p-2 rounded" />
        <textarea placeholder="Description" className="border p-2 rounded col-span-2"></textarea>
        <button type="submit" className="col-span-2 w-[15vw] h-[vh6] bg-green-700 text-white px-2 py-2 rounded-lg hover:bg-green-800 transition-all cursor-pointer">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
