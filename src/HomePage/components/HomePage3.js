import React from "react";
import './../Styling/HomePage3Style.css';

const HomePage3 = () => {
  return (
    <div className="container" id="about-container">
      <h1 id="about-heading">About Novus</h1>
      <div id="about-section-container">
      
        <div id="about-image-div">
          <img
            className="image"
            id="tisb-image"
            src={require("./../../Resources/Robot-Image.png")}
            alt="TISB-Image"
          />
        </div>
        
        <div id="about-text-div">
            <p>
              Magna qui qui proident nisi magna qui veniam elit est. Aute voluptate excepteur commodo Lorem sunt esse nisi occaecat irure pariatur incididunt. Lorem pariatur qui irure et.

              Aliqua voluptate nisi duis consectetur ipsum nostrud culpa eiusmod duis laborum commodo do aliqua. Reprehenderit ad commodo magna dolor duis dolore dolore qui occaecat enim. Exercitation nostrud eu ex minim dolore amet ea id officia. Dolor do officia consequat eiusmod minim sit labore laborum elit fugiat velit reprehenderit. Aliquip incididunt ut aliqua aliquip ipsum in consequat proident magna anim. Ea nulla duis cillum id ad id proident sit occaecat proident eiusmod nostrud. Magna ad excepteur occaecat aliquip sunt amet voluptate duis nulla elit laboris quis sint culpa.
            </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
