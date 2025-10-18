import React from "react";

const Analytics = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4">📊 Sales Analytics</h2>
      <p className="text-gray-700 mb-3">
        Track your weekly sales performance and customer engagement.
      </p>
      <div className="w-full h-[200px] bg-green-100 rounded-lg flex items-center justify-center text-green-800 font-semibold">
        📈 Chart Placeholder (Use Chart.js or Recharts)
      </div>
    </div>
  );
};

export default Analytics;
