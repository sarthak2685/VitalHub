import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pediatrics from "../assets/Pediatrician.jpg";
import Orthopedics from "../assets/Orthopedics.jpg";
import Cardiology from "../assets/Cardiology.jpg";
import Neurology from "../assets/Neurology.jpg";
import Radiology from "../assets/Radiology.jpg";
import PhysicalTherapy from "../assets/Physical Therapy.jpg";
import Dermatology from "../assets/Dermatology.jpg";
import Oncology from "../assets/Oncology.jpg";
import ENT from "../assets/ENT.jpg";

const departmentsArray = [
  { name: "Pediatrics", image: Pediatrics },
  { name: "Orthopedics", image: Orthopedics },
  { name: "Cardiology", image: Cardiology },
  { name: "Neurology", image: Neurology },
  { name: "Oncology", image: Oncology },
  { name: "Radiology", image: Radiology },
  { name: "Physical Therapy", image: PhysicalTherapy },
  { name: "Dermatology", image: Dermatology },
  { name: "ENT", image: ENT },
];

const responsive = {
  large: {
    breakpoint: { max: 3000, min: 1005 },
    items: 3,
    slidesToSlide: 1,
  },
  medium: {
    breakpoint: { max: 1005, min: 700 },
    items: 2,
    slidesToSlide: 1,
  },
  small: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Departments = () => {
  return (
    <div className="pt-8 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-gray-500 text-2xl font-bold">Departments</h2>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {departmentsArray.map((depart, index) => (
          <div
            key={index}
            className="relative flex flex-1 justify-center items-end min-h-[320px] bg-white rounded-lg shadow-lg p-5 m-3 text-center hover:shadow-2xl  transition-all duration-300 ease-in-out"
          >
            <img
              src={depart.image}
              alt={depart.name}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
            />
            <div className="bg-gray-300 text-black z-10 uppercase font-bold text-xl w-[280px] py-3 rounded-full">
              {depart.name}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Departments;
