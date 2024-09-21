import React, { useState } from "react";
import TeamImage from "./../../Resources/Robot-Image.png";
import './../Styling/HomePage8Style.css';

const team_members = [
  {
    name: "Aditya Suresh Iyer",
    description: "Founder, Chief Organiser",
    image: TeamImage,
  },
  {
    name: "Arav Agarwal",
    description: "Managing Organiser",
    image: TeamImage,
  },
  {
    name: "Ishan Kamath",
    description: "Managing Organser",
    image: TeamImage,
  },
  {
    name: "Shabd Bhatia",
    description: "Managing Organiser, Tech HOD",
    image: TeamImage,
  },
];

const Landing8 = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const handlePrev = () => {
    setCurrentMember(
      currentMember === 0 ? team_members.length - 1 : currentMember - 1
    );
  };

  const handleNext = () => {
    setCurrentMember(
      currentMember === team_members.length - 1 ? 0 : currentMember + 1
    );
  };

  return (
    <div className="team-carousel">
      <h1 className="team-heading" id="teamsection-heading">Meet our Team</h1>
      <div className="team-card" id="teaminfo-card">
        <button className="nav-button" onClick={handlePrev}>
        &#10094;
        </button>
        <div className="team-content">
        <img className="team-image" src={team_members[currentMember].image} alt="Team Meber"/>
          <h2>{team_members[currentMember].name}</h2>
          <p>{team_members[currentMember].description}</p>
        </div>
        <button className="nav-button" onClick={handleNext}>
        &#10095;
        </button>
      </div>
    </div>
  );
};

export default Landing8;