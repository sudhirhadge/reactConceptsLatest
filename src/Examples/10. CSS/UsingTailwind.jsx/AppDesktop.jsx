import React from "react";
// import "./index.css";

const Section = ({ image, name, details, reverse }) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } mb-8`}
  >
    <img src={image} alt={name} className="w-full md:w-1/2" />
    <div className="flex flex-col justify-center p-4 md:w-1/2">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="mb-4">{details}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Know More
      </button>
    </div>
  </div>
);

const AppDesktop = () => {
  const sections = [
    {
      image: "image1.jpg",
      name: "Name 1",
      details: "Details 1",
      reverse: false,
    },
    {
      image: "image2.jpg",
      name: "Name 2",
      details: "Details 2",
      reverse: true,
    },
    {
      image: "image3.jpg",
      name: "Name 3",
      details: "Details 3",
      reverse: false,
    },
    {
      image: "image4.jpg",
      name: "Name 4",
      details: "Details 4",
      reverse: true,
    },
    {
      image: "image5.jpg",
      name: "Name 5",
      details: "Details 5",
      reverse: false,
    },
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row md:flex-wrap">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default AppDesktop;
