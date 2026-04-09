import React from "react";
// import "./styles.css";
// import "./slider.css";
import "./slider2.css";

const Section = ({ image, name, details, reverse }) => (
  <div className={`section ${reverse ? "reverse" : ""}`}>
    <img src={image} alt={name} className="section-image" />
    <div className="section-content">
      <h2 className="section-title">{name}</h2>
      <p className="section-details">{details}</p>
      <button className="section-button">Know More</button>
    </div>
  </div>
);

const AppAlternateImages = () => {
  const sections = [
    {
      image:
        "https://mcstg.cadburygifting.in/media/wysiwyg/headless/weddingGifts/Couple_image-min.jpg",
      name: "Name 1",
      details: "Details 1",
      reverse: false,
    },
    {
      image:
        "https://mcstg.cadburygifting.in/media/wysiwyg/headless/weddingGifts/Couple_image-min.jpg",
      name: "Name 2",
      details: "Details 2",
      reverse: true,
    },
    {
      image:
        "https://mcstg.cadburygifting.in/media/wysiwyg/headless/weddingGifts/Couple_image-min.jpg",
      name: "Name 3",
      details: "Details 3",
      reverse: false,
    },
    {
      image:
        "https://mcstg.cadburygifting.in/media/wysiwyg/headless/weddingGifts/Couple_image-min.jpg",
      name: "Name 4",
      details: "Details 4",
      reverse: true,
    },
    {
      image:
        "https://mcstg.cadburygifting.in/media/wysiwyg/headless/weddingGifts/Couple_image-min.jpg",
      name: "Name 5",
      details: "Details 5",
      reverse: false,
    },
  ];

  return (
    <div className="container">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default AppAlternateImages;
