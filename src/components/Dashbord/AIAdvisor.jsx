import React from "react";

const AIAdvisor = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-green-800 mb-3">
          🤖 AI Crop Advisor
        </h2>
        <p className="text-gray-700">
          Get AI-based crop growth tips, fertilizer recommendations, and
          pest control suggestions for your field.
        </p>
      </div>
      <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all">
        Open AI Advisor
      </button>
    </div>
  );
};

export default AIAdvisor;
