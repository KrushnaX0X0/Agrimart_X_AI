import React from "react";
import { FaHome, FaBoxOpen, FaPlusCircle, FaRobot, FaCloudSun, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import bg from "../../assets/bg.png";
const Sidebar = ({ setActiveSection }) => {
  const menuItems = [
    { label: "Dashboard", value: "overview", icon: <FaHome /> },
    { label: "My Products", value: "products", icon: <FaBoxOpen /> },
    { label: "Add Product", value: "addproduct", icon: <FaPlusCircle /> },
    { label: "AI Crop Advisor", value: "ai", icon: <FaRobot /> },
    { label: "Weather", value: "weather", icon: <FaCloudSun /> },
    { label: "Analytics", value: "analytics", icon: <FaChartBar /> },
    { label: "Settings", value: "settings", icon: <FaCog /> },
    { label: "Logout", value: "logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="w-[18vw] h-screen bg-green-700 text-white flex flex-col p-6 gap-6 fixed left-0 top-0">
   <div className="h-10 flex  items-center gap-4">
    <img src={bg} className="h-full object-fill" />
     <h1 className="font-bold text-xl font ">GreenChain</h1>
    </div>
           
      <ul className="flex flex-col gap-4 text-lg">
        {menuItems.map((item) => (
          <li
            key={item.value}
            onClick={() => setActiveSection(item.value)}
            className="hover:bg-green-600 p-3 rounded cursor-pointer flex items-center gap-3 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span className="text-xl text-yellow-400">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
