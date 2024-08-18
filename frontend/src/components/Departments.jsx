import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];


 
const responsive = {
  extraLarge: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  large: {
    breakpoint: { max: 1324, min: 1005 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  medium: {
    breakpoint: { max: 1005, min: 700 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  small: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Departments = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold mb-6">Departments</h2>
        </div>
     
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
                  >
          {departmentsArray.map((depart, index) => (
            <div
              key={index}
              className="card bg-base-100 image-full shadow-xl transform transition-transform duration-300 hover:scale-100 ease-in-out hover:shadow-2xl"
            >
              <figure>
                <img src={depart.imageUrl} alt={depart.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{depart.name}</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};


export default Departments;