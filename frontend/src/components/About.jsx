import React from "react";
import PropTypes from "prop-types";

const About = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero containers">
        <div className="banner ">
          <h1>{title}</h1>
          <p className="mt-4">
            <b>VITALHUB</b> is a dynamic platform dedicated to elevating healthcare delivery. We offer innovative solutions that simplify complex hospital operations, from patient records to resource management. Our mission is to empower healthcare providers to focus on what truly matters: patient care. Through advanced technology and a deep understanding of industry challenges, we deliver tools that optimize workflows, improve efficiency, and enhance overall patient experience. Partner with VitaHub to shape the future of healthcare.
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
About.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string, // You can also specify if this prop is required by adding '.isRequired'
  };

export default About;