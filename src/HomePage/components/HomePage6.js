import React from "react";
import "./../Styling/HomePage6Style.css";

const HomePage6 = () => {
  return (
    <div className="container" id="sponsor-container">
      <h1 id="sponsordiv-heading">Our sponsor</h1>

      <div id="sponsor1-container">
        <h2 id="sponsor1-title"> Champions Group</h2>
        <div id="sponsor1-subcontainer">

        <div id="sponsor-1-image-div">
          <img
            className="image"
            id="sponsor1-logo"
            src={require("./../../Resources/Robot-Image.png")}
            alt="ChampionsGroup-Logo"
          />
        </div>
        <div id="sponsor-1-desc-div">
          <p>
            
          </p>
        </div>

        </div>
        
      </div>

    </div>
  );
};

export default HomePage6;
