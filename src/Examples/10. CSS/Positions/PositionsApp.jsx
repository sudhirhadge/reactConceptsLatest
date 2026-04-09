import React from "react";
import "./PositionsApp.css";

/*
Explanation:
App Component: Contains different boxes demonstrating various CSS positioning styles.
CSS:
- Static Positioning: Default positioning where elements follow the normal document flow.
- Relative Positioning: Elements are positioned relative to their normal position using top, right, bottom, and left properties.
- Absolute Positioning: Elements are positioned relative to the nearest positioned ancestor. If none, they are positioned relative to the document body.
- Fixed Positioning: Elements are positioned relative to the viewport and remain fixed even when the page is scrolled.
- Sticky Positioning: Elements toggle between relative and fixed positioning based on the scroll position.
*/

function PositionsApp() {
  return (
    <div className="app-container">
      <h1 className="title">CSS Positioning Demo</h1>
      <div className="positioning-container">
        <div className="box static-box">
          <p>Static Positioning</p>
          <p className="description">
            This is the default positioning. Elements are positioned according
            to the normal flow of the document.
          </p>
        </div>
        <div className="box relative-box">
          <p>Relative Positioning</p>
          <p className="description">
            Positioned relative to its normal position. Use <code>top</code>,{" "}
            <code>right</code>, <code>bottom</code>, and <code>left</code>{" "}
            properties to adjust its position.
          </p>
        </div>
        <div className="box absolute-box">
          <p>Absolute Positioning</p>
          <p className="description">
            Positioned relative to the nearest positioned ancestor. If none, it
            uses the document body.
          </p>
        </div>
        <div className="box fixed-box">
          <p>Fixed Positioning</p>
          <p className="description">
            Positioned relative to the viewport. It stays in the same place even
            when the page is scrolled.
          </p>
        </div>
        <div className="box sticky-box">
          <p>Sticky Positioning</p>
          <p className="description">
            Toggles between relative and fixed positioning, depending on the
            scroll position.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PositionsApp;
