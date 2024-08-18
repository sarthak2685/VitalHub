import React from "react";
import PropTypes from "prop-types";

const Appointmentt = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero containers">
        <div className="banner ">
          <h1>{title}</h1>
          <p className="mt-4">
            <b>Prioritize your health. Book an appointment.</b> <br/> With a user-friendly interface, patients can quickly and easily schedule appointments that fit their busy lives. The system is designed to minimize wait times and optimize clinic workflow, ensuring a smooth patient experience from booking to check-in.
          </p>
          
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

// Define prop types for validation
Appointmentt.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string, // You can also specify if this prop is required by adding '.isRequired'
  };

export default Appointmentt;