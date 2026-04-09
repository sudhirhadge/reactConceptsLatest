import React from "react";
import "./FlexboxGridExample.css";

// to get responsive website use below file.
// import "./FlexboxGridExampleREsponsive"

const FlexboxGridExample = () => {
  return (
    <div className="flex-grid-container">
      <div className="flex-grid-item">Item 1</div>
      <div className="flex-grid-item">Item 2</div>
      <div className="flex-grid-item">Item 3</div>
      <div className="flex-grid-item">Item 4</div>
      <div className="flex-grid-item">Item 5</div>
      <div className="flex-grid-item">Item 6</div>
    </div>
  );
};

export default FlexboxGridExample;
