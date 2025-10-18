import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  const formRef = useRef();
  const headingRef = useRef();

  useGSAP(() => {
    // background fade-in
    gsap.from(".bg-grad", {
      opacity: 0,
      duration: 1.2,
      ease: "power1.out",
    });

    // heading animation
    gsap.from(headingRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // form animation
    gsap.from(formRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.3,
      delay: 0.4,
      ease: "back.out(1.5)",
    });
  }, []);

  return (
    <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
     <Navbar/>
      <div className="absolute inset-0 "></div>


      <div
        ref={formRef}
        className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-[380px] flex flex-col items-center"
      >
        <h1
          ref={headingRef}
          className="text-3xl font-bold text-green-800 mb-6 text-center"
        >
          Create Your Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 p-3 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Create Password"
          className="w-full mb-4 p-3 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 p-3 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition">
          Sign Up
        </button>

        <p className="mt-4 text-sm text-gray-700">
          Already have an account?{" "}
       <Link to={'/login'}>
            <span className="text-green-700 font-medium cursor-pointer hover:underline">
            Login
          </span>
       </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
