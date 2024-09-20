import React from "react";
import "./../Styling/HomePage4Style.css";

const HomePage4 = () => {
  return (
    <div className="container" id="event-container">
      <h1 id="eventdiv-heading">Our Main Events</h1>

      <div id="event1-container">
        <h2 id="event1-title"> Open Showcase</h2>
        <div id="event1-subcontainer">
          <div id="event-1-image-div">
            <img
              className="image"
              id="showcase-logo"
              src={require("./../../Resources/Robot-Image.png")}
              alt="OpenShowcase-Image"
            />
          </div>
          <div id="event-1-desc-div">
            <p>
              Magna qui qui proident nisi magna qui veniam elit est. Aute
              voluptate excepteur commodo Lorem sunt esse nisi occaecat irure
              pariatur incididunt. Lorem pariatur qui irure et. Aliqua voluptate
              nisi duis consectetur ipsum nostrud culpa eiusmod duis laborum
              commodo do aliqua. Reprehenderit ad commodo magna dolor duis
              dolore dolore qui occaecat enim. Exercitation nostrud eu ex minim
              dolore amet ea id officia. Dolor do officia consequat eiusmod
              minim sit labore laborum elit fugiat velit reprehenderit. Aliquip
              incididunt ut aliqua aliquip ipsum in consequat proident magna
              anim. Ea nulla duis cillum id ad id proident sit occaecat proident
              eiusmod nostrud. Magna ad excepteur occaecat aliquip sunt amet
              voluptate duis nulla elit laboris quis sint culpa.
            </p>
          </div>
        </div>
      </div>

      <div id="event2-container">
        <h2 id="event2-title"> Roadster</h2>
        <div id="event2-subcontainer">
          <div id="event-2-image-div">
            <img
              className="image"
              id="Roadster-logo"
              src={require("./../../Resources/Robot-Image.png")}
              alt="Roadster-Image"
            />
          </div>
          <div id="event-2-desc-div">
            <p>
              Magna qui qui proident nisi magna qui veniam elit est. Aute
              voluptate excepteur commodo Lorem sunt esse nisi occaecat irure
              pariatur incididunt. Lorem pariatur qui irure et. Aliqua voluptate
              nisi duis consectetur ipsum nostrud culpa eiusmod duis laborum
              commodo do aliqua. Reprehenderit ad commodo magna dolor duis
              dolore dolore qui occaecat enim. Exercitation nostrud eu ex minim
              dolore amet ea id officia. Dolor do officia consequat eiusmod
              minim sit labore laborum elit fugiat velit reprehenderit. Aliquip
              incididunt ut aliqua aliquip ipsum in consequat proident magna
              anim. Ea nulla duis cillum id ad id proident sit occaecat proident
              eiusmod nostrud. Magna ad excepteur occaecat aliquip sunt amet
              voluptate duis nulla elit laboris quis sint culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;
