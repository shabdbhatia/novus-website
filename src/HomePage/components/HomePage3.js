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
            NOVUS 2024 is the first Student-led Robotics Fest in the Silicon Valley of India. It is
scheduled for 19 October 2024, and is organised and hosted entirely by the students of The
International School Bangalore, for enthusiasts across the city.
The International School Bangalore (TISB) is one of the premier international schools in the
country and is rated among the top international schools in the world. TISB has a legacy of
shaping global thinkers, with many records of academic excellence and great holistic growth.
This is balanced with a wealth of co-curricular opportunity to create thinkers with a desire of
lifelong learning.
NOVUS 2024 is a non-profit Robotics Fest aimed at building a community of Mechatronics
and Robotics aficionados. This one-day event, held on 19 October 2024, encourages skill
development in enthusiasts and establishes a platform for networking between learners and
experts. This year, NOVUS 2024 will be hosting 2 unique competitive events in addition to a
collection of mini games surrounding robotics and engineering trivia.
            </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
