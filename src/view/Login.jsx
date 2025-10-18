import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Login = () => {
  const formRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    
    gsap.from(".bg-grad", {
      opacity: 0,
      duration: 1.5,
    });

    
    gsap.from(textRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    // Form card animation
    gsap.from(formRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
    <Navbar/>
      <div className="absolute inset-0 "></div>



      {/* Login Form */}
      <div
        ref={formRef}
        className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[350px] flex flex-col items-center"
      >
        <h1
          ref={textRef}
          className="text-3xl font-bold text-green-800 mb-6 text-center"
        >
          Welcome to <span className="text-green-600">GreenChain</span>
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-6 p-3 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition cup">
          Login
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
    <Link to={'/signup'}>
         <span className="text-green-700 font-medium cursor-pointer hover:underline">
            Sign Up
          </span>
    </Link>
        </p>    
      </div>
    </div>
  );
};

export default Login;
