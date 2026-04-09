import React from "react";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

const AppPracticleApplications = () => {
  return (
    <div>
      Explanation Navigation Bar (Flexbox) Flexbox is used to create a
      horizontal navigation bar. Responsive styles: The navigation links stack
      vertically on smaller screens (max-width: 768px). Photo Gallery (CSS Grid)
      CSS Grid is used to create a photo gallery with three columns. Responsive
      styles: The gallery adjusts to two columns on tablets (max-width: 768px)
      and one column on mobile devices (max-width: 480px). Key Points Flexbox is
      ideal for creating responsive navigation bars and aligning items. CSS Grid
      is perfect for creating responsive, grid-based layouts like photo
      galleries. Media queries are used to adjust the layout based on screen
      size, ensuring a responsive design.
      {/* <h2>Responsive Navigation Bar with Flexbox</h2>
      <Navbar /> */}
      <h2>Responsive Photo Gallery with CSS Grid</h2>
      <Gallery />
    </div>
  );
};

export default AppPracticleApplications;
