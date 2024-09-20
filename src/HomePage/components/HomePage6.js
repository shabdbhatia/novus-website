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
            Magna qui qui proident nisi magna qui veniam elit est. Aute
            voluptate excepteur commodo Lorem sunt esse nisi occaecat irure
            pariatur incididunt. Lorem pariatur qui irure et. Aliqua voluptate
            nisi duis consectetur ipsum nostrud culpa eiusmod duis laborum
            commodo do aliqua. Reprehenderit ad commodo magna dolor duis dolore
            dolore qui occaecat enim. Exercitation nostrud eu ex minim dolore
            amet ea id officia. Dolor do officia consequat eiusmod minim sit
            labore laborum elit fugiat velit reprehenderit. Aliquip incididunt
            ut aliqua aliquip ipsum in consequat proident magna anim. Ea nulla
            duis cillum id ad id proident sit occaecat proident eiusmod nostrud.
            Magna ad excepteur occaecat aliquip sunt amet voluptate duis nulla
            elit laboris quis sint culpa.
          </p>
        </div>

        </div>
        
      </div>

    </div>
  );
};

export default HomePage6;
