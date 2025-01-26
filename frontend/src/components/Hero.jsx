import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Hero = ({ title, imageUrl }) => {
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/register");
  };

  return (
    <div className="flex bg-gray-200 z-[-1] min-h-screen p-20 md:p-24 relative">
      {/* Left Banner Section */}
      <div className=" flex flex-col justify-center items-start gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight">
          {title}
        </h1>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed tracking-wide">
          <b>VITALHUB</b> is more than just a hospital management system; it's a
          catalyst for improved patient care. By streamlining administrative
          tasks and providing real-time insights, our platform empowers
          healthcare providers to deliver exceptional patient experiences. From
          enhanced communication to efficient resource allocation,{" "}
          <b>VITALHUB</b> is designed to optimize every aspect of your
          hospital's operations, ultimately leading to better patient outcomes.
        </p>
        <div className="mt-6">
          {isAuthenticated ? (
            <button className="bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3">
              Logout
            </button>
          ) : (
            <button
              className="bg-black text-white text-lg sm:text-xl font-semibold rounded-xl px-6 py-3 mt-6"
              onClick={goToLogin}
            >
              Get Started
            </button>
          )}
        </div>
      </div>

      {/* Right Banner Section (Image) */}
      <div className=" flex justify-center items-center relative mt-8 md:mt-0">
        <img
          src={imageUrl}
          alt="hero"
          className="animate-moveUpDown transition-all ease-in-out duration-1000 max-w-full md:max-w-none"
        />
        <span className="absolute top-[-10rem] right-[-10rem] sm:top-[-15rem] sm:right-[-15rem] md:top-[-20rem] md:right-[-20rem] z-[-1]">
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
