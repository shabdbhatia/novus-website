import React from "react";
import "./../Styling/HomePage4Style.css";

const HomePage4 = () => {
  return (
    <div className="container" id="event-container">
      <h1 id="eventdiv-heading">Our Main Events</h1>

      <div id="event1-container">
        <h2 id="event1-title"> Open Innovation</h2>
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
            Open Innovation: In this Sandbox Event, participants must design and demonstrate a functional robot that adheres to one of three themes:  

Biomedical and Pharmaceutical Engineering,  

Manufacturing Infrastructure and Logistics, 

Environment Conservation.  

This competition is focused on testing your creativity and critical thinking skills, with the winners being determined after a demonstration on Event Day by a panel of PhD Candidates from the Indian Institute of Science (IISc) Bangalore. 
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
            In this Formula 1-style event, participants must build remotely controlled ground-racing robots: optimising factors of speed, manoeuvrability, weight and power to design the winner of a 10 lap, 100-metre-long race. The contest will test not only your robot making capabilities, but also your reflexes and quick thinking on the track. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;
