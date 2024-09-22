import React from "react";
import './../Styling/HomePage3Style.css';

const HomePage3 = () => {
  return (
    <div className="container" id="about-container">
      <h1 id="about-heading">About Us</h1>
      <div class="about-section-container" style={{backgroundColor:"var(--col-bg-orange)"}}>
        <div id="about-image-div">
          <img
            className="image"
            id="tisb-image"
            src={require("./../../Resources/Robot-Image.png")}
            alt="Novus-Image"
          />
        </div>
        <div id="about-text-div">
          <p>
NOVUS 2024 is Bangalore's First Student-led Robotics Fest. This non-profit Robotics Fest aims
to build a community of Mechatronics and Robotics aficionados. This one-day event, held on 19
October 2024, encourages skill development and creates a platform for networking between
learners and experts. This year, NOVUS 2024 will host 2 competitive challenges and a collection
of exciting minigames.
          </p>
        </div>
      </div>
      <div class="about-section-container" style={{backgroundColor:"var(--col-bg-blue)"}}>
      <div id="about-image-div">
          <img
            className="image"
            id="tisb-image"
            src={require("./../../Resources/TISB-Logo-DarkBG.png")}
            alt="TISB-Image"
          />
        </div>
        <div id="about-text-div">
          <p>
The International School Bangalore (TISB) is one of the premier international schools in the
country and is rated among the top international schools in the world. TISB has a legacy of
shaping global thinkers, with many records of academic excellence and great holistic growth.
This is balanced with a wealth of co-curricular opportunity to create thinkers with a desire of
lifelong learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
