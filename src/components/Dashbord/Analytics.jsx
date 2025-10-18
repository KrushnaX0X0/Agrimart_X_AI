import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  
  const data = [
    { day: "Mon", sales: 300 },
    { day: "Tue", sales: 450 },
    { day: "Wed", sales: 200 },
    { day: "Thu", sales: 500 },
    { day: "Fri", sales: 700 },
    { day: "Sat", sales: 600 },
    { day: "Sun", sales: 400 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4">📊 Sales Analytics</h2>
      <p className="text-gray-700 mb-6">
        Track your weekly sales performance and customer engagement.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#16a34a" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
