import React from "react";
import Biography from "../components/Biography";
import About from "../components/About";
const AboutUs = () => {
  return (
    <>
      <About
      title={"Learn More About Us | VitalHub"}
      imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;