import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="containers biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>VitalHub: Revolutionizing Healthcare Management</h3>
          <p>
            VitalHub is a pioneering force in healthcare technology, dedicated to transforming the way hospitals operate. As a leading provider of innovative hospital management software, we empower healthcare professionals to deliver exceptional patient care while optimizing operational efficiency.
          </p>
          <p>At VitalHub, we are committed to leveraging cutting-edge technology to drive innovation and improve patient outcomes. Our user-friendly interface and robust functionalities enable healthcare professionals to make data-driven decisions, enhance operational efficiency, and deliver superior care.</p>
          <p>Our commitment to innovation drives us to continuously explore new ways to leverage technology to improve the overall patient experience.</p>
          <p>
            At VitalHub, we believe that by providing healthcare organizations with the tools they need to succeed, we can contribute to a healthier future for all.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;