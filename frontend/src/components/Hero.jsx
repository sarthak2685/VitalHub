import React from "react";
import { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";



const Hero = ({ title, imageUrl }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  /*const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/patient/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Logout failed. Please try again.";
      toast.error(message);
    }
  };*/

  const goToLogin = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="hero containers">
        <div className="banner ">
          <h1>{title}</h1>
          <p className="mt-4">
            {/*VitalHub is a state-of-the-art facility dedicated to providing 
            comprehensive healthcare services with compassion and expertise. 
            Our team of skilled professionals is committed to delivering 
            personalized care tailored to each patient's needs. 
            At VitalHub, we prioritize your well-being, ensuring a 
            harmonious journey towards optimal health and wellness.*/}
            
            <b>VITALHUB</b> is more than just a hospital management system; it's a catalyst for improved patient care. By streamlining administrative tasks and providing real-time insights, our platform empowers healthcare providers to deliver exceptional patient experiences. From enhanced communication to efficient resource allocation, <b>VITALHUB</b> is designed to optimize every aspect of your hospital's operations, ultimately leading to better patient outcomes
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
              {isAuthenticated ? (
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-6"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-white bg-black text-xl font-semibold rounded-xl px-4 py-2 cursor-pointer items-center mt-6"
                  onClick={goToLogin}
                >
                  Get Started
                </button>
              )}
              
          </div>
          
        </div>

        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span> 
        </div>
      </div>
    </>
  );
};

export default Hero;