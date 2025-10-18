import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Sidebar from "../components/Dashbord/Sidebar";
import Overview from "../components/Dashbord/Overview";
import ProductTable from "../components/Dashbord/ProductTable";
import AIAdvisor from "../components/Dashbord/AIAdvisor";
import Weather from "../components/Dashbord/Weather";
import Analytics from "../components/Dashbord/Analytics";
import AddProduct from "../components/Dashbord/AddProduct";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const mainRef = useRef();

  // GSAP animation
  useGSAP(() => {
    gsap.from(mainRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, [activeSection]);

  // Function to render selected component
  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "products":
        return <ProductTable />;
      case "ai":
        return <AIAdvisor />;
      case "weather":
        return <Weather />;
      case "analytics":
        return <Analytics />;
      case "addproduct":
        return <AddProduct />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="h-screen w-screen bg-green-50 flex font-sans">
      <Sidebar setActiveSection={setActiveSection} />
      <div
        ref={mainRef}
        className="flex-1 ml-[18vw] p-8 overflow-y-auto flex flex-col gap-10"
      >
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
    